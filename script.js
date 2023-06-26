document.addEventListener("DOMContentLoaded", function() {
    let count = 1;
    document.getElementById("radio1").checked = true;
  
    setInterval(function() {
      nextImage();
    }, 2000);
  
    function nextImage() {
      count++;
      if (count > 4) {
        count = 1;
      }
  
      document.getElementById("radio" + count).checked = true;
    }
  });
function menuShow(){
  let menuMobile = document.querySelector('.mobileMenu')

  if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
  }else{
    menuMobile.classList.add('open')
  }
}  