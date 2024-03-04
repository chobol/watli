class Watli {
    constructor(name) {
      this.name = name;
      this.isMagical = true;
      this.energyLevel = 100;
    }
  
    castSpell(spell) {
      if (this.isMagical && this.energyLevel > 0) {
        console.log(`${this.name} casts the spell: ${spell}`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} is too tired to cast spells. Rest and recharge!`);
      }
    }
  
    spreadJoy() {
      if (this.isMagical && this.energyLevel > 0) {
        console.log(`${this.name} spreads joy and happiness to everyone around.`);
        this.energyLevel -= 20;
      } else {
        console.log(`${this.name} is too tired to spread joy. Rest and recharge!`);
      }
    }
  
    rest() {
      console.log(`${this.name} takes a magical nap and recharges energy.`);
      this.energyLevel = 100;
    }
  }
  
  // Example usage:
  const myWatli = new Watli('Sparkle');
  myWatli.castSpell('Levitation');
  myWatli.spreadJoy();
  myWatli.rest();
  myWatli.castSpell('Invisibility');
  