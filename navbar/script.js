// let tabs = document.getElementsByClassName('tab');

// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }
// document.getElementById('defaultOpen').click();

function searchword() {
  let input, ul, li, filter;
  input = document.getElementById('search');
  ul = document.getElementById('list');
  filter = input.value;
  li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    //word exist
    if (a.innerHTML.indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
function change(e) {
  console.log(e.target.value);
}
