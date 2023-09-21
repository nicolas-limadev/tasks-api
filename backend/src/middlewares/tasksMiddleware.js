const validateTitle = (req, res, next) => {
    const { body } = req;
    if (body.title == undefined){
        return res.status(400).json({ message: 'The field "title" is required' });
    }
    if (body.title == ''){
        return res.status(400).json({ message: 'Title canoot be empty' });
    }
    
    next();
};

const validateStatus = (req, res, next) => {
    const { body } = req;
    if (body.status == undefined){
        return res.status(400).json({ message: 'The field "status" is required' });
    }
    if (body.status == ''){
        return res.status(400).json({ message: 'Status canoot be empty' });
    }
    
    next();
};
module.exports = {
    validateTitle,
    validateStatus
};