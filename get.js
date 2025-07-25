const fs = require('fs');
const { databases } = require('./app.js');
const { inputCollectionId, inputDatabaseId } = require('./get.input.js');

const keys = require('./get.input.js').keys;

async function getDocuments() {
    const documents = await databases.listDocuments(
        inputDatabaseId,
        inputCollectionId,
    )

    console.log(documents)

    // Go through each document
    // Go through each key and push to each document
    const result = documents.documents.map(document => {
        const newDocument = {};
        keys.forEach(key => {
            if (document[key]) {
                newDocument[key] = document[key];
            }
        });
        return newDocument;
    });
    
    return fs.writeFileSync('get.result.json', JSON.stringify(result, null, 2))
}

getDocuments()