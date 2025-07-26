const sdk = require("node-appwrite");
const { pushDatabases } = require('./app.js');
const { pushInputCollectionId, pushInputDatabaseId } = require('./push.input.js');
const documents = require('./push.input.js').documents;

async function pushDocuments() {
    for (const document of documents) {
        await pushDatabases.createDocument(
            pushInputDatabaseId,
            pushInputCollectionId,
            sdk.ID.unique(),
            document
        );
    }

    console.log('Documents pushed successfully');
}

pushDocuments()