const admin = require("firebase-admin");
const serviceAccount = require("./cauburger-568d6-firebase-adminsdk-mnj62-06fc6e04ef");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};