var paused = false;

var barWidths = {
    "climate-change": 0,
    "gender-inequality": 0,
    "racism": 0
};

$(function() {
    var clicked = false;
    var top = Math.random() * 100
    var right = Math.random() * 100
    $(".icon1").attr('style', 'top: ' + top + '%; ' + 'right: ' + right + '%')
    $('body').on('click', '.icon1', function() {
        updateScore(16)
        $(this).fadeOut("slow");
        if (!clicked) {
            $("#popup div").html("The dictionary definition of racism is the 'prejudice, discrimination, or antagonism directed against someone of a different race based on the belief that one's own race is superior.' Though we may believe that racism ended with slavery, and the coming of the 21st century, racism is stil alive and well. It was even more present after the 2016 elections when hate crimes fueled by racism increased.");
            $("#popup").show();
            paused = true;
            clicked = true;
        }
        barWidths["racism"] -= 10;
        $('#racism .bar-inner').css('width', barWidths["racism"].toString() + '%');
    });

    $("#popup").on('click', function() {
        $("#popup").fadeOut("slow");
        paused = false;
    });
});

$(function() {
    var clicked = false;
    var top = Math.random() * 100
    var right = Math.random() * 100
    $(".icon2").attr('style', 'top: ' + top + '%; ' + 'right: ' + right + '%')
    $('body').on('click', '.icon2', function() {
        updateScore(16)
        $(this).fadeOut("slow");
        if (!clicked) {
            $("#popup div").html("Although several politicians choose to believe it exists, global warming is affecting our earth. If the earth increased just .5 degrees Celsius, we'd all be in terrible danger of extinction. We can all do something to not stop, but slow down the process by little acts such as recycling, biking, use renewable resources, conserve energy and water, and so much more. Oh, and remember, recycling is cool!");
            $("#popup").show();
            paused = true;
            clicked = true;
        }
        barWidths["climate-change"] -= 10;
        $('#climate-change .bar-inner').css('width', barWidths["climate-change"].toString() + '%');
    });
});




$(function() {
    var clicked = false;
    var top = Math.random() * 100
    var right = Math.random() * 100
    $(".icon5").attr('style', 'top: ' + top + '%; ' + 'right: ' + right + '%')
    $('body').on('click', '.icon5', function() {
        updateScore(16.4)
        $(this).fadeOut("slow");
        if (!clicked) {
            $("#popup div").html("Feminist: “The person who believes in the social, political, and economic equality of the sexes.” -Chimamanda Ngozi Adichie // A common misconception is that one needs to be a woman in order to believe in feminsim. Gender equality is just that - equality. Gender equality affects as all regarding opportunities, wages, even stereotypes. As cliche and difficult as it may sound, by eliminating these debilitating stereotypes, we can all help the world become a better place.");
            $("#popup").show();
            paused = true;
            clicked = true;
        }
        barWidths["gender-inequality"] -= 10;
        $('#gender-inequality .bar-inner').css('width', barWidths["gender-inequality"].toString() + '%');
    });
});


var totalScore = 0;

function updateScore(change) {
    totalScore += change;
    $("#myScore").text(totalScore)
}
/*updateScore();*/


$(function() {
    $('.bar').each(function() {
        var bar = $(this),
            id = bar.attr('id');
        setInterval(function() {
            if (!paused) {
                barWidths[id] += Math.random() * 10;
                var percentFilled = barWidths[id].toString();
                bar.find('.bar-inner').css('width', percentFilled + '%');
                if (barWidths[id] >= 100) {
                    alert("GAME OVER");
                }
            }
        }, 1000);
    });

    //Create a random icon (icon1, 2, or 50)
    //That random icon element has random height / width
    // That random icon has on click event
    // Append that element as child to #icons

    setInterval(function() {
        var top = Math.random() * 100
        var right = Math.random() * 100
        var iconClasses = ['icon1', 'icon2', 'icon5'];
        var sources = ['racism.png', 'waterbottle.png', 'genderequality.png'];
        var index = Math.floor(Math.random() * 3) //Generate number between 0-2
        var elementStr = '<img src="' + sources[index] + '" class="' + iconClasses[index] + '">';
        var newIcon = $(elementStr).attr('style', 'top: ' + top + '%; ' + 'right: ' + right + '%')
        $('#icons').append(newIcon);
    }, 1000);

});