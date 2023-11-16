
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow : '<div class="priv_arrow"><i class="fa-solid fa-angle-left"></i></div>',
    nextArrow : '<div class="next_arrow"><i class="fa-solid fa-angle-right"></i></div>',
  });

function sendmail() {

  var params = {
    name: document.getElementById("name").value ,
    email: document.getElementById("email").value ,
    message: document.getElementById("messgae").value ,
  };

const serviceID = "service_z8dvudw";
const templateID = "template_zkqhjak";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("your message sent succesfully ");
})
.catch((err) => console.log(err));
}

function validation(){

  var form = document.getElementById("form");
  var email = document.getElementById("email").value;

  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern))
  {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your Email is Valid";
      text.style.color = "#00ff00";
          
  }
  else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Your Email is Invalid";
      text.style.color = "#ff0000";
      
  }
  if (email == "")
  {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      text.style.color = "#00ff00";
  }
}