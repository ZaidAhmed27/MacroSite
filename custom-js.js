document.addEventListener('DOMContentLoaded', (loaded) =>{
  console.log('Document is ready!!');
  document.getElementById("header").innerHTML = `<div><a href="index.html"><img src="logo.png" alt="header logo"></a></div><nav><ul><li><a href="index.html">HOME</a></li><li><a href="about.html">ABOUT</a></li><li><a href="contact.html">CONTACT</a></li></ul></nav>`
  document.getElementById("footer").innerHTML = `<div class="footer-content"><h3>LEGO Ideas Typewriter<br> &copy; copyright@2022</h3><ul class="socials"><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-google-plus"></i></a></li><li><a href="#"><i class="fa fa-youtube"></i></a></li><li><a href="#"><i class="fa fa-linkedin-square"></i></a></li></ul></div>`
});
