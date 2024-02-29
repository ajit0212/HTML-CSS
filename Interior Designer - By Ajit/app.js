
let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle('active');
}

// Review Slider
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

function validateform() {
  var name = document.myform.name.value;
  var mobile = document.myform.mobile.value;
  var email = document.myform.email.value;
  var comment = document.myform.comment.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (mobile.length < 10) {
    alert("Phone number must be at least 10 digit long.");
    return false;
  } else if (email == null || email == "") {
    alert("Email can't be blank");
    return false;
  } else if (comment == null || comment == "") {
    alert("Comment field can't be blank");
    return false;
  }
}  
