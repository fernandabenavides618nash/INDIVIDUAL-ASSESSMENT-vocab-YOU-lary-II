// REWORK
import { signOut } from '../utils/auth';
import {
  getWords, filterJsWords, filterHtmlWords, filterCssWords
} from '../api/wordData';
import { showWords } from '../pages/words';
import addWordForm from '../components/forms/addWordForm';

const navigationEvents = (user) => {
  document.querySelector('#logo').addEventListener('click', (e) => {
    console.warn(e.targetn, 'LOGO/ALL nav link clicked');
    getWords(user.uid).then(showWords);
  });

  document.querySelector('#createEntry').addEventListener('click', (e) => {
    console.warn(e.target);
    addWordForm({}, user);
  });

  document.querySelector('#allWords').addEventListener('click', (e) => {
    console.warn(e.target, 'ALL nav link clicked');
    getWords(user.uid).then(showWords);
  });

  document.querySelector('#navHtml').addEventListener('click', (e) => {
    console.warn(e.target, 'HTML nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterHtmlWords(user.uid).then(showWords);
  });

  document.querySelector('#navCss').addEventListener('click', (e) => {
    console.warn(e.target, 'CSS nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterCssWords(user.uid).then(showWords);
  });

  document.querySelector('#navJavascript').addEventListener('click', (e) => {
    console.warn(e.target, 'JS nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterJsWords(user.uid).then(showWords);
  });

  const search = (event) => {
    const lowerCase = event.target.value.toLowerCase();
    getWords(user.uid).then((data) => {
      const searchTitle = Object.values(data).filter((item) => item.title.toLowerCase().includes(lowerCase));
      return searchTitle;
    }).then(showWords);
  };
  document.querySelector('#search').addEventListener('keyup', search);

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
