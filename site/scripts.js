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

function loadTotables(fileName, divName) {
    d3.text(fileName, function (data) {
        var parsedCSV = d3.csv.parseRows(data);

        var container = d3.select(divName)
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

function postContactToGoogle() {
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var details = $('#details').val();
    if (firstname !== "" && lastname !== "" && details !== "" && email !== "") {
        $.ajax({
            url: "https://docs.google.com/forms/d/1Ymda9DLq3N1CFFNnY2p35ENn4Rb9OYFXOs4Xf3-wWMI/formResponse",
            data: {
                "entry.998648841": firstname,
                "entry.519187987": lastname,
                "entry.667031926": email,
                "entry.761418809": details,
                type: "POST",
                dataType: "xml",
                statusCode: {
                    200: function () {
                        alert("Your response has been recorded!")
                    }
                }
            }
        });
    } else {
        alert("Your reponse was not sent!\nAll text boxes must be filled!");
    }
}