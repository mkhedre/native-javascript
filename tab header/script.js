// let tabs = document.getElementsByClassName('tab');

// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }
document.getElementById('defaultOpen').click();

function openCity(e, name) {
  let tabLinks, tabContent, i;
  tabContent = document.getElementsByClassName('tabcontent');
  tabLinks = document.getElementsByClassName('tablinks');
  // hide all tabcontent
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  // get all button and remove active from them
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  //show current tab
  document.getElementById(name).style.display = 'block';
  e.currentTarget.className += ' active';
}
