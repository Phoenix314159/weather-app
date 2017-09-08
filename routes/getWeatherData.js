const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/weather', async (req, res) => {
        console.log(req.query.q)
        // let data = await axios.get(`${config.url}&q=${req.query.q},us`);
        let response = await axios.get(`${config.url}&q=${req.query.q},us`)

        res.status(200).send(response.data)
    })
}