const request = require('supertest');
const express = require('express');
const router = require('../routes/router');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { testNote, badNote, updatedNote, badNoteId, updatedBadNote } = require('./mocks');
const { describe, expect } = require('@jest/globals');

const app = express();
app.use(express.json());
app.use(router);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('UNIT TESTS', () => {
  describe('GET /notes', () => {
    it('should return a list of notes', async () => {
      const res = await request(app).get('/notes');
      expect(res.status).toBe(200);
    });

    it('should return an array', async () => {
      const res = await request(app).get('/notes');
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /notes', () => {
    it('should create a new note and return it', async () => {
      const res = await request(app).post('/notes').send(testNote);
      expect(res.status).toBe(201);
      expect(res.body.title).toBe(testNote.title);
    });

    it('should return an error when there is no date property', async () => {
      const res = await request(app).post('/notes').send(badNote);
      expect(res.status).toBe(500);
    });
  });

  describe('GET /notes/:id', () => {
    it('should return a note with a specific id', async () => {
      const postRes = await request(app).post('/notes').send(testNote);
      const noteId = postRes.body._id;

      const getRes = await request(app).get(`/notes/${noteId}`);
      expect(getRes.status).toBe(200);
      expect(getRes.body.title).toBe(testNote.title);
    });
    it('should return an error when note is not found', async () => {
      const getRes = await request(app).get(`/notes/${badNoteId}`);
      expect(getRes.status).toBe(404);
    });
  });

  describe('PUT /notes/:id', () => {
    it('should update a note with a specific id and return the updated note', async () => {
      const postRes = await request(app).post('/notes').send(testNote);
      const noteId = postRes.body._id;

      const putRes = await request(app)
        .put(`/notes/${noteId}`)
        .send(updatedNote);
      expect(putRes.status).toBe(200);
      expect(putRes.body.title).toBe(updatedNote.title);
      expect(putRes.body.body).toBe(updatedNote.body);
    });
    it('should return an error when note is not found', async () => {
      const putRes = await request(app).put(`/notes/${badNoteId}`);
      expect(putRes.status).toBe(404);
    });
    it('should return an error if note update fails', async () => {
      const postRes = await request(app).post('/notes').send(testNote);
      const noteId = postRes.body._id;

      const putRes = await request(app)
        .put(`/notes/${noteId}`)
        .send(updatedBadNote);

      expect(putRes.status).toBe(409);
    });
  });

  describe('DELETE /notes/:id', () => {
    it('should delete a note with a specific id and return the deleted note', async () => {
      const postRes = await request(app).post('/notes').send(testNote);
      const noteId = postRes.body._id;

      const deleteRes = await request(app).delete(`/notes/${noteId}`);
      expect(deleteRes.status).toBe(200);
      expect(deleteRes.body.title).toBe(testNote.title);
    });

    it('Should return an error if there is no note to delete', async () => {
      const deleteRes = await request(app).delete(`/notes/${badNoteId}`);
      expect(deleteRes.status).toBe(404);
    });
  });

  describe('Other', () => {
    it('should redirect all undefined routes to root', async () => {
      const res = await request(app).get(`/69`);
      expect(res.status).toEqual(302);
      expect(res.headers.location).toEqual('/');
    });
  });
});

describe('INTEGRATION TESTS', () => {
  it('should retrieve posted note from DB', async () => {
    await request(app).post('/notes').send(testNote);
    const res = await request(app).get('/notes');
    expect(res.body[0].title).toBe(testNote.title);
  });
  it('should not find deleted note', async () => {
    const postRes = await request(app).post('/notes').send(testNote);
    const noteId = postRes.body._id;

    const deleteRes = await request(app).delete(`/notes/${noteId}`);
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body.title).toBe(testNote.title);

    const getRes = await request(app).get(`/notes/${noteId}`);

    expect(getRes.status).toBe(404);
  });
});
