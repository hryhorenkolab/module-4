(function(window) {
    varhelloSpeaker = new Object();
    var speakWord = "Goodhello";
   helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker =helloSpeaker;
})(window);
