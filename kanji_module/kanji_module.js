'use strict';
const utilsModule = require('../utils_module/utils_module.js');

const kanjiMap = new Map();
const allKanjiArray = new Array;

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
                        for (let index in resData) {
                            kanjiMap.set(resData[index].kanji.character, resData[index])
                            allKanjiArray.push(resData[index].kanji.character);
                        }
                    }
                );
    },
    
    getKanjiData: (kanji) => {
        return kanjiMap.get(kanji);
    },
    
    getRandomKanjiData: () => {
        console.log("allKanjiArray.length", allKanjiArray.length);
        let randomKanji = allKanjiArray[Math.floor(Math.random()*allKanjiArray.length)];
        console.log("random kanji = ", randomKanji);
        return randomKanji;
    },
};
