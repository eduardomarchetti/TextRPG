const multiplyBy10 = function(value){
    return value * 10;
};
const result = multiplyBy10(20);

const addTogether = (value1, value2) =>{
    return value1 + value2;
}
const result2 = addTogether(10,20);

const me = {
    name: `Eduardo`,
    greet(person){
        console.log(`${this.name} says hello to ${person}`);
    }
    greet(me.name);
}
//----------------------------------------------


const arrayEx = [`edu`, 28, true, {key: `value`}];

arrayEx.push(`New value`);
const savedValue = arrayEx.indexOf(`Fish`);

//const result = arrayEx.indexOf(28);

////////////loops above
//for
for(let i = 0; i < arrayEx.length; i++){
    console.log(arrayEx[1];
}

arrayEx.forEach(item => {
    console.log(item);
});


while(true){
    console.log(`its a trap`);
}
let count = 0;



//





