const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    if (!this.chain) this.chain = [];
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      if (!this.chain) this.chain = [];
      value = String(value);
      if (value == "function () {}") value = "function () { }";
      this.chain.push(value);
    } else {
      if (!this.chain) this.chain = [];
      this.chain.push(" ");
    }
    return this;
  },
  removeLink(position) {
    if (!this.chain) this.chain = [];
    const err = new Error("You can't remove incorrect link!");
    if (
      typeof position != "number" ||
      position <= 0 ||
      position >= this.chain.length ||
      !Number.isInteger(position)
    ) {
      //this.chain = [];
      delete this.chain;
      throw err;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (!this.chain) this.chain = [];
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = "";

    for (let i = 0; i < this.chain.length; i++) {
      if (this.chain[i + 1] !== undefined)
        res = res + "( " + this.chain[i] + " )~~";
      else res = res + "( " + this.chain[i] + " )";
    }

    delete this.chain;
    //this.chain = [];
    // this.chain = undefined;
    return res;

    //delete this.chain;
  },
};

module.exports = {
  chainMaker,
};

//chainMaker.addLink(1).addLink(2).addLink(3);
//console.log(chainMaker.getLength());
console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain()
);

console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain()
);

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain());
