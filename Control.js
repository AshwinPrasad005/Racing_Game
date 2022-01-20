AFRAME.registerComponent("terrain-rotation-reader",{
    schema: {
        changingDirection: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.changingDirection < 0.1 ) {
                    this.data.changingDirection += 0.5;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.changingDirection > -0.1 ) {
                    this.data.changingDirection -= 0.5;
                }
            }
        });
    },
    tick: function() {
        var mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.changingDirection;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z,
        });
    }
});

AFRAME.registerComponent("car-velocity-reader", {
    schema: {
        carSpeed: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowDown") {
                if (this.data.carSpeed < 0.1) {
                    this.data.carSpeed += 0.1;
                }
            }
            if (e.key === "ArrowUp") {
                if (this.data.carSpeed > -0.1) {
                    this.data.carSpeed -= 0.1;
                }
            }
        });
    },
    tick: function () {
        var carVelocity = this.el.getAttribute("position");

        carVelocity.z += this.data.carSpeed;

        this.el.setAttribute("position", {
            x: carVelocity.x,
            y: carVelocity.y,
            z: carVelocity.z,
        });
    }
});

AFRAME.registerComponent("car-direction", {
    schema: {
        carSpeed: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowLeft") {
                if (this.data.carSpeed < 0.1) {
                    this.data.carSpeed -= 0.01;
                }
            }
            if (e.key === "ArrowRight") {
                if (this.data.carSpeed > -0.1) {
                    this.data.carSpeed += 0.01;
                }
            }
        });
    },
    tick: function () {
        var carVelocity = this.el.getAttribute("position");

        carVelocity.x += this.data.carSpeed;

        this.el.setAttribute("position", {
            x: carVelocity.x,
            y: carVelocity.y,
            z: carVelocity.z,
        });
    },
});