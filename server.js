const express = require('express'),
    config = require('./config/config'),
    app = express();

process.env.PWD = process.cwd();

require('./middleware/middleware')(app);
require('./routes/getWeatherData')(app);

app.use(express.static(process.env.PWD + '/client/build'));

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});
