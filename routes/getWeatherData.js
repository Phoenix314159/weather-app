const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/weather', async (req, res) => {
        let data = await axios.get(``);
        res.status(200).send()
    })
}