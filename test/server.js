import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(`${__dirname}/public`));

app.get('/test', (req, res) => {
  res.status(200).send('OK');
});

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
