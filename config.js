require('dotenv').config()

const endpoint = process.env.ENDPOINT;

const getApiKey = process.env.GET_API_KEY;
const getProjectId = process.env.GET_PROJECT_ID;
const getDatabaseId = process.env.GET_DATABASE_ID;
const getCollections = {
    interruptionsId: process.env.GET_COLLECTION_ID_INTERRUPTIONS,
    completionsId: process.env.GET_COLLECTION_ID_TIMERCOMPLETIONS,
    appNamesId: process.env.GET_COLLECTION_ID_APPNAMES,
}

const pushApiKey = process.env.PUSH_API_KEY;
const pushProjectId = process.env.PUSH_PROJECT_ID;
const pushDatabaseId = process.env.PUSH_DATABASE_ID;
const pushCollections = {
    interruptionsId: process.env.PUSH_COLLECTION_ID_INTERRUPTIONS,
    completionsId: process.env.PUSH_COLLECTION_ID_TIMERCOMPLETIONS,
    appNamesId: process.env.PUSH_COLLECTION_ID_APPNAMES,
}

module.exports = {
    endpoint,
    getApiKey,
    getProjectId,
    getDatabaseId,
    getCollections,
    pushApiKey,
    pushProjectId,
    pushDatabaseId,
    pushCollections
}