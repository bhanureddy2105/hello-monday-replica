var btn = $(".navbar-toggler");
btn.click(() => {
    if (btn.attr("aria-expanded") == "false") {
        $('body').css({
            "margin": "0",
            "height": "100%",
            "overflow": "hidden"
        });;
        $(".navbar").addClass("open");
        $(".nav-link,.navbar-brand").addClass("open-link");
        btn.addClass("open-btn");
        $(".navbar-toggler-icon").addClass("xIcon");
    } else {
        $('body').css("overflow", "visible");
        $(".navbar").removeClass("open");
        $(".navbar-brand").removeClass("open-link");
        btn.removeClass("open-btn");
        $(".navbar-toggler-icon").removeClass("xIcon");
    }

});
var day = new Date().getDay();
var daysForMonday;
if (day == 1) {
    daysForMonday = 0;
} else {
    if (day != 0) {
        daysForMonday = 8 - day;
    } else {
        daysForMonday = 1
    }
}

if (daysForMonday == 1) {
    $(".monday p").html('<p><i class="fas fa-calendar-week"></i>' + daysForMonday + " day until Monday </p>");
} else {
    $(".monday p").html('<p><i class="fas fa-calendar-week"></i>' + daysForMonday + " days until Monday </p>");
}

// $(".title").mouseover(function () { 
//     $(this).text("Copy e-mail");
// });



$(".title").hover(function () {
        var $this = $(this);
        $this.data('defaultText', $this.text());
        $this.text("Copy e-mail");
    },
    function () {
        var $this = $(this);
        $this.text($this.data('defaultText'));
    }
);


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$(".title").click(function () { 
    $(this).text("Email copied to clipboard");
    $(".footer img").attr("src", "images/footer2.gif");
});


$(".heading").hover(function () {
        // over
        $(".heading").addClass("h");
    }, function () {
        // out
        $(".heading").removeClass("h");
    }
);