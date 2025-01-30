//your JS code here. If required.
const student = {
  name: "Aru Singh";
};

function getKeys(arg) {
  return Object.keys(arg);
}

const keys = getKeys(student);
console.log(keys);

console.log(keys.includes("name"));