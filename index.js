// Load environment variables from the `.env` file.
require('dotenv').config();
// const axios = require('axios');
const fs = require('fs');
const https = require('https');

/**
 * Fetch a video link based on the provided topic using the Pexels API.
 *
 * @param {string} topic - The search topic for the video.
 * @param {string} apiKey - The API key used to authenticate the request.
 * @param {string} minTime - The minimal amount of time for a video
 * @returns {string|null} - The link of the HD video or null if not found.
 */
async function getVideo(topic, apiKey,minTime) {
    try {
        // Make an API request to the Pexels video search endpoint.
        const request = await fetch(`https://api.pexels.com/v1/videos/search?query=${topic}&per_page=80&orientation=portrait`, {
            headers: {
                Authorization: apiKey
            }
        });

        // Parse the JSON response from the API request.
        const response = await request.json();

        // Find and return the HD quality video link from the video files array.
        // If HD quality video is not found, it will return undefined.
        // console.log(response.videos.find(v=>v.duration > minTime).video_files);
        return response.videos.find(v=>v.duration > minTime).video_files.find(v => v.quality == 'hd')?.link;

    } catch (error) {
        // Log any errors that occur during the API request or processing.
        console.error('Error:', error);
    }
}

async function downloadFile(url) {
    
    return new Promise((resolve,reject)=>{
        const options = {
            rejectUnauthorized: false, // Bypass SSL certificate validation (use with caution)
          };
          const fileStream = fs.createWriteStream('video.mp4');
          https.get(url, (response) => {
            response.pipe(fileStream);
      
            response.on('end', () => {
              console.log('Video downloaded successfully');
            });
          }).on('error', (downloadError) => {
            console.error('Error downloading video:', downloadError);
          });
    })
    
  }
  
// Uncomment the following lines to test the `getVideo` function.
/*
(async () => {
    // Fetch the video link for the 'Nature' topic using the PEXELS_API from the environment variables.
    const video = await getVideo('Nature', process.env.PEXELS_API);
    
    // Log the video link to the console.
    console.log(video);
})();
*/
module.exports = {
    getVideo,
    downloadFile
}