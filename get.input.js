const { collections, databaseId, } = require('./config.js');

// Enter the database ID and collection ID you want to export
const inputDatabaseId = databaseId 
const inputCollectionId = collections.appNamesId
const keys = ["title", "body"]

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
    inputDatabaseId,
    inputCollectionId,
    keys
};