// Hash table

class HashTable {
  constructor(size) {
    this.table = Array.from({ length: size }, () => []);
    this.size = size;
  }

  hash(value) {
    const strVal = value.toString();
    let sum = 0;
    for (let i = 0; i < strVal.length; i++) {
      sum += strVal.charCodeAt(i);
    }

    return sum % this.size;
  }

  set(value) {
    const index = this.hash(value);
    this.table[index].push(value);
  }
  get(value) {
    const index = this.hash(value);
    const arr = this.table[index];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
}

const table = new HashTable(5);

table.set("hello");
table.set("hi");
table.set("emon");
table.set("john");
table.set("apple");
console.log(table.table);
console.log(table.get("emon"));
console.log(table.get("john"));
