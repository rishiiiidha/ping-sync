const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const moment = require('moment');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

const messageSchema = new mongoose.Schema({
  text: String,
  dateTime: Date,
  sent: { type: Boolean, default: false },
});

const Message = mongoose.model('Message', messageSchema);
app.get("/",(req,res)=>{
   res.send('Server running')
})
app.post('/api/messages', async (req, res) => {
  const { text, dateTime } = req.body;
  const parsedDateTime = moment(dateTime);
  console.log(parsedDateTime)
  const newMessage = new Message({ text, dateTime: parsedDateTime });
  await newMessage.save();
  res.send(newMessage);
});

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find({sent:false});
  res.send(messages);
});

cron.schedule('* * * * *', async () => {
  const now = moment();
  const messages = await Message.find({ sent: false });
  messages.forEach(async (message) => {
    if (moment(message.dateTime).isSameOrBefore(now)) {
      await sendWhatsAppMessage(message.text);
      message.sent = true;
      await message.save();
    }
  });
});

async function sendWhatsAppMessage(text) {
  console.log(`Sending WhatsApp message: ${text}`);
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
        body: text,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+918328376036'
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err));
    
}

app.listen(5001, () => {
  console.log('Server is running on port 5001');

});
