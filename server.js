const express = require('express'),
  {port} = require('./config/config'),
    app = express();

process.env.PWD = process.cwd();

require('./middleware/middleware')(app);
require('./routes/getWeatherData')(app);

app.use(express.static(process.env.PWD + '/client/build'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
