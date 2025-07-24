const { collections, databaseId, } = require('./config.js');

// Enter the database ID and collection ID you want to export
const inputDatabaseId = databaseId 
const inputCollectionId = collections.appNamesId;

module.exports = {
    inputDatabaseId,
    inputCollectionId
};