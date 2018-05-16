const express = require('express');
const bodyParser = require('body-parser');
const messagesContoller = require('./controllers/messages_controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('/../public/build'))

const messagesBaseURL = '/api/messages';
app.post(messagesBaseURL,messagesContoller.create);

app.get(messagesBaseURL,messagesContoller.read);

app.put(`${messagesBaseURL}/:id`,messagesContoller.update);

app.delete(`${messagesBaseURL}/:id`,messagesContoller.delete);

app.listen( port, () => { console.log(`Server listening on port ${port}`); })

