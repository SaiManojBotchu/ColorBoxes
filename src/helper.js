/** Return a random item from a list  **/
function choice(arr) {
  let randItem = Math.floor(Math.random() * arr.length);
  return arr[randItem];
}

export { choice };
