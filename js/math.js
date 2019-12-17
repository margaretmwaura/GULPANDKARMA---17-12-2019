
window.math = window.math || {};

(function() {
    var append = function() {
        window.document.getElementById('result').innerHTML = "MaggieMwaura";

    };

    var hovering = function()
    {
        window.document.getElementById('highlight').style.background = "blue"
        console.log("Hovering");
    };

    window.math.init = function() {

        document.getElementById('button').addEventListener('click', append);
        document.getElementById('highlight').addEventListener('mouseover', hovering);
    };
})();

