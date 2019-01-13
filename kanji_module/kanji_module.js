'use strict';
const utilsModule = require('../utils_module/utils_module.js');

const kanjiMap = new Map();

const optionsKanjialiveRapidapi = {
    hostname: 'kanjialive-api.p.rapidapi.com',
    path: '',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.rapidapi_key
    }
};

module.exports = {
    
    initKanjiData: () => {
        console.log("*** Initializing Kanji Data ***")
        optionsKanjialiveRapidapi.path = '/api/public/kanji/all'
        utilsModule.makeHttpsRequest(optionsKanjialiveRapidapi).then(
                    resData => {
                        console.log("resData", resData);
                        for (let kanji in resData) {
                            console.log("kanji", kanji);
                            console.log("resData[kanji]", resData[kanji]);
                            //kanjiMap.set()
                        }
                    }
                );
    }
};
