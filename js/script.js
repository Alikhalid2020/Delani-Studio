$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").hide()
        $("#design").show();
    });
    $("#design").click(function () {
        $("#design").hide();
        $("#design-image").show();
        $("#design").slideUp();
    });
    $("#development-image").click(function () {
        $("#development-image").hide()
        $("#development").show();
    });
    $("#development").click(function () {
        $("#development").hide();
        $("#development-image").show();
        $("#development").slideUp();
    });
    $("#product-image").click(function () {
        $("#product-image").hide()
        $("#product").show();
    });
    $("#product").click(function () {
        $("#product").hide();
        $("#product-image").show();
        $("#product").slideUp();
    });
});
$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });
    $("#work2").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
    $("#work3").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
    $("#work4").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
    $("#work5").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#work6").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
    $("#work7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
    $("#work8").mouseover(function () {
        $("#overlay8").show();
    }).mouseout(function () {
        $("#overlay8").hide();
    });
    $("#work1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });
    $("#work2").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
    $("#work3").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
    $("#work4").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
    $("#work5").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#work6").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
    $("#work7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
    $("#work8").mouseover(function () {
        $("#overlay8").show();
    }).mouseout(function () {
        $("#overlay8").hide();
    });
    $("button").click(function () {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name === "") {
            alert("Please Insert your name")
        } else
        if (email === "") {
            
        } else
        if (message === "") {
            alert("Please insert your message!")
        } else {
            alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
        }
    });
})