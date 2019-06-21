import util from '../helpers/util';


let domString = '';
const full = [100];

function getSum(total, push) {
  return total + push;
}

const veggies = () => {
  if (full.reduce(getSum) < 91) {
    full.push(10);
    full.reduce(getSum);
    const totalHealth = full.reduce(getSum);
    document.getElementById('full').innerHTML = totalHealth;
  }
};

const candy = () => {
  if (full.reduce(getSum) > 2) {
    full.push(-3);
    full.reduce(getSum);
    const totalHealth = full.reduce(getSum);
    document.getElementById('full').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button type="button" id="veggies">veggies</button>';
  domString += '<button type="button" id="candy">candy</button>';
  domString += `<div id="full">${full}</div>`;
  util.printToDom('eat', domString);
  document.getElementById('veggies').addEventListener('click', veggies, false);
  document.getElementById('candy').addEventListener('click', candy);
};

export default { domStringBuilder };
