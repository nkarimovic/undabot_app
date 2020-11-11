const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/API/contact', [
    check('email').isEmail().normalizeEmail(),
    check('message').isLength({min: 30}).trim().escape()
], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    res.json('Your message has been sent!');
});

app.listen(port);