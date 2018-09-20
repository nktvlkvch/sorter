class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.arrLength = 0;
    this.compareFunction = function(a,b){
      return a - b;
    }

  }

  add(element) {
    // your implementation
    this.arr.push(element);
    this.arrLength++;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arrLength;;
  }

  toArray() {
    // your implementation
    return this.arr;

  }

  sort(indices) {
    // your implementation
    var i = 0;
    var secondArr = [];
    for(i = 0; i < indices.length; i++){
      secondArr.push(this.arr[indices[i]]);
    }
    secondArr.sort(this.compareFunction);

    indices.sort(function(a,b){return a -b});
    for (i=0; i<indices.length; i++){
      this.arr[indices[i]] = secondArr[i];
    }

  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;