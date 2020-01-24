const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://trier-systeme:1qa2ws3ed@cluster0-lyx8g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err))

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.use('/users', usersRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});
