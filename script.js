// i wrote this in code bootcamp but it's a fun reminder of where i started
$(document).ready(function () {
    var partymode, partytime, partytext, partymusic, partypooper;
    var partymodeColors = ["#D000FF", "#00FFF2", "#5EFF00", "#F7FF00", "#FF00CC"];
    var stopTheParty = function () {
        clearInterval(partymode);
        clearInterval(partytime);
        clearInterval(partytext);
        clearTimeout(partypooper);
        pm.data("active", false).find("a").html("partymode?").css("color", "rgba(30, 120, 215, 0.1)").css("font-size", "");
        pt.hide();
        $("body").css("background-color", "");
        $("#canvas").css("background-color", "");
    };
    $("body").append('<div id="partymode" style="position:fixed;bottom:2px;right:2px;"><a href="#" style="color:rgba(30, 120, 215, 0.1);">partymode?</a></div>');
    $("body").append('<div id="partytime" style="position:fixed;display:none;font-size:120px;font-weight:bold;padding:30px 80px;border-radius:60px;"><span>P</span><span>A</span><span>R</span><span>T</span><span>Y</span><span>M</span><span>O</span><span>D</span><span>E</span><span>!</span></div>');
    var pm = $("#partymode");
    var pt = $("#partytime");
    pm.click(function (e) {
        e.preventDefault();
        if (!pm.data("active")) {
            pt.show();
            pm.data("active", true).find("a").html("PARTYMODE!!!").css("color", "").css("font-size", "20px");
            partymode = setInterval(function () {
                $("body").css("background-color", partymodeColors[Math.floor(Math.random() * 5)]);
                $("#canvas").css("background-color", partymodeColors[Math.floor(Math.random() * 5)]);
            }, 200);
            partytime = setInterval(function () {
                var br1 = Math.floor(Math.random() * 200) + "px ";
                var br2 = Math.floor(Math.random() * 200) + "px ";
                var br3 = Math.floor(Math.random() * 200) + "px ";
                var br4 = Math.floor(Math.random() * 200) + "px";
                var br = br1 + br2 + br3 + br4;
                pt.css("top", Math.floor(Math.random() * 80) - 5 + "%")
                    .css("left", Math.floor(Math.random() * 40) - 10 + "%")
                    .css("background-color", partymodeColors[Math.floor(Math.random() * 5)])
                    .css("border-radius", br);
            }, 400);
            partytext = setInterval(function () {
                $.each($("#partytime span"), function () {
                    $(this).css("color", partymodeColors[Math.floor(Math.random() * 5)]);
                });
            }, 100);
            partypooper = setTimeout(stopTheParty, 5000);
        } else {
            stopTheParty();
        }
    });
    setTimeout(function () {
        $("body").append("<div id='puglick' style=\"background:url('https://i.giphy.com/NGALQBUgvmVTa.gif');height:100%;width:100%;position:fixed;top:0;left:0;background-size:cover;opacity:0.8;\" onclick=\"$(this).hide();setTimeout(function(){$('#puglick').show()},300000);\"></div>")
    }, 300000);
});
