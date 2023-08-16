"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require('firebase-admin');
const serviceAccount = require('./firekey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
exports.default = admin;
