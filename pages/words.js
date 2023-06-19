import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#word-bank', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="word-container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">${item.title}</h2>
        <hr>
        <h4 class="card-subtitle mb-2 text-muted"><i>${item.language}</i></h4>
        <hr>
        <h7 class="card-subtitle mb-2 text-muted">${item.definition}</h7>
        <hr>
        <div class="btn btn-info" id="edit-word-btn--${item.firebaseKey}">Edit</div>
        <div class="btn btn-danger" id="delete-word-btn--${item.firebaseKey}">Delete</div>
      </div>
    </div>
    </div>`;
  });
  renderToDOM('#word-bank', domString);
};

export { showWords, emptyWords };
