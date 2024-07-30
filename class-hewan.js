class Hewan {
    constructor(nama, spesies, usia)
    this.nama = nama;
    this.spesies = spesies;
    this.usia = usia;
}

const hewan1 = new Hewan('Simba', 'Lion', 10);
const hewan2 = new Hewan('Dumbo', 'Elephant', 11);
const hewan3 = new Hewan('George', 'Monkey', 12);

// Method Suara Hewan
suara hewan1() {
    console.log(`${this.nama} the ${this.spesies} says Roar!`);
}

suara hewan2() {
    console.log(`${this.nama} the ${this.spesies} says Trumpet!`);
}

suara hewan3() {
    console.log(`${this.nama} the ${this.spesies} says Ooh Ooh Aah Aah!`)
}

console.log(hewan1);
console.log(hewan2);
console.log(hewan3);

// Output
// Simba the Lion says Roar!
// Dumbo the Elephant says Trumpet!
// George the Monkey says Ooh Ooh Aah Aah!