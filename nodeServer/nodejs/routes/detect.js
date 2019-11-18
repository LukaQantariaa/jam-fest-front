const express = require('express');
let path = 'C:\\Users\\gkhar\\OneDrive\\Desktop\\suratebi\\';
const router = express.Router();

let url;


router.post('/', (req, res) => {
    url = path+req.body.url;
    quickstart(res);
    
});

// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');
const vision = require('@google-cloud/vision');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlaatform/google-cloud-node/blob/master/docs/authentication.md
const projectId = 'still-vim-259300';
const keyFilename = 'routes/test-d97d7d6170ec.json';
const storage = new Storage({projectId, keyFilename});
const client = new vision.ImageAnnotatorClient({projectId, keyFilename});



async function quickstart(res) {
    const [result] = await client.labelDetection(url);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    console.log(labels[0].description);
    res.status(200).send({'category1':labels[0].description , 'category2':labels[1].description , 'category3':labels[2].description});
   
  }

module.exports = router;