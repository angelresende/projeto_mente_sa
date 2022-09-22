const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const professionalController = require('../controllers/professionalController');

router.get('/', professionalController.getProfessionals);
router.get('/:id', professionalController.singleProfessional);
router.post('/create', professionalController.postProfessiobal);
router.patch('/update', professionalController.updateProfessional);
router.delete('/delete', professionalController.deleteProfessional);

module.exports = router;