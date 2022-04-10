
const {TwitterApi} = require('twitter-api-v2')



const client = new TwitterApi({
    appKey: 'TY6rE5V9mn1CCAZMhXNrYmdhE',
    appSecret: 'GTV6NWjlMdwWMRYEjyfGM4wxgIFP7ujvkd7JTiSV0PlE7ToCjc',
    accessToken: '1513009508263600128-0tMBK8qAj6TwB7GPZzLl6DIRQgd12S',
    accessSecret: 'XuJ5TQhwbzwDYNr0IkrFRETICberneNYCcf8m3f1G4E5Y',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAF1QbQEAAAAAbfIWOvOnHg8qeQFjKSpv9f0Oh2I%3DXbSkf3mulrpIfTez4ewTUrTgLPFxlcbKdy9zYjaLCQXNwdSoF3 ',
  });

const rwClient = client.readWrite
module.exports = rwClient