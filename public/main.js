import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = ViewDirectorBasedOnUserAuthStatus();
};

init();
