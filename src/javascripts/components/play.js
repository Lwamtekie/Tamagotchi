import util from '../helpers/util';


let domString = '';
const fun = [50];

function getSum(total, push) {
  return total + push;
}

const Fun = () => {
  if (fun.reduce(getSum) < 51) {
    fun.push(50);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const dull = () => {
  if (fun.reduce(getSum) < 100) {
    fun.push(2);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="Fun">Fun</button>';
  domString += '<button id="dull">dull</button>';
  domString += `<div id="fun">${fun}</div>`;
  util.printToDom('play', domString);
  document.getElementById('Fun').addEventListener('click', Fun, false);
  document.getElementById('dull').addEventListener('click', dull);
};

export default { domStringBuilder };
