let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  for(let i of arr){
    if(i.profession=='developer')console.log(i);
}
}

function addData() {
  arr.push({id:4,name:"susan",age:20,profession:"intern"});
  consoleArr();
}

function removeAdmin() {
  for(let i = 0;i<arr.length;i++){
    if(arr[i].profession=='admin')arr.splice(i,1);
}
consoleArr();
}

function concatenateArray() {
  arr = arr.concat(arr);
  consoleArr();
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
