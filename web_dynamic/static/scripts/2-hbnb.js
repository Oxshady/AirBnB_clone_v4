$(document).ready(function () {
	let aminities = {};
	$('.inp_checkbox').change(function () {
		const Aid = $(this).attr('data-id');
		const Aname = $(this).attr('data-name');
		if ($(this).is(':checked')) {
			aminities[Aid] = Aname;
		} else {
			delete aminities[Aid];
		}
		let amenitiesList = Object.values(aminities);
		if (amenitiesList.length > 3) {
			amenitiesList = amenitiesList.slice(0, 3);
			amenitiesList.push('...');
		}
		$('.amenities h4').text(amenitiesList.join(', '));
	});
	$.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
		if (data.status === "OK") {
			$('.api_status').addClass('available');
		} else {
			$('.api_status').removeClass('available');
		}
	});
});