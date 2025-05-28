var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (newName) {
        this.name = newName;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    User.prototype.displayInfo = function () {
        return "User [ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, "]");
    };
    return User;
}());
var user = new User(1, "Avi", "avi@ge.com");
console.log(user.displayInfo());
user.setName("Avinash");
console.log(user.getName());
