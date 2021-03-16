let array = [];
const chainMaker = {
  getLength() {
    return array.length;
  },
  addLink(value) {
    let newValue = String(value);
    array.push(`( ${newValue} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 || position <= this.getLength()) {
      let index = position - 1;
      array.splice(index, 1);
      return this;
    } else {
      array = [];
      throw new Error('Error on removing wrong link');
    }
  },
  reverseChain() {
    array.reverse();
    return this;
  },
  finishChain() {
    let chain = array.join('~~');
    array = [];
    return chain;
  }
};

module.exports = chainMaker;
