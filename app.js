const sdk = require("node-appwrite");
const fs = require("fs");
const { apiKey, projectId, endpoint } = require("./config");
const { inputDatabaseId, inputCollectionId } = require('./input.js');

const client = new sdk.Client();

client
    .setEndpoint(endpoint) // Your API Endpoint
    .setProject(projectId) // Your project ID
    .setKey(apiKey) // Your secret API key
;

const databases = new sdk.Databases(client);
async function getDocuments() {
    const documents = await databases.listDocuments(
        inputDatabaseId, inputCollectionId
    );

    // Write documents to result file (overwrites existing file)
    fs.writeFileSync('result.json', JSON.stringify(documents, null, 2));
    console.log('Documents exported to result.json');
}

getDocuments();