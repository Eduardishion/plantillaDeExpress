var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');


router.get('/',controller.list);
router.get('/:id',controller.detail);
router.get('/create',controller.vieCreate);
router.post('/create',controller.create);
router.get('/update',controller.viewUpdate);
router.put('/update/:id',controller.update);
router.delete('/update/:id',controller.delete);

module.exports = router;
