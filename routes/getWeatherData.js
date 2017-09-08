const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/weather', async (req, res) => {
        let response = await axios.get(`${config.url}&q=${req.query.q},us`)
        res.status(200).send(response.data)
    })
}