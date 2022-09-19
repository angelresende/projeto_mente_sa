const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/sessionController');

router.get('/', sessionController.getSessions);
router.get('/:id', sessionController.singleSession);
router.post('/create', sessionController.postSession);
router.patch('/update', sessionController.updateSession);
router.delete('/delete', sessionController.deleteSession);

module.exports = router;