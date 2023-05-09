$(document).ready(function () {
  $("a.footer__md-col-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 500,
        easing: "swing",
      }
    );
    return false;
  });
});

// Аккордеон

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}

// Плавный переход между страницами

$(document).ready(function () {
  $("body").css("display", "none");

  $("body").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },
  mousewhell: true,
  keyboard: true,
});
