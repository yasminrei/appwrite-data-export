const { collections, databaseId, } = require('./config.js');

// Enter the database ID and collection ID you want to export
const inputDatabaseId = databaseId 
const inputCollectionId = collections.appNamesId

const documents = [
  {
    "title": "Mom O’Clock",
    "body": "3… 2… 1… Mom’s incoming! 🚪"
  },
  {
    "title": "Parental Guidance Timer",
    "body": "Rated M for Mom Interruptions"
  },
  {
    "title": "Parental Guidance Timer",
    "body": "Study hard… or get grounded!"
  },
  {
    "title": "Focus or Fumble",
    "body": "When the study grind meets mom’s sixth sense…"
  },
  {
    "title": "Under Mom’s Watch",
    "body": "When the study grind meets mom’s sixth sense…"
  },
  {
    "title": "Mom-itor",
    "body": "When the study grind meets mom’s sixth sense…"
  },
  {
    "title": "Study Snitch",
    "body": "5 seconds on TikTok? SNITCHED. 🚨"
  },
  {
    "title": "Focus Fails",
    "body": "Study hard… until Mom walks in 💥"
  },
  {
    "title": "Caught in 4K",
    "body": "When Mom catches you in Ultra HD 📸"
  },
  {
    "title": "Mom’s 4K\n",
    "body": "When Mom catches you in Ultra HD 📸"
  },
  {
    "title": "Parental Grind-sight",
    "body": "Study now, explain your screen time later."
  }
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
    inputDatabaseId,
    inputCollectionId,
    documents
};