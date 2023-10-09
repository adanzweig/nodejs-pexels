# nodejs-pexels

A Node.js package to fetch HD video links from Pexels based on a given topic.

[![npm version](https://badge.fury.io/js/adanjz%2Fpexels.svg)](https://www.npmjs.com/package/adanjz/pexels)

## Installation

To install the package via npm, run:

```bash
npm install adanjz/pexels
```

## Usage

After installation, you can use the package to fetch HD video links from Pexels:

```javascript
const getVideo = require('adanjz/pexels');

(async () => {
    const video = await getVideo('Nature', 'YOUR_PEXELS_API_KEY');
    console.log(video);
})();
```

Replace `'YOUR_PEXELS_API_KEY'` with your actual Pexels API key.

## Configuration

Before you can use the package, make sure to set up the required environment variables. You can utilize the `dotenv` package to load your Pexels API key from a `.env` file.

Example of `.env` content:

```
PEXELS_API=your_pexels_api_key
```

## Contribution

Contributions, issues, and feature requests are welcome! Check out the [GitHub repo](https://github.com/adanzweig/nodejs-pexels.git).