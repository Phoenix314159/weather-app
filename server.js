const express = require('express'),
    config = require('./config/config'),
    app = express();

require('./middleware/middleware')(app);
require('./routes/getWeatherData')(app);

app.use(express.static(__dirname + '/build'));


app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
