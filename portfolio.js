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
