require('dotenv').config()

const endpoint = process.env.VITE_ENDPOINT;

const apiKey = process.env.VITE_API_KEY;

const projectId = process.env.VITE_PROJECT_ID;

const databaseId = process.env.VITE_DATABASE_ID;

const collections = {
    interruptionsId: process.env.VITE_COLLECTION_ID_INTERRUPTIONS,
    completionsId: process.env.VITE_COLLECTION_ID_TIMERCOMPLETIONS,
    appNamesId: process.env.VITE_COLLECTION_ID_APPNAMES,
}

module.exports = {
    collections,
    databaseId,
    projectId,
    apiKey,
    endpoint
}