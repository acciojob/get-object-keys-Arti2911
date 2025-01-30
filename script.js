//your JS code here. If required.
const student = {
  name: "Arti";
};

function getKeys(obj) {
  return Object.keys(obj);
}

const keys = getKeys(student);
console.log(keys);

console.log(keys.includes("name"));