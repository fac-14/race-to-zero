// booo index.js

const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('App is listening on PORT %d', app.get('port'));
});