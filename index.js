
const rwClient = require('./twitterClient.js')
const express = require('express')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Escuchando en el puerto ${port}... ${host}`);
})

app.use(express.json(({ type: '*/*' })));
const data = fs.readFileSync('./images/image.png')

  

app.post('https://api.twitter.com/2/tweets', function (req, res) {
    res.send('POST request to homepage')
  })
const tweet = async () =>{
    try {
        await rwClient.v1.tweet(`@Xerito21 https://placekitten.com/${Math.floor(Math.random()*1000)}/${Math.floor(Math.random()*1000)}`)
    } catch (e) {
        console.log(e);
    }
}
tweet()
setInterval(() => {
  tweet()
}, 3600000);


// // function tweetImage() {

 
// //     // Define images path
// //     const img = fs.readFileSync('./images/image.png')


// //     rwClient.post('media/upload', {media: img}, function(error, media, response) {

// //         if (!error) {
      
// //           // If successful, a media object will be returned.
// //           console.log(media);
      
// //           // Lets tweet it
// //           const status = {
// //             status: 'I am a tweet',
// //             media_ids: media.media_id_string // Pass the media id string
// //           }
      
// //           rwClient.post('statuses/update', status, function(error, tweet, response) {
// //             if (!error) {
// //               console.log(tweet);
// //             }else{
// //               console.log(status);
// //             }
// //           });
      
// //         }
// //       });
// // }

// // tweetImage()