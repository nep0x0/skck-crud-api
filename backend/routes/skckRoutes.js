const express = require('express');
const router = express.Router();
const skckController = require('../controllers/skckController');


router.get('/:id', skckController.getByIdSKCK);
router.get('/', skckController.getSKCK);

router.post('/', skckController.createSKCK);

router.put('/:id', skckController.updateSKCK);
router.delete('/:id', skckController.deleteSKCK);


module.exports = router;
