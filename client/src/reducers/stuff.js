const add = x => y => x + y;

// console.log(add(2)(4));
// console.log(add(2)(4));
// console.log(add(2)(4));

let databaseState = 0;

function interactWithDatabase(v) {
  databaseState += v;

  return databaseState;
}

const addToDb = newVal => {
  const result = interactWithDatabase(newVal);

  return result;
};

console.log(addToDb(7));
console.log(addToDb(7));
console.log(addToDb(7));
console.log(addToDb(7));
console.log(addToDb(7));
