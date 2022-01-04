let audioElement1 = document.createElement('audio');
audioElement1.setAttribute('id', 'play');
audioElement1.setAttribute('src', 'audio/f5.mp3');

// $.get();
$("#body").append(audioElement1);


$("a").mouseenter(function () {
  audioElement1.play();
});


// document.querySelector("body").addEventListener
// window.addEventListener('load', () => {
  let foot = '<footer class="text-center text-white" style = "background-color: #ffffff2f;" ><div class="container pt-4"></div><div class="text-center text-white p-3" style="background-color: rgba(255, 255, 255, 0.2);">This Website was created by Munteanu Paul Andrei for <a target="_blank"href="https://infoeducatie.ro/"> InfoEducatie </a></div> </footer>';
  // footHTML = document.createTextNode(foot)
  $("#footer").append(foot);
  console.log("done!");
// });