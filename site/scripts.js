$(document).ready(function () {
    $('.card').addClass('center-card');
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    if (document.documentElement.clientWidth <= 650) {
        $('.col-xs-6').addClass('col-md-4').removeClass('col-xs-6');
    } else {
        $('.col-md-4').addClass('col-xs-6');
    }

});

function loadTotables(fileName) {
    d3.text(fileName, function (data) {
        var parsedCSV = d3.csv.parseRows(data);

        var container = d3.select(".tablehere")
            .append("table")

        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function (d) {
                return d;
            }).enter()
            .append("td")
            .text(function (d) {
                return d;
            });
    });
}
$(window).resize(function () {
    if (document.documentElement.clientWidth <= 650) {
        $('.col-xs-6').addClass('col-md-4').removeClass('col-xs-6');
    } else {
        $('.col-md-4').addClass('col-xs-6');
    }
}).resize();