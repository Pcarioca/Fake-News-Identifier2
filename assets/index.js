let audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('id', 'play');
    audioElement1.setAttribute('src', 'audio/f5.mp3'); 

    $.get();
    $("#body").append(audioElement1);


    $("a").mouseenter(function() {
      audioElement1.play();
      });