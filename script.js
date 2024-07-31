document.addEventListener("DOMContentLoaded", function () {
  const imgContainer = document.querySelector(".img_container");
  const paginationSpans = document.querySelectorAll(".pagination span");
  let currentSlide = 0;
  const totalSlides = paginationSpans.length;

  function goToSlide(slideIndex) {
    imgContainer.style.transform = `translateX(-${(slideIndex * 100) / 3}%)`;
    paginationSpans.forEach((span, index) => {
      if (index === slideIndex) {
        span.classList.add("slide");
      } else {
        span.classList.remove("slide");
      }
    });
    currentSlide = slideIndex;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  // 페이지네이션 클릭 이벤트
  paginationSpans.forEach((span, index) => {
    span.addEventListener("click", () => goToSlide(index));
  });

  // 자동 슬라이드
  setInterval(nextSlide, 3000);

  // 초기 슬라이드 설정
  goToSlide(0);

  // 헤더 안보였다가 올릴때 보이게하기
  window.addEventListener("mousewheel", (event) => {
    const header = document.querySelector(".header_area");

    if (event.deltaY > 0) {
      header.classList.remove("scroll");
    } else {
      header.classList.add("scroll");
    }
  });

  // 배경이미지 바꾸기
  const featureSection = document.querySelector(".feature");
  const brandSection = document.querySelector(".store_brand");
  window.addEventListener("scroll", () => {
    const changeSection = featureSection.offsetTop - 500;
    const brand = brandSection.offsetTop - 200;

    const scrollTop = window.scrollY;
    const bg = document.querySelector("body");

    if (scrollTop > changeSection && scrollTop < brand) {
      bg.classList.add("bg");
    } else {
      bg.classList.remove("bg");
    }
  });
  const modelsLink = document.querySelector("#models");
  const subMenu = document.querySelector(".sub_menu");

  modelsLink.addEventListener("mouseenter", function () {
    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  });

  modelsLink.addEventListener("mouseleave", function () {
    subMenu.style.maxHeight = "0";
  });

  subMenu.addEventListener("mouseenter", function () {
    this.style.maxHeight = this.scrollHeight + "px";
  });

  subMenu.addEventListener("mouseleave", function () {
    this.style.maxHeight = "0";
  });
});
