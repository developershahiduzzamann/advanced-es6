const person = {
    name:'hena',
    age: 10,
    friend: ["sabbir khan", "topu Khan"],
    status: true,
}

const newPerson =JSON.stringify(person);
const oldPerson =JSON.parse(newPerson);
console.log(oldPerson)