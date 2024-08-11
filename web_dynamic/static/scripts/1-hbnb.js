$(document).ready(function() {
    let aminities = {};
    $('.inp_checkbox').change(function() {
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
});