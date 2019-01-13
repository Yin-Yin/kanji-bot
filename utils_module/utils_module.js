'use strict';
const https = require('https');

module.exports = {

    makeHttpsRequest: (options) => {
        return new Promise(function(resolve, reject) {

            const req = https.request(options, (res) => {
                console.log(`statusCode: ${res.statusCode}`)

                res.on('data', (resData) => {
                    resolve(JSON.parse(resData));
                })
            })

            req.on('error', (error) => {
                console.error(error);
                reject(error);
            })
            req.end();
        });
    }

};
