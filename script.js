/*function MonsterConstructor(name, health, move = "Scratch") {
    this.name = name;
    this.health = health;
    this.move = move;

    this.attack = function() {
        // output example: Pikachu used "Thunder"!
        console.log(`${this.name} used "${this.move}"`);
    }
}

function PokemonConstructor(name, health, move, type) {
    Monster.call(this, name, health, move);
    this.type = type;
    this.level = 1;
}

Monster.prototype.misunderstood = true;
Pokemon.prototype.levelUp = function() {
    this.level++;

    this.health += 3;

    console.log(`${this.name} has levelled up! They are now level ${this.level} with health ${this.health}`);
}

Object.setPrototypeOf(Pokemon.prototype, Monster.prototype);
*/

class Monster {
    constructor(name, health, move) {
        this.name = name;
        this.health = health;
        this.move = move;
        this.misunderstood = true;
    }

    attack() {
        // output example: Pikachu used "Thunder"!
        console.log(`${this.name} used "${this.move}"`);
    }
}

class Pokemon extends Monster{
    constructor(name, health, move, type) {
        super(name, health, move);
        this.type = type;
        this.level = 1;
    }

    levelUp() {
        this.level++;

        this.health += 3;

        console.log(`${this.name} has levelled up! They are now level ${this.level} with health ${this.health}`);
    }
}

class Dragon extends Monster {
    constructor(name, health, move, rider) {
        super(name, health, move);
        this.rider = rider;
    }
}

const frankenstein = new Monster("Frakenstein", 10, "Create Life");
const pikachu = new Pokemon("Pikachu", 12, "Thunder", "Electric");
const viserion = new Dragon("Viserion", 10000, "Blue Fire", "Night King");

console.dir(viserion);
console.dir(frankenstein);
console.dir(pikachu);

frankenstein.attack();
pikachu.attack();
viserion.attack();

// frankenstein.levelUp();
pikachu.levelUp();

viserion.levelUp();