const fs = require('fs');
const { getDatabases } = require('./app.js');
const { getInputCollectionId, getInputDatabaseId, attributes } = require('./get.input.js');

async function getDocuments() {
    const documents = await getDatabases.listDocuments(
        getInputDatabaseId,
        getInputCollectionId,
    )

    console.log(documents)

    // Go through each document
    // Go through each attribute and push to each document
    const result = documents.documents.map(document => {
        const newDocument = {};
        attributes.forEach(attribute => {
            if (document[attribute]) {
                newDocument[attribute] = document[attribute];
            } else {
                newDocument[attribute] = null;
            }
        });
        return newDocument;
    });
    
    return fs.writeFileSync('get.result.json', JSON.stringify(result, null, 2))
}

getDocuments()