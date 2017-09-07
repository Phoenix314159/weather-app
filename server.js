const express = require('express'),
    port = process.env.PORT || 3423,
    app = express();

require('./middleware/middleware');
require('./routes/getWeatherData');

app.use(express.static(__dirname + '/client'));


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
