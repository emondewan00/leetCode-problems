// Hash table

class HashTable {
  constructor(size = 50) {
    this.table = Array.from({ length: size }, () => []);
    this.size = size;
  }

  // Hash function to map keys to array indices
  _hash(key) {
    let hash = 0;
    const keyStr = key.toString();
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  set(key, value) {
    const index = this._hash(key);
    // Check if key already exists and update it
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    // Insert new key-value pair
    this.table[index].push([key, value]);
  }

  // Retrieve the value for a given key
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) {
          return v;
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
console.log(hashTable.get("name")); // Output: "Alice"
console.log(hashTable.get("age")); // Output: 25
hashTable.remove("name");
console.log(hashTable.get("name")); // Output: undefined
