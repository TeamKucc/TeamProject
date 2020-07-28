const authToken = 'f54f6c936b3f92adb13ce791dd0e3f19';
const accountSid = 'AC5ef872f6da5a21de157d80997a64bd33';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+8201051199710',
    from: '+14158141829',
    body: "Tomorrow's forecast in Financial District, San Francisco is Clear",
    mediaUrl: 'https://climacons.herokuapp.com/clear.png',
  })
  .then((message) => console.log(message.sid));