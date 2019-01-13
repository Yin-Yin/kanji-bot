'use strict';
const https = require('https');

module.exports = {

    makeHttpsRequest: (options) => {
        return new Promise(function(resolve, reject) {

            const req = https.request(options, (res) => {
                console.log(`statusCode: ${res.statusCode}`)

                let data = '';

                // A chunk of data has been recieved.
                res.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received.
                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })

            req.on('error', (error) => {
                console.error(error);
                reject(error);
            })
            req.end();
        });
    }

};
