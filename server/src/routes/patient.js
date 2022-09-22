const express = require('express');
const router = express.Router();


const patientController = require('../controllers/patientController')

router.get('/', patientController.getPatients);
router.get('/:id', patientController.singlePatient );
router.post('/create', patientController.postPatient);
router.patch('/update', patientController.updatePatient);
router.delete('/delete', patientController.deletePatient);

module.exports = router;