const sdk = require("node-appwrite");
const { apiKey, projectId, endpoint } = require("./config");

const client = new sdk.Client();

client
    .setEndpoint(endpoint) // Your API Endpoint
    .setProject(projectId) // Your project ID
    .setKey(apiKey) // Your secret API key
;

const databases = new sdk.Databases(client);

module.exports = {
    client,
    databases,
}
