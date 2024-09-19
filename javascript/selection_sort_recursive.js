function selectionSortRecursive(arr) {
  // type your code here
  let sortedArr = [];
  while(arr.length > 0){
    let min = Math.min(...arr)
    let indx = arr.indexOf(min)

    sortedArr.push(min)
    arr.splice(indx, 1)

  }
  return sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
