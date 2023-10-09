const Form = require('../model/form');
// const Contact = require('../model/contact');

// async function header(req, res){
//     try {
//         const header = await Header.findOne();
//         res.json(header);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }

// Post Contact Form Data
async function form(req, res){
    try {
        const form = await Form.create(req.body);
        res.json({ success: true, form });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    form
}