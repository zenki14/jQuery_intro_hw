// $('.sectOne').on('click', function() {

// 	if ($('.paraOne').hasClass('pchanges')) {
// 		$('.paraOne').removeClass('pchanges')	
// 	} else {
// 		$('.paraOne').addClass('pchanges');
// 	}

// });

// $('.sectTwo').on('click', function() {
// 	$('.paraTwo').addClass('pchanges');
// });

// $('.sectThree').on('click', function() {
// 	$('.paraThree').addClass('pchanges');
// });




$('.sectOne').on('click', function () {
	$('.paraOne').toggleClass('pchanges')
});

$('.sectTwo').on('click', function () {
	$('.paraTwo').toggleClass('pchanges')
});

$('.sectThree').on('click', function () {
	$('.paraThree').toggleClass('pchanges')
});