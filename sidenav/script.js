let form = document.getElementById('myform');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Create an empty object to store form data
  const formData = {};

  // Iterate through the form elements and collect values
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== 'submit') {
      console.log(element.value);
      formData[element.name] = element.value;
    }
  }
  console.log(JSON.stringify(formData));
  // Do something with the formData object
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data from the fake API
      console.log('Fake API response:', data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });
});

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
