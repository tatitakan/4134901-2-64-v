let person = {
    firstname : "Top",
    lastname : "Kun",
    age : 21,
    sex : "male",

    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};

console.log(person);

const p = person;
p.age = 10;
console.log(p);

person.age = 20;
console.log(person.age); //value
console.log(person.fullname); //property
console.log(person.fullname()); //return