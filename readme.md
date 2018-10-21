# Kanji Bot

A chatbot that helps you learn Kanji. 

A chatbot that helps you learn Kanji by giving you information about Kanjis and doing quizzes.

The goal of the Kanji Bot is to help you learn Kanji easy and without restrictions anywhere and anytime. You can access the bot through popular messaging solutions or through its website.

## Functionality:
 - look up Kanji (basic information)
    - input: Kanji (collection), output: basic information, context out: Kanji
        - a picture of the Kanji itself?
        - meaning
        - onyomi reading
        - kunyomi reading
        
        [quick reply buttons]: <- put Knaji already in quick reply button, this way I can avoid time out
            - radical for [Kanji]
            - Kanji examples [Kanji]
                - next step: audio [Kanji], 
            - stroke order [Kanji]
 - onyomi + [Kanji]
    - different readings (each in its own message or all together?)
 - kunyomi + [Kanji]
     - different readings (each in its own message or all together?)
 - stroke order + [Kanji]
    - send the different pictures of the stroke order, one after another
 - radical [Kanji]
    - meaning
    - what more information do I have here?
    [quick reply buttons]:
        - position of [radical]
    
 - Kanji Quiz
    - you get a Kanji and then four possibilities what it could be/ vs only textinput
    - learn the Kanji by grouped lessons, you can select them by JLPT level
    - the response if a question is correct or not always shows the correct meaning -> need to query database again (?)
    - modes
    
        __meaning__
        - you get a Kanji and need to provide the meaning <- here I need intents to directly invoke it
            - [kanji]
            - please select below or input your answer
            [quick reply buttons]:
                - meaning 1 - meaning 2
                - meaning 3 - meaning 4
                - how do I check if it is correct?
                - can I avoid time out?
        - you get a meaning and need to provide the Kanji for it
            - [meaning]
                - Kanji 1 - Kanji 2
                - Kanji 3 - Kanji 4
            - hard mode:
                - [meaning]/[may be also pronounciation]
                    - input the correct Kanji with your keyboard!
                    
        __reading__
        - you get a Kanji and need to provide the pronounciation
            - [Kanji]/[word] <- the issue here is that just with the Kanji it is difficult to get the pronounication, there needs to be more context - get another set of vocabulary that maps to the Kanji lections?
                - make it also with an honour system ? Kanji tree does it weill
                - optionally three or four options to choose from
        - you get a pronounciation and need to provide a Kanji for it
            - may be show all the readings and then have four different Kanji that could be it and the user has to select from the four ! sounds good her
        
        __other__
        - you get a Kanji and need to provide the radical
            - [Kanji]
                - radical 1 - radical 2
                - radical 3 - radical 4
                - how to know that radical is correct and not double?? can be confusing with some characters (comment: nah, I think it will be fine)
        - you get a Kanji and need to provide the number of strokes <- (comment: haha, nice idea, and easy to accomplish)
            - [Kanji]
                - you just input the number
                - may be make a selection of like 14 numbers from which you can choose?
        - you hear a sentence and need to provide the japanese sentence for it
            - [sound file of example sentence]
                - example 1 - example 2
                - example 3 - example 4
                
    - firebase code/algorithms
        - how to start?
            - what questions to ask before start?
                - which JLPT?
                - how many questions?
            -save configuration?
                - how?
                - if I save configuration, I could also save how good do I know the Kanji -> like flash cards. mnemonics
        
        - load an array with the JLPT level Kanjis at initialisation phase, save them in a const
            - wher to get them from (save the information on the Kanji data or save them in a differen collection)
            
        - get a random Kanji from the array
        - check if it has been already selected
        - check if the pronounciation is the same as an already selected
        - push into an array that holds the question data
        - send to chatbot
        - check the answer
            - how to do it? have the correct answer in contextOut, for example contextOut: correctKanji: [kanji], or reading: [reading]
        - send correct/wrong to user
        - repeat, until number of questions is reached
        
        - considerations: 
            - how to avoid if it has been checked already
            - how to deal with session timeouts? may be do a setTiemout for until the end of the session and then send a: sorry your session has expired, start again
            - how to implement logic what Kanji the learner knows better and which not
                - have different arrays with the level
                - make sure the Kanjis go up the levels, let the user train them one after another
                - add this to the algorithm
 - Onyomi/Kunyomi search: you input a hiragana/romanji transciption of the pronounciation and get back a list/quick reply buttons with all the Kanji that contain this character
 - enter english meaning (?)
 
 - show stored information
    - if I store information abour the user, I need to retrieve it and show it to him
    - make it possible to delete it
 
 - translate [text]
    - input text and send it to google translate API to translate it to english
 
 
 - standard fallback intent
    - "Sorry I was not able to understand you."
    - "I get a timeout after x minutes. I am sorry for this. This is a limitation of the plattform that I am programmed on."
    - "Sorry I couldn't understand you."
    - [quick reply button]
        - help
 
 - Start
    - this is how it works
    - input will be saved to improve the app, once I can make sure it works, I will drop that, by using the app you agree to that
 - help
    - short introduction
        - input a Kanji and get its basic stats, etc. .. ...
    - [qick replies]
        - Kanji tutorial
        - input Kanji, how to
        - about
        - credits 
        - Kanji Quiz 
         
 - Feedback: write the developer feedback
    - intent trigger sentences: feedback [any] or message [any] or bug [any]
    - write message with Nodemailer
    - "Thank you for your message! The message has been sent to me (the developer)! :) Please be aware that I cannot answer you directly. If you want me to contact you, please provide your contact information. Thank you! :)"
 - credit
    - credit for the Kanji Data (for wherever I get the data from) 
 - about
    - link to its website
 - privacy
    - link to its privacy statement
 - joke
    - are there any Kanji-related jokes?
         
 - tutorial
    - introduction to Kanji
        - Where do Kanji come from?
        - What kind of Kanji are there?
            - three kinds
            - first kind
                - explain
            - second
            - third
        - structure of most Kanjis
        - radical and phonetic part
        - Kanjis can be combined
        - enjoy!
    - quick reply buttons with part# or intro # or next ? (next is more natural, however if I pause in between, it gets a timeout) (also have a start button to get back to start? I would like to avoid it, because it might be confusing)
 
 - input japanese characters - how to ? 
    - explain common methods of input (or just a link)
 
 - App recommendations <- have some tips on other ressources to learn Kanji (affiliate links ?)
    - Kanji Tree
 
