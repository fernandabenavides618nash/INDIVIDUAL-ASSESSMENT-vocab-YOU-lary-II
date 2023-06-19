import { deleteWord, getSingleWord, getWords } from '../api/wordData';
import addWordForm from '../components/forms/addWordForm';
import { showWords } from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-word-btn')) {
      addWordForm({}, user);
    }
    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj, user));
    }
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this word?')) {
        // console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
  });
};

export default domEvents;
