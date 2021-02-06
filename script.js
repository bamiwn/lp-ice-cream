document.onscroll = function() { navScroll() };

function navScroll() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("navigasi").className = "smoothScrollLG";
  } else {
    document.getElementById("navigasi").className = "";
  }
}


// JQUERY CLICK ANIMATE
$('.page-scroll').on('click', function(e) {
  // ambil isi href dari class .page-scroll (this) yang diklik
  let tujuan = $(this).attr('href');

  // ambil elemen html yang diklik sesuai id class page-scroll
  let elemen = $(tujuan);

  // pindah section
  $('body').animate({
    scrollTop: elemen.offset().top - 100
  }, 1000, 'easeInOutExpo');

  e.preventDefault();
});





