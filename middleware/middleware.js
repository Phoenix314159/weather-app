const bodyParser = require('body-parser'),
    cors = require('cors'),
    corsOptions = {
    origin: 'http://localhost:3456'
    };

module.exports = app => {

    app.use(cors(corsOptions));

    app.use(bodyParser.json());
}
