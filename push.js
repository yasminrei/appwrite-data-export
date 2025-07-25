const sdk = require("node-appwrite");
const { databases } = require('./app.js');
const { inputCollectionId, inputDatabaseId } = require('./push.input.js');
const documents = require('./push.input.js').documents;

async function pushDocuments() {
    for (const document of documents) {
        await databases.createDocument(
            inputDatabaseId,
            inputCollectionId,
            sdk.ID.unique(),
            document
        );
    }

    console.log('Documents pushed successfully');
}

pushDocuments()