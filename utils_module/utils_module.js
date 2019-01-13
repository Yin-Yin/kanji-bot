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

                // The whole response has been received. Print out the result.
                res.on('end', () => {
                    console.log(JSON.parse(data));
                    resolve(JSON.parse(data));
                });
                
                /*
                res.on('data', (resData) => {
                    console.log("resData", resData);
                    resolve(JSON.parse(resData));
                })
                */
            })

            req.on('error', (error) => {
                console.error(error);
                reject(error);
            })
            req.end();
        });
    }

};
