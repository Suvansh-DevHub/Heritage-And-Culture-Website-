const headerText = document.querySelector(".home_header_info");

window.addEventListener("scroll", function () {
  if (!headerText) return;

  const trigger = 200;

  if (window.scrollY > trigger) {
    headerText.style.opacity = "0";
    headerText.style.transform = "translateY(-20px)";
    headerText.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  } else {
    headerText.style.opacity = "1";
    headerText.style.transform = "translateY(0)";
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("nav").addClass("nav-fixed");
  } else {
    $("nav").removeClass("nav-fixed");
  }
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
$(document).ready(function () {

  $(".toggle-btn").click(function () {
    $(".nav-links").toggleClass("active");
  });

  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#arrow i").fadeIn();
    } else {
      $("#arrow i").fadeOut();
    }
  });

  $("#arrow i").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  if (!clock) return;

  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("clockdiv", deadline);


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});


document.querySelectorAll(".menu_hover").forEach((el) => {
  console.log(el.textContent.trim(), getComputedStyle(el, "::before").width);
});
