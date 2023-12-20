function show() {
  let sidebar = document.getElementById('side');
  sidebar.style.width = '180px';
  document.getElementById('main').style.marginLeft = '180px';
  document.getElementById('main').classList.toggle('overlay');
}
function hide() {
  let sidebar = document.getElementById('side');
  sidebar.style.width = '0px';
  document.getElementById('main').style.marginLeft = '0px';
  document.getElementById('main').classList.toggle('overlay');
}
