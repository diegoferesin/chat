const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const informationController = require('./controllers/information');
const messagesController = require('./controllers/messages');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', informationController.get);
app.get('/mensajes', messagesController.list);
app.post('/mensajes', messagesController.add);
app.put('/mensajes/:id', messagesController.edit);
app.delete('/mensajes/:id', messagesController.delete);

app.listen(process.env.PORT, function() {
  console.log('chat-server app listening on port', process.env.PORT);
});
