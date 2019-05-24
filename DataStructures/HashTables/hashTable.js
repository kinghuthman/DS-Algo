class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    /* Set 
    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate 
    chaining
    */
    set(key, value) {
        let index = this._hash(key);
        // if there's nothing there
        if (!this.keyMap[index]) {
            // set the index of the keyMap to an empty array
            this.keyMap[index] = [];
        }
        // add in key and value pair at that index
        this.keyMap[index].push([key, value])
        return this.keyMap
    }
    /* Get
    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If the key isn't found, returns undefined
    */
    get(key) {
        let index = this._hash(key);
        // if we find something at that index
        if (this.keyMap[index]) {
            // loop over that index
            for (let i = 0; i < this.keyMap[index].length; i++) {
                /* looking to see if the key matches the first item 
                in the array */
                if (this.keyMap[index][i][0] === key) {
                    // return the value
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
    /* Values
    Loops through the hash table array and returns an array of values in 
    the table.
    */
    values() {
        // array to store all data
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // this.keymap[i] referring to the subarray
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // push just the value
                    if (!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr;
    }
    /* Keys
    Loops through the hash table array and returns an array of keys 
    in the table
    */
    keys() {
        // array to store all data
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // this.keymap[i] referring to the subarray
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // push just the value
                    if (!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr;
    }
}



let ht = new HashTable(17);
console.log('set', ht.set("hello", "goodbye"))
console.log('set', ht.set("good", "morning"))
console.log('set', ht.set("so", "long"))
console.log('set', ht.set("take", "care"))
console.log('set', ht.set("alls", "well"))
console.log('set', ht.set("fare", "well"))
console.log('set', ht.set("farewell", "mate"))
console.log('ht', ht)
console.log('get', ht.get("hello"))
console.log('values', ht.values())
console.log('keys', ht.keys())