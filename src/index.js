const bodyParser = require('body-parser');
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});
