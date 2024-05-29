/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.getSuiObjects = onCall(async (data, context) => {
  logger.info("Get Sui Objects", { structuredData: true });
  return {
    data: [
      {
        id: 1,
        name: "Sui Object 1",
      },
      {
        id: 2,
        name: "Sui Object 2",
      },
    ],
  };
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
