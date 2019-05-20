import '../styles/main.scss';
import 'bootstrap';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import pet from './components/pet';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
  pet.domStringBuilder();
};
init();
