const { pushCollections, pushDatabaseId, } = require('./config.js');

// Enter the database ID and collection ID you want to export
const pushInputDatabaseId = pushDatabaseId 
const pushInputCollectionId = pushCollections.completionsId

const documents = [
    {
        title: "Sample Document 1",
        message: "This is a sample message for document 1.",
        image: "https://example.com/image1.jpg",
        audio: "https://example.com/audio1.mp3"
    },
]

/**
 * In the terminal
 * 
 * For exporting documents, run:
 * node get.js
 * 
 * For pushing documents, run:
 * node push.js
 */

module.exports = {
    pushInputDatabaseId,
    pushInputCollectionId,
    documents
};