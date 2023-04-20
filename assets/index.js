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
  let foot = '<footer class="text-center text-white" style="background-color: #ffffff2f;" ><div class="container pt-4"></div><div class="text-center text-white p-3" style="background-color: rgba(255, 255, 255, 0.2);">This Website was created by <a href="https://pcarioca.github.io/" target="_blank"> Munteanu Paul Andrei </a> for <b>Atestat Informatică</b> </div> </footer>';
  // footHTML = document.createTextNode(foot)
  $("#footer").append(foot);
  console.log("done!");
// });

let nav = '<a id="button"></a>  <nav role="navigation">  <div id="menuToggle">    <input type="checkbox"/>      <span></span>  <span></span>  <span></span>      <ul id="menu">  <a href="index.html">  <li><i class="fas fa-home"></i> Home</li>  </a>  <a href="app.html">  <li><i class="fas fa-mobile-alt"></i> App</li>  </a>  <a href="search.html">  <!--<li><i class="fas fa-search"></i> Search</li>  </a>  <a href="submit.html">  <li><i class="fas fa-check-circle"></i> Make a submission</li>  </a> --!>  <a href="about.html">  <li><i class="fas fa-info-circle"></i> Info</li>  </a>  <a href="about-me.html">  <li><i class="fas fa-address-card"></i> About me & Contact</li>  </a>  </ul>  </div>  </nav>';
$("#nav").append(nav);
console.log("done2!");