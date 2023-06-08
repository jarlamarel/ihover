"use strict";
var AutomaticVacuum = /** @class */ (function () {
    function AutomaticVacuum(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    AutomaticVacuum.prototype.executeInstructions = function (instructions) {
        for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
            var instruction = instructions_1[_i];
            switch (instruction) {
                case 'D':
                    this.rotateRight();
                    break;
                case 'G':
                    this.rotateLeft();
                    break;
                case 'A':
                    this.moveForward();
                    break;
                default:
                    console.log("Invalid instruction: ".concat(instruction));
            }
        }
    };
    AutomaticVacuum.prototype.rotateRight = function () {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'S';
                break;
            case 'S':
                this.orientation = 'W';
                break;
            case 'W':
                this.orientation = 'N';
                break;
        }
    };
    AutomaticVacuum.prototype.rotateLeft = function () {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'W';
                break;
            case 'E':
                this.orientation = 'N';
                break;
            case 'S':
                this.orientation = 'E';
                break;
            case 'W':
                this.orientation = 'S';
                break;
        }
    };
    AutomaticVacuum.prototype.moveForward = function () {
        switch (this.orientation) {
            case 'N':
                this.y += 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    };
    AutomaticVacuum.prototype.getPosition = function () {
        return "x=".concat(this.x, " y=").concat(this.y, " orientation=").concat(this.orientation);
    };
    return AutomaticVacuum;
}());
var gridX = 10;
var gridY = 10;
var initialX = 5;
var initialY = 5;
var initialOrientation = 'N';
var instructions = 'DADADADAA';
var vacuum = new AutomaticVacuum(initialX, initialY, initialOrientation);
vacuum.executeInstructions(instructions);
console.log("Final position: ".concat(vacuum.getPosition()));
