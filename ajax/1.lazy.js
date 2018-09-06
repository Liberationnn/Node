let mMax1 = () => 1;
let Max2 = () => 2;
let Max3 = () => 3;

let getMax = () => {
  console.log('compare');
  let fns = [mMax1, Max2, Max3];
  let max = fns[0](), maxFn = fns[0];
  for (let i = 1; i < fns.length; i++) {
    if (fns[i]() > max) {
      max = fns[i]();
      maxFn = fns[i];
    }
  }
  getMax = maxFn;
  return max;
};

let max1 = getMax();
let max2 = getMax();
console.log(max1, max2);