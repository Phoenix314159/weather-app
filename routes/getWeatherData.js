const {url} = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/weather', async (req, res) => {
        const {query: {q}} = req
        const resp = await axios.get(`${url}&q=${q},us`);
        res.status(200).send(resp.data)
    })
};