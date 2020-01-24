const router = require('express-promise-router')();

const {
    index,
    newDrug,
    getDrug,
    replaceDrug,
    deleteDrug
} = require('../controllers/drug');

router.get('/', index); 
router.post('/', newDrug); 

router.get('/:drugId', getDrug);
router.put('/:drugId', replaceDrug);
router.delete('/:drugId', deleteDrug);



module.exports = router;