import util from '../helpers/util';


let domString = '';
const strong = [100];

function getSum(total, push) {
  return total + push;
}

const run = () => {
  if (strong.reduce(getSum) < 100) {
    strong.push(1);
    strong.reduce(getSum);
    const totalHealth = strong.reduce(getSum);
    document.getElementById('strong').innerHTML = totalHealth;
  }
};

const Violence = () => {
  if (strong.reduce(getSum) > 10) {
    strong.push(-10);
    strong.reduce(getSum);
    const totalHealth = strong.reduce(getSum);
    document.getElementById('strength').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="run">Run</button>';
  domString += '<button id="Violence">Fire</button>';
  domString += `<div id="strong">${strong}</div>`;
  util.printToDom('fight', domString);
  document.getElementById('run').addEventListener('click', run);
  document.getElementById('Violence').addEventListener('click', Violence);
};

export default { domStringBuilder };
