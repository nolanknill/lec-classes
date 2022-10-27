class Monster {
    constructor(name, health, move) {
        this.name = name;
        this.health = health;
        this.move = move;
        this.misunderstood = true;
    }

    attack() {
        console.dir(this);
        console.log(`${this.name} used "${this.move}"`);
    }
}

class Dragon extends Monster {
    constructor(name, health, move, rider) {
        super(name, health, move);

        this.rider = rider;
    }

    // You can overwrite parent methods!
    attack() {
        console.log(`${this.rider} yells Attack!`);
        console.log(`${this.name} uses ${this.move}`);
    }
}


class Pokemon extends Monster {
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

const godzilla = new Monster("Godzilla", 9001, "Stomp");
const thanos = new Monster("Thanos", 4500, "Snap");
const pokemon = new Pokemon("Magikarp", 20, "Splash");
const dragon = new Dragon("Viserion", 25000, "Blue Fire", "Night King");

pokemon.levelUp();

godzilla.attack();
thanos.attack();
pokemon.attack();
dragon.attack();

const buttonEl = document.querySelector("button");

// Doesn't work, "this" inside of Monster.attack method points to the buttonEl!
buttonEl.addEventListener("click", godzilla.attack);

// Wrap methods in anonymous functions when passing them to other functions
buttonEl.addEventListener("click", () => {godzilla.attack()});
