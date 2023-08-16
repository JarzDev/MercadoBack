const admin = require('firebase-admin');

const serviceAccount = require('./firekey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;