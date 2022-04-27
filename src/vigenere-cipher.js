const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
    this.str = "abcdefghijklmnopqrstuvwxyz";
    this.arr = this.str.split("");
    this.arrDouble = this.arr.concat(this.arr);
    this.row = [];
    this.matrix = [];
    for (let i = 0; i < this.arr.length; i++) {
      this.row = [];
      for (let j = i; j < i + this.arr.length; j++) {
        this.row.push(this.arrDouble[j]);
      }
      this.matrix.push(this.row);
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let i = 0;
    let j;
    let l = 0;
    let res = "";
    for (let k = 0; k < message.length; k++) {
      i = this.arr.indexOf(message[k].toLowerCase()); //index X

      if (i < 0) {
        res = res + message[k];
        continue;
      }
      j = this.arr.indexOf(key[l].toLowerCase()); //index Y
      console.log(j);
      if (l < key.length - 1) {
        l++;
      } else l = 0;
      res = res + this.matrix[i][j];
    }
    if (this.flag) {
      return res.toUpperCase();
    } else {
      return res.toUpperCase().split("").reverse().join("");
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let i = 0;
    let j;
    let l = 0;
    let res = "";
    for (let k = 0; k < encryptedMessage.length; k++) {
      i = this.arr.indexOf(encryptedMessage[k].toLowerCase()); //index X
      if (i < 0) {
        res = res + encryptedMessage[k];
        continue;
      }
      j = this.arr.indexOf(key[l].toLowerCase()); //index Y

      if (l < key.length - 1) {
        l++;
      } else l = 0;

      let x = this.matrix[j].indexOf(encryptedMessage[k].toLowerCase());

      res = res + this.arr[x];
    }
    if (this.flag) {
      return res.toUpperCase();
    } else {
      return res.toUpperCase().split("").reverse().join("");
    }
  }

  // reverseMachine.encrypt('attack at dawn!', 'alphonse')
}

module.exports = {
  VigenereCipheringMachine,
};

let directMachine = new VigenereCipheringMachine();
let reverseMachine = new VigenereCipheringMachine(false);
//directMachine.encrypt("attack at dawn!", "alphonse");

// console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));

console.log(directMachine.encrypt("Samelengthkey", "Samelengthkey"));