## Data structure:
 - Firestore
    - Kanji basic data
        - Kanji (Japanese character, UTF-8)
            - kname
                - string with the unique name of the Kanji - maps to different other references, like stroke animation images and videos and audio data for the example sentences
            - kunyomi_ja
                - string with reading in Hiragana
            - kunyomi
                - string with reading in latin/English/romaji
            - onyomi_ja
                - string with reading in Katakana
            - onyomi
                - string with reading in latin/English/romaji
            - examples
                - Array with examples
            - kstroke - stroke number
                - integer
            - meaning
                - string with English meaning
            - radical
                - radical in unicode
                - svg of radical
                - some of the radicals have its own unique font, because they are not part of unicde - I have the .svg images though - sometimes it is a character, sometimes an image
            - radical order
                - integer
            - rad_stroke
                - integer
            - rad_name_ja
                - string with reading in Hiragana
            - rad_name
                - string with reading in latin/English/romaji
            - rad_meaning
                - string with reading in latin/English/romaji
            - rad_position_ja
                - string with reading in Hiragana
            - rad_position
                - string with reading in latin/English/romaji
            - JLPT level (http://www.jlpt.jp/e/about/levelsummary.html)
                - kgrade - integer <- grade is not JLPT level! 
    - Kanji animations (video files about writing)
        - Kanji (in Japanese)         
            - writing video file, mp4
            - reference is kname
    - kanji strokes (image files with stroke order)
        - Kanji
            - different svg files, how to know order in which to send to user?
                - make a loop over the numbers
            - reference is kname
    - Kanji audio data
        - Kanji
            - audio file reading, different formats, readings from the example sentences
            - reference is kname
    - radical animations (images with pictogramm data and different font (?))
        - radical name
            - svg file
    - radical characters (image files of the characters)
        - svg file
    - radical positions (image depicting the position of the radical) - reference by the name of the radical
        - svg file
        
    - vocabulary data <- where to get the data from? and which vocabulary to choose?
        - JLPT level N5-1 <- this data I can get
            - vocabulary
            - pronounciation in Japanese <- the problem here is, that there are some words in Hiragana or Katakana, that are only that and have not pronounciation
            - meaning in English
        - have other vocabulary lists?
            - what about na-adjectives and i-adjectives 
                
    - Kanji level collections
        - http://tangorin.com/common_kanji
        - store the explanations in the firebase script
        - The Jōyō Kanji 常用漢字表
            https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji
            Jōyō Kanji 1st Grade (80)
            Jōyō Kanji 2nd Grade (160)
            Jōyō Kanji 3rd Grade (200)
            Jōyō Kanji 4th Grade (200)
            Jōyō Kanji 5th Grade (185)
            Jōyō Kanji 6th Grade (181)
            Jōyō Kanji Junior High-school (939)
        - JLPT Kanji 日本語能力試験漢字
            JLPT Level N5 Kanji (79)
            JLPT Level N4 Kanji (166)
            JLPT Level N3 Kanji (367)
            JLPT Level N2 Kanji (367)
            JLPT Level N1 Kanji (1232)
            - Array with all the Kanjis from this level
        - 2,500 most frequently used kanji in newspapers
            1-500 of 2500 Kanji (500)
            501-1000 of 2500 Kanji (500)
            1001-1500 of 2500 Kanji (500)
            1501-2000 of 2500 Kanji (500)
            2001-2500 of 2500 Kanji (500)
         - The Jinmeiyō Kanji 人名用漢字
            Jinmeiyō Kanji (983)
            
    - user data
        - settings
            - which JLPT level Kanjis
            - how many questions
        - how good do I know the Kanji
            - JLPT level 5
                - level 1
                    - Array with Kanji
                - level 2
                    - Array with Kanji
            - JLT level 4
                - leverl 1
                    - Array with Kanji
    ^ collect all the informatino that I have
 - chatbot
    - how is this called again
        - Kanji - a list with all Kanjis, may be also with the chinese equivalent if there is one? And all unique identifiers there are, prepare beforehand in Excel
        - Kunyomi/Onyomi reading (?)

###Frontend/Dialogflow entities
 - Kanji
    - Kanji/also Kanji in Chinese/may be other ways that are unique to the Kanji, like some index number (?)
    - unyomi/kunyomi (they are not unique per character - does it help anyway?)

###important consideratinos/challenges/ideas
 - have this whole documentation at the bottom of the firebase function
 - how to do the quiz logic with dialogflow? :O

###Branding
 - cute, but technical
    - kanjibotto
    - what means chatbot in Japanese
    - like Doraemon
    - Gojira
    - chetboto
    - chetto
 - easy to remember
 - picture for chatbot?
 - personality/character of the chatbot
 - make character of it, describe it with many adjectives
    - happy, cheering, uplifting, motivating
    - clear
 - make a character, like Poncho the weathercat 
    - Kanji-Robot
    - Kanjifox - the Kanji bot
    - Tanuki the Kanjibot
    - Jonas the Kanjibot
    - The Kanji-Tamagochi
    - Kanji Badger - Kanjibot
    - 
 
## User stories
 - Spencer is a university student, studying Japanese. He is studying Kanjis seriously and is preparing for the next JLPT test. On the way to work he wants to learn Kanjis. 
    - Spencer wants to look up a Kanji that he doesn't know yet. He uses his Smartphone text input and draws the character on his screen. He gets the information about the Kanji. (does he want to store the information which Kanjis he already loked at?)
    - Spencer wants to prepare for the JLPT test. He wants to practice the Kanjis that are relevant for his JLPT level. He wants to practice the meaning and the readings.
 - Maya already knows Japanese and is currently trevelling in Japan. She wants to improve her Japanese and understand more about the worls around her.
    - Maya wants to know the meaning of a Kanji. Also how it is pronounced.
    - Sometimes she wants to translate something quick and easy without going into another app.
 
### Data sources
credit
 - kanjialive: https://github.com/kanjialive/kanji-data-media 

### Motivation
 - on my last trip to Japan, on the road I would like to have an easy way to look up Kanji and learn them, that does not need to install an app or to visit a translation website. So I thought a chatbot would be great: it doesn't need a lot of data and is very uncomplicated. Therefore the idea for this chatbot was born.
 - I wanted to have a way to easily and without using lots of data look up Kanjis.

### Monetization
 - possible partners
    - Babble
    - wanikami, or however the name is (?)
 - have sometimes a message in between with the commercial (for the messaging apps like kik or messenger, etc.)
 - for webapp: have at the bottom or at the side suggestions for apps where you can c0ntinue, have disclaimer: this helps the developer of the chatbot
 - donation ware
    - have some extra functions that are available for a one time payment
        - user can choose how much
    - like saving the progess data across devices, etc. 

### Website
 - simple website interface where you can chat with the bot
 - with service worker that caches the site
    - there is a message when there is no connection
    - he replies to you with no internet, sorry ¯\_(ツ)_/¯
 - structure
    - The Kanji Bot
        - main website where you can chat with the bot
            - bot says hello
    - chatbot integrations
        - overview of all the chatbot integrations
            - have a side menu with in page links, anchor links! 
            - Telegram
            - Messenger, etc.
            - Twilio <- are there actually numbers for every country?
            - etc. 
    - privacy statement
        - at the moment your input is logged to improve the usability - seriously this helps to identify pain points!
    - manual/documentation
        - a section where all of the information of this document is available
### Ressources
 - http://www.jlpt.jp/e/about/levelsummary.html
 - jisho: https://jisho.org/
 - kanjialive: https://kanjialive.com/
 - https://en.wikipedia.org/wiki/Ky%C5%8Diku_kanji
 - cool App to learn Kanji: Kanji Tree
 
### Testing
 - Unit test in firebase functions: https://firebase.google.com/docs/functions/unit-testing  
 
## toDos

firebase
 - testing for fireBase script?
 - .env with fireBase functions?  https://firebase.google.com/docs/functions/config-env
    - store nodeMailer data
 - script to load data into firebase database/firestore
    - python? Node.js locally? shell script?
 - do I use Typescript? or Javascript?
 
programming
 - algorithm for Kanji quiz
 - some of the radicals have its own unique font, because they are not part of unicde - how to solve this?
 
features
 - have a backend interface that let`s you edit the Kanji data?
    - edit own data, preferences, etc. 

dialogflow
 - user management in dialogflow
 - can I get user id? how?
 - plattforms 
    - which plattform have which restrictions? Which can use audio/mp3?/svg/mp4? Have a plan ready on how to deal with this in the application logic
    - quick reply for different plattforms? like in Telegramm you get problems if they are too many
    - what about small displays? WIll the text be cut off?

organizational
 - what to consider with GDPR?
    - at the beginning disclaimer that input is logged
 - what is personal information? GDPR relevance?
    - is storing a string with the user id and then some Kanjis personal data?
 - license: 
    - kanjialive: 
        - what does mnemonics mean? is it the data contained in the github-files? for the radicals?
    - nihongo ichiban
        - can I use adjective lists?

functional 
 - JLPT Kanji classifications
    http://tangorin.com/common_kanji
    http://kanjicards.org/kanji-list-by-grade.html
 - What are the requirements of the JLPT-tests? There you also need to fill out the questions? How is this test done? Copy this and do it with the chatbot, because it is important for the learners. Call it JLPT-Training or something.
    - https://nihongoichiban.com/2011/04/30/complete-list-of-vocabulary-for-the-jlpt-n5/
    good list with a lot of vocabulary for JLPT5
    "Unfortunately there is no official list of vocabulary required for the JLPT. As a result lists are created reviewing historical tests and different teachers have slightly different lists. I will check if I find these words in some historical tests and add them to the list in case I had overseen them before. Thank you very much for your attention on this. Nicolas"
    https://nihongoichiban.com/category/vocabulary/
    https://nihongoichiban.com/home/jlpt-n5-study-material/
    https://www.kanshudo.com/collections/wikipedia_jlpt
    https://en.wikibooks.org/wiki/JLPT_Guide/JLPT_N5_Vocabulary/Row_A
    https://en.wikibooks.org/wiki/JLPT_Guide/JLPT_N5_Kanji
    https://en.wiktionary.org/wiki/Appendix:JLPT <- ahh yes, this is really good! :)
    http://www.tanos.co.uk/jlpt/jlpt1/ <- this is good too cool: http://www.tanos.co.uk/jlpt/sharing/
    http://www.tanos.co.uk/jlpt/aboutjlpt/
    
    https://en.wikipedia.org/wiki/Japanese-Language_Proficiency_Test <- good read
 
