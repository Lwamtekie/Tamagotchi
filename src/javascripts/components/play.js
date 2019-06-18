import util from '../helpers/util';


let domString = '';
const fun = [50];

function getSum(total, push) {
  return total + push;
}

const superFun = () => {
  if (fun.reduce(getSum) < 51) {
    fun.push(50);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const slightlyFun = () => {
  if (fun.reduce(getSum) < 100) {
    fun.push(2);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="superFun">Big Fun</button>';
  domString += '<button id="slightlyFun">No Fun</button>';
  domString += `<div id="fun">${fun}</div>`;
  util.printToDom('play', domString);
  document.getElementById('superFun').addEventListener('click', superFun, false);
  document.getElementById('slightlyFun').addEventListener('click', slightlyFun);
};

export default { domStringBuilder };
