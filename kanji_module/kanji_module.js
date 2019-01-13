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
                        //console.log("resData", resData);
                        for (let kanjiNumber in resData) {
                            console.log("kanjiNumber", kanjiNumber);
                            console.log("kanji", resData[kanjiNumber].kanji.character);
                            //console.log("resData[kanji]", resData[kanjiNumber]);
                            kanjiMap.set(resData[kanjiNumber].kanji.character, resData[kanjiNumber])
                        }
                    }
                );
    }
};
