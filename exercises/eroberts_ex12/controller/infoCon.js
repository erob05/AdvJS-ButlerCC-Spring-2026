const {items} = require('../data');

const getInfo = (req,res)=> {
    res.status(200).json({items});
    res.end;
};

const selectSingle = (req,res)=> {
    const {id} = req.params;
    const singleItem = items.find((item) => item.id === Number(id));
    res.json(singleItem);
};

module.exports = { getInfo, selectSingle };