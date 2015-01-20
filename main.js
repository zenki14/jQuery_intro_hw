
// $('.sectOne').on('click', function () {
// 	$('.paraOne').toggleClass('pchanges')
// });

// $('.sectTwo').on('click', function () {
// 	$('.paraTwo').toggleClass('pchanges')
// });

// $('.sectThree').on('click', function () {
// 	$('.paraThree').toggleClass('pchanges')
// });

// $('.sect').on('click', function () {
// $('.para').removeClass('pchanges');
// 	$(this).find('para').addClass('pchanges')
// });


$('.sect').on('click', function () {
  $('.para').removeClass('pchanges');
  $(this).next('.para').addClass('pchanges');
});