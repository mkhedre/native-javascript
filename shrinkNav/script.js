window.onscroll = function () {
  console.log(document.documentElement.scrollTop > 30);
  if (document.documentElement.scrollTop > 30) {
    document.getElementById('container').style.height = '100px';
  } else {
    document.getElementById('container').style.height = '200px';
  }
};
