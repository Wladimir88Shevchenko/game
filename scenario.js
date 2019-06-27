function show() {
    console.log("Name is " + this.name);
    console.log("He is a " + this.who);
    console.log("He has " + this.health + " hp");
    if (this.who == "warrior") {
        console.log("His armor: " + this.armor);
        console.log("He has " + this.strength + " strength");
    } else {
        console.log("He has " + this.intellect + " intellect");
    }
    console.log("=======================================");
}

/* MAGE SETTINGS */

function humanoid_mage(name) {
    this.maxhealth = 100;
    this.who = "mage";
    this.name = name;
    this.health = 100;
    this.armor = 0;
    this.intellect = 60;
}

humanoid_mage.prototype.attack = function (enemy) {
    if (enemy.armor >= this.intellect) {
        enemy.armor -= this.intellect;
    } else {
        var change = enemy.armor - this.intellect;
        enemy.armor = 0;
        enemy.health += change;
        if (enemy.health <= 0) {
            alert(enemy.name + "  lose this game.");
            console.log(enemy.name + "  lose this game.");
        }
    }
}

humanoid_mage.prototype.read = function () {
    this.intellect += 100;
}

humanoid_mage.prototype.show = show;

/* WARRIOR SETTINGS */

function humanoid_warrior(name) {
    this.maxhealth = 100;
    this.who = "warrior";
    this.name = name;
    this.health = 100;
    this.armor = 200;
    this.strength = 30;
}

humanoid_warrior.prototype.attack = function (enemy) {
    if (enemy.armor >= this.strength) {
        enemy.armor -= this.strength;

    } else {
        var change = enemy.armor - this.strength;
        enemy.armor = 0;
        enemy.health += change;
        if (enemy.health <= 0) {
            alert(enemy.name + "  lose this game.");
            console.log(enemy.name + "  lose this game.");
        }
    }
}

humanoid_warrior.prototype.show = show;

humanoid_warrior.prototype.train = function () {
    this.health += 90;
    if (this.health > this.maxhealth) {
        this.maxhealth = this.health;

    }
}

/* ZZZ WARRIOR SETTINGS */

/* FIRST PLAYER */
var first_name = prompt("Как вас зовут?");
var who_will_be;
var health1 = document.querySelectorAll("#health1")[0];
var power1 = document.querySelectorAll("#power1")[0];
var armor_title1 = document.querySelectorAll("#armor_health1")[0];
var armor1 = document.querySelectorAll("#armor1")[0];
var atk1 = document.querySelectorAll("#btn_atk1")[0];
var train1 = document.querySelectorAll("#btn_train1")[0];
var proto_line1 = document.querySelectorAll(".proto_line_left")[0];
var left_health_line = document.querySelectorAll(".health_line_left>.green_line")[0];
document.querySelectorAll("#first_player_name")[0].innerHTML = first_name;

do {
    who_will_be = prompt(first_name + " будете играть за мага или за воина?", "маг");
} while (who_will_be != "маг" && who_will_be != "воин");

if (who_will_be == "маг") {
    var first = new humanoid_mage(first_name);
    var div_left = document.querySelectorAll(".firstCharacter")[0];
    div_left.src = "images/mage/left/normal.png";
    power1.innerHTML = first.intellect;
    health1.innerHTML = first.health;
    armor1.style.display = "none";
    armor_title1.style.display = "none";
    train1.innerHTML = "Читать";
    proto_line1.style.visibility = "hidden";
} else {
    var first = new humanoid_warrior(first_name);
    var div_left = document.querySelectorAll(".firstCharacter")[0];
    div_left.src = "images/warrior/left/normal.png";
    document.querySelectorAll("#power_title1")[0].innerHTML = "Сила: ";
    power1.innerHTML = first.strength;
    health1.innerHTML = first.health;
    armor1.innerHTML = first.armor;
}
/* ZZZ FIRST PLAYER */



/* SECOND PLAYER */
var second_name = prompt("Как вас зовут?");
var who_will_be2;
var health2 = document.querySelectorAll("#health2")[0];
var power2 = document.querySelectorAll("#power2")[0];
var armor_title2 = document.querySelectorAll("#armor_health2")[0];
var armor2 = document.querySelectorAll("#armor2")[0];
var atk2 = document.querySelectorAll("#btn_atk2")[0];
var train2 = document.querySelectorAll("#btn_train2")[0];
var proto_line2 = document.querySelectorAll(".proto_line_right")[0];
var right_health_line = document.querySelectorAll(".health_line_right>.green_line")[0];
document.querySelectorAll("#second_player_name")[0].innerHTML = second_name;

do {
    who_will_be2 = prompt(second_name + " будете играть за мага или за воина?", "воин");
} while (who_will_be2 != "маг" && who_will_be2 != "воин");

if (who_will_be2 == "маг") {
    var second = new humanoid_mage(second_name);
    var div_right = document.querySelectorAll(".secondCharacter")[0];
    div_right.src = "images/mage/right/normal.png";
    power2.innerHTML = second.intellect;
    health2.innerHTML = second.health;
    armor2.style.display = "none";
    armor_title2.style.display = "none";
    train2.innerHTML = "Читать";
    proto_line2.style.visibility = "hidden";
} else {
    var second = new humanoid_warrior(second_name);
    var div_right = document.querySelectorAll(".secondCharacter")[0];
    div_right.src = "images/warrior/right/normal.png";
    document.querySelectorAll("#power_title2")[0].innerHTML = "Сила: ";

    power2.innerHTML = second.strength;
    health2.innerHTML = second.health;
    armor2.innerHTML = second.armor;
}

/* ZZZ SECOND PLAYER */


/* TRAIN */

train1.addEventListener("click", function () {
    if (first.who == "mage") {
        first.read();
        power1.innerHTML = first.intellect;
    } else {
        first.train();
        health1.innerHTML = first.health;
        let proc1 = (first.health / first.maxhealth) * 100;
        left_health_line.style.width = proc1 + "%";
    }
});

train2.addEventListener("click", function () {
    if (second.who == "mage") {
        second.read();
        power2.innerHTML = second.intellect;
    } else {
        second.train();
        health2.innerHTML = second.health;
        let proc2 = (second.health / second.maxhealth) * 100;
        right_health_line.style.width = proc2 + "%";
    }
});

/* ZZZ TRAIN */



/* ATACK */

atk1.addEventListener("click", function () {
    first.attack(second);
    health2.innerHTML = second.health;
    armor2.innerHTML = second.armor;
    var proc3 = (second.health / second.maxhealth) * 100;
    right_health_line.style.width = proc3 + "%";
    proc3 = (second.armor / 200) * 100;
    armor2.style.width = proc3 + "%";   

});

atk2.addEventListener("click", function () {
    second.attack(first);
    health1.innerHTML = first.health;
    armor1.innerHTML = first.armor;

    proc3 = (first.health / first.maxhealth) * 100;
    left_health_line.style.width = proc3 + "%";
    proc3 = (first.armor / 200) * 100;
    armor1.style.width = proc3 + "%";

});


/* ZZZ ATACK */