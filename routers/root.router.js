const express = require('express');
const router = express.Router();
const rootController = require('../controllers/root.controller');
router.get('/', rootController.signIn);
module.exports = router;