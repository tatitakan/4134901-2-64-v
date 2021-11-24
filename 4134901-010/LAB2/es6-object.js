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

//destructuring
const { firstname, lastname, age: a, sex: s } = person;
console.log(firstname);
console.log(s);

//string
const S1 = "Hello World !!";
const S2 = "My Name is";
const Aname = "Top";
let conCat = S1 + S2 + Aname;
console.log(conCat);
conCat = `
            I
            Love
            it. ${S2} ${Aname}

        `;
console.log(conCat);

//Spread Op (...)
const A1 = [2, 3, 4];
const A2 = [5, 6, 7];
let comArr = [A1, A2];
console.log(comArr);

comArr = [...A1, ...A2];
console.log(comArr);

sum = (...numbers) => {
    let total = 0;
    for ( value of numbers) total += value;
    return total;
};

console.log(sum(comArr));
