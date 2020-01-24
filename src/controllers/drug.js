const Drug = require('../models/drug');

module.exports = {

    index: async (req, res, next) => {
        const drugs = await Drug.find({});
        res.status(200).json(drugs);      
    },

    newDrug: async (req, res, next) => {
        const newDrug = new Drug(req.body);
        const drug = await newDrug.save();
        res.status(200).json(drug);
    },

    getDrug: async (req, res, next) => {
        const { drugId } = req.params;
        const drug = await Drug.findById(drugId);
        res.status(200).json(drug);
    },

    replaceDrug: async(req, res, next) => {
        const { drugId } = req.params;
        const newDrug = req.body;
        const oldDrug = await Drug.findByIdAndUpdate(drugId, newDrug);
        res.status(200).json({success: true});
    },

    updateDrug: async(req, res, next) => {
        const { drugId } = req.params;
        const newDrug = req.body;
        const oldDrug = await Drug.findByIdAndUpdate(drugId, newDrug);
        res.status(200).json({success: true});
    },

    deleteDrug: async(req, res, next) => {
        const { drugId } = req.params;
        await Drug.findByIdAndRemove(DrugId);
        res.status(200).json({success: true});
    }
    
};