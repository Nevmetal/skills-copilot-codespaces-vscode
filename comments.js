// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event handler for CommentCreated event
app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Event received:', type);

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const status = content.includes('orange') ? 'rejected' : 'approved';

    // Emit CommentModerated event
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: { id, content, postId, status }
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Listening on 4003');
});