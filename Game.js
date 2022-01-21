AFRAME.registerComponent("game-play", {
    schema: {
        elementId: { type: "string", default: "#car" },
    },

    init: function () {
        var duration = 30;
        var timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },

    startTimer: function (duration,timerEl) {
        var minutes; 
        var seconds;

        setInterval(()=> {
            if (duration >= 0) {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);
            
                if (minutes < 10) {
                    minutes ="0" + minutes;
                }
                if(seconds < 10) {
                    seconds = "0" + seconds;
                }
                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds,
                });

                duration -= 1;
            }
            else {
                this.gameOver();
            }
        },1000);
    },
    gameOver: function () {
        var carEl = document.querySelector("#car");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
    }
});