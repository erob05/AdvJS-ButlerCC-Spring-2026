const express = require('express');
const router = express.Router();
const {getInfo, selectSingle} = require('../controller/infoCon');

router.get('/',getInfo);
router.get('/:id',selectSingle);

module.exports = router;