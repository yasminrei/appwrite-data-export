const sdk = require("node-appwrite");
const { getApiKey, getProjectId, endpoint, pushApiKey, pushProjectId } = require('./config.js');

const getClient = new sdk.Client();
getClient
    .setEndpoint(endpoint)
    .setProject(getProjectId)
    .setKey(getApiKey)
;
const getDatabases = new sdk.Databases(getClient);

const pushClient = new sdk.Client();
pushClient
    .setEndpoint(endpoint)
    .setProject(pushProjectId)
    .setKey(pushApiKey)
const pushDatabases = new sdk.Databases(pushClient);

module.exports = {
    getClient,
    getDatabases,
    pushClient,
    pushDatabases
}