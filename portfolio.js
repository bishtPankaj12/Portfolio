// code for humburger elements

const burger=document.querySelector(".hamburger");
const mobile=document.querySelector(".mobile-nav");

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mobile.classList.toggle('active');
})

// this code is used to send the email....

function sendMail(){
    (function () {
        emailjs.init({
            publicKey: "k1M7HegCYleBcZo7S",
        });
    })();

    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceId="service_djilk1q";
    const templateId="template_w3vj0l7";


    emailjs
    .send(serviceId,templateId,params)
    .then((res) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Email sent succeessfully");
    })
    .catch((err) =>console.log(err));
}

document.querySelector("#myFormSubmitBtn").addEventListener("click",()=>{
    sendMail();
})


// code for navburger active links

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };