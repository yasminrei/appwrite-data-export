const { getCollections, getDatabaseId, } = require('./config.js');

// Enter the database ID and collection ID you want to export
const getInputDatabaseId = getDatabaseId 
const getInputCollectionId = getCollections.appNamesId
const attributes = ["title", "body"]

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
    getInputDatabaseId,
    getInputCollectionId,
    attributes
};