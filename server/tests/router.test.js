const request = require('supertest');
const express = require('express');
const router = require('../routes/router');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const {getType} = require('jest-get-type');

const app = express();
app.use(express.json());
app.use(router);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('GET /notes', () => {
  it('should return a list of notes', async () => {
    const res = await request(app).get('/notes');
    expect(res.status).toBe(200);
  });

  it('should return an array', async () => {
    const res = await request(app).get('/notes');
    expect(Array.isArray(res.body)).toBe(true);
  })
});

describe('POST /notes', () => {
  it('should create a new note and return it', async () => {
    const newNote = {
      title: 'Test title',
      body: 'Test body',
      date: new Date(),
      notebook: 'Test notebook',
      user: 1,
      favorite: false,
    };
    const res = await request(app).post('/notes').send(newNote);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(newNote.title);
  });
});

// Add similar test cases for other routes, i.e., getNote, updateNote, and deleteNote
describe('GET /notes/:id', () => {
  it('should return a note with a specific id', async () => {
    // Create a new note
    const newNote = {
      title: 'Test title',
      body: 'Test body',
      date: new Date(),
      notebook: 'Test notebook',
      user: 1,
      favorite: false,
    };
    const postRes = await request(app).post('/notes').send(newNote);
    const noteId = postRes.body._id;

    // Retrieve the created note
    const getRes = await request(app).get(`/notes/${noteId}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body.title).toBe(newNote.title);
  });
});

describe('PUT /notes/:id', () => {
  it('should update a note with a specific id and return the updated note', async () => {
    // Create a new note
    const newNote = {
      title: 'Test title',
      body: 'Test body',
      date: new Date(),
      notebook: 'Test notebook',
      user: 1,
      favorite: false,
    };
    const postRes = await request(app).post('/notes').send(newNote);
    const noteId = postRes.body._id;

    // Update the created note
    const updatedNote = {
      title: 'Updated title',
      body: 'Updated body',
      date: new Date(),
      notebook: 'Updated notebook',
      user: 2,
      favorite: true,
    };
    const putRes = await request(app).put(`/notes/${noteId}`).send(updatedNote);
    expect(putRes.status).toBe(200);
    expect(putRes.body.title).toBe(updatedNote.title);
    expect(putRes.body.body).toBe(updatedNote.body);
  });
});

describe('DELETE /notes/:id', () => {
  it('should delete a note with a specific id and return the deleted note', async () => {
    // Create a new note
    const newNote = {
      title: 'Test title',
      body: 'Test body',
      date: new Date(),
      notebook: 'Test notebook',
      user: 1,
      favorite: false,
    };
    const postRes = await request(app).post('/notes').send(newNote);
    const noteId = postRes.body._id;

    // Delete the created note
    const deleteRes = await request(app).delete(`/notes/${noteId}`);
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body.title).toBe(newNote.title);
  });
});