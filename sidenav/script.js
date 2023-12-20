// let tabs = document.getElementsByClassName('tab');

// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }
// document.getElementById('defaultOpen').click();

// function openCity(e, name, color) {
//   let tabLinks, tabContent, i;
//   tabContent = document.getElementsByClassName('tabcontent');
//   tabLinks = document.getElementsByClassName('tablinks');
//   // hide all tabcontent
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = 'none';
//   }
//   // get all button and remove active from them
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace(' active', '');
//     tabLinks[i].style.backgroundColor = '';
//   }
//   //show current tab
//   document.getElementById(name).style.display = 'block';
//   document.getElementById(name).style.background = color;
//   e.currentTarget.className += ' active';
//   e.currentTarget.style.background = color;
// }

function toggle() {
  let nav = document.getElementById('nav');
  nav.classList.toggle('responsive');
}

/**
 * get nav and make height =0
 */
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  console.log(document.documentElement.scrollTop);
  if (document.body.scrollTo > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('nav').style.top = '-50px';
  } else {
    document.getElementById('nav').style.top = 0;
  }
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('nav').style.top = '0';
//   } else {
//     document.getElementById('nav').style.top = '-50px';
//   }
//   prevScrollpos = currentScrollPos;
// };
