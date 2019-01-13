'use strict';
// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues

const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
const kanjiModule = require('../kanji_module/kanji_module.js');
const utilsModule = require('../utils_module/utils_module.js');

const optionsKanjialiveRapidapi = {
    hostname: 'kanjialive-api.p.rapidapi.com',
    path: '',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.rapidapi_key
    }
};
// google translate https://cloud.google.com/translate/docs/quickstart-client-libraries#client-libraries-install-nodejs 

module.exports = {
    handleRequest: (request, response) => {
        console.log("handleRequest invoked");
        //return new Promise((resolve, reject) => {

        const agent = new WebhookClient({ request, response });
        //console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
        //console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

        function welcome(agent) {
            agent.add(`Welcome to my agent!`);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }

        function kanjiExplain(agent) {
            let kanjiData = kanjiModule.getKanjiData(request.body.queryResult.parameters.kanji_single);
            console.log("kanjiData", kanjiData);
            agent.add("Kanji: " + kanjiData.kanji.character);
            agent.add("Meaning: " + kanjiData.kanji.meaning.english);
            agent.add("Radical: " + kanjiData.radical.character);
            agent.add("Onyomi: " + kanjiData.kanji.onyomi.katakana + " (" + kanjiData.kanji.onyomi.romaji + ")");
            agent.add("Kunyomi: " + kanjiData.kanji.kunyomi.hiragana + " (" + kanjiData.kanji.kunyomi.romaji + ")");
            agent.add("Example:" + kanjiData.examples[0].japanese);
            agent.add(new Suggestion(`Radical ` + kanjiData.radical.character));
            agent.add(new Suggestion(`Examples ` + kanjiData.kanji.character));
        }

        function kanjiExamples(agent) {
            let kanjiData = kanjiModule.getKanjiData(request.body.queryResult.parameters.kanji_single);
            console.log("kanjiData", kanjiData);
            agent.add("Kanji: " + kanjiData.kanji.character);
            for (let index in kanjiData.examples) {
                agent.add(kanjiData.examples[index].japanese);
                //console.log("meaning", kanjiData.examples[index].meaning);
                //console.log("audio", kanjiData.examples[index].audio);
                agent.add(kanjiData.examples[index].meaning.english);
                // agent.add(kanjiData.examples[index].audio.mp3);
                //agent.add(kanjiData.examples[index].audio.mp3);
                agent.add(new Card({
                    title: `Listen to example`,
                    //imageUrl: kanjiData.kanji.video.poster,
                    //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
                    buttonText: kanjiData.examples[index].japanese,
                    buttonUrl: kanjiData.examples[index].audio.mp3
                }));
            }
            /*agent.add("Meaning: " + kanjiData.kanji.meaning.english);
            agent.add("Radical: " + kanjiData.radical.character);
            agent.add("Onyomi: " + kanjiData.kanji.onyomi.katakana + " (" + kanjiData.kanji.onyomi.romaji + ")");
            agent.add("Kunyomi: " + kanjiData.kanji.kunyomi.hiragana + " (" + kanjiData.kanji.kunyomi.romaji + ")");
            agent.add("Example:" + kanjiData.examples[0].japanese);
            agent.add(new Suggestion(`Radical ` + kanjiData.radical.character));*/
        }

        function randomKanji(agent) {
            let kanjiData = kanjiModule.getRandomKanjiData();
            // let kanjiData = kanjiModule.getKanjiData(randomKanji);
            console.log("kanjiData", kanjiData);
            agent.add("Kanji: " + kanjiData.kanji.character);
            agent.add("Meaning: " + kanjiData.kanji.meaning.english);
            agent.add("Radical: " + kanjiData.radical.character);
            agent.add("Onyomi: " + kanjiData.kanji.onyomi.katakana + " (" + kanjiData.kanji.onyomi.romaji + ")");
            agent.add("Kunyomi: " + kanjiData.kanji.kunyomi.hiragana + " (" + kanjiData.kanji.kunyomi.romaji + ")");
            agent.add("Example:" + kanjiData.examples[0].japanese);
            agent.add(new Suggestion(`Radical ` + kanjiData.radical.character));
        }

        /*
        function translate(agent) {
            return new Promise((resolve, reject) => {
                optionsKanjialiveRapidapi.path = '/api/public/kanji/' + encodeURIComponent(request.body.queryResult.parameters.kanji_single);
                utilsModule.makeHttpsRequest(optionsKanjialiveRapidapi).then(
                    resData => {
                        console.log("resData", resData);
                        agent.add("Kanji: " + resData.kanji.character);
                        agent.add("Meaning: " + resData.kanji.meaning.english);
                        agent.add("Radical: " + resData.radical.character);
                        agent.add("Onyomi: " + resData.kanji.onyomi.katakana + " (" + resData.kanji.onyomi.romaji + ")");
                        agent.add("Kunyomi: " + resData.kanji.kunyomi.hiragana + " (" + resData.kanji.kunyomi.romaji + ")");
                        agent.add("Example:" + resData.examples[0].japanese);
                        resolve();
                    }
                );
            });
        }
        */
        
        function quizTest(agent) {
            let randomKanji1 = kanjiModule.getRandomKanjiData();
            let randomKanji2 = kanjiModule.getRandomKanjiData();
            let randomKanji3 = kanjiModule.getRandomKanjiData();
            let randomKanji4 = kanjiModule.getRandomKanjiData();
            /*agent.add(new Card({
                title: `Choose the correct meaning of the kanji: ` + randomKanji1.kanji.character,
                imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
                text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
                buttonText: 'This is a button',
                buttonUrl: 'https://assistant.google.com/'
            }));*/
            agent.add('Choose the correct meaning of the kanji: ' + randomKanji1.kanji.character);
            let i = 4;
            let usedAlready = [];
            while (i >= 0)  {
                console.log(i);
                console.log(Math.floor(Math.random()*4))
                i--;
            }
            agent.add(new Suggestion(randomKanji1.kanji.character + ` means ` + randomKanji1.kanji.meaning.english));
            agent.add(new Suggestion(randomKanji1.kanji.character + ` means ` + randomKanji2.kanji.meaning.english));
            agent.add(new Suggestion(randomKanji1.kanji.character + ` means ` + randomKanji3.kanji.meaning.english));
            agent.add(new Suggestion(randomKanji1.kanji.character + ` means ` + randomKanji4.kanji.meaning.english));
        }

        // Uncomment and edit to make your own intent handler
        // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
        // below to get this function to be run when a Dialogflow intent is matched
        function yourFunctionHandler(agent) {
            agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
            agent.add(new Card({
                title: `Title: this is a card title`,
                imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
                text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
                buttonText: 'This is a button',
                buttonUrl: 'https://assistant.google.com/'
            }));
            agent.add(new Suggestion(`Quick Reply`));
            agent.add(new Suggestion(`Suggestion`));
            agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' } });
        }

        // // Uncomment and edit to make your own Google Assistant intent handler
        // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
        // // below to get this function to be run when a Dialogflow intent is matched
        // function googleAssistantHandler(agent) {
        //   let conv = agent.conv(); // Get Actions on Google library conv instance
        //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
        //   agent.add(conv); // Add Actions on Google library responses to your agent's response
        // }
        // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
        // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

        // Run the proper function handler based on the matched Dialogflow intent name
        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('Default Fallback Intent', fallback);
        intentMap.set('kanji.explain', kanjiExplain);
        intentMap.set('kanji.random', randomKanji);
        intentMap.set('kanji.examples', kanjiExamples);
        intentMap.set('quiz.start', quizTest);

        // intentMap.set('your intent name here', yourFunctionHandler);
        // intentMap.set('your intent name here', googleAssistantHandler);
        agent.handleRequest(intentMap);


    }
};
