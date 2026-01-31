const auth = require('./auth.middleware');
const admin = require('./admin.middleware');
const upload = require('./upload.middleware');
const decisionLimit = require('./decisionLimit.middleware');

module.exports = { auth, admin, upload, decisionLimit };
