import client from '../utils/client';
// API CALLS FOR WORDS
// PROMISES GO ON THIS PAGE

const endpoint = client.databaseURL;
// const endpoint = 'https://vocab-you-lary-c91e1-default-rtdb.firebaseio.com/';

// CREATE WORD
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET/READ WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// UPDATE WORD
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'applicaiton/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

// DELETE WORD
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER HTML WORDS
const filterHtmlWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const html = Object.values(data);
        // const html can be ommitted and simply combined into "filteredWords" function below to save line space"
        // example instead of using an if statement:
        // const filteredWords = Object.values(data).filter((obj) => obj.vocabLanguage === 'HTML');
        // resolve(filteredWords);
        // })
        // .catch(reject);
        const filteredWords = html.filter((item) => item.language === 'HTML');
        resolve(filteredWords);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER CSS WORDS
const filterCssWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const css = Object.values(data);
        // const css can be ommitted and simply combined into "filteredWords" function below to save line space"
        // example instead of using an if statement:
        // const filteredWords = Object.values(data).filter((obj) => obj.vocabLanguage === 'CSS');
        // resolve(filteredWords);
        // })
        // .catch(reject);
        const filteredWords = css.filter((item) => item.language === 'CSS');
        resolve(filteredWords);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER JAVASCRIPT WORDS
const filterJsWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const javascript = Object.values(data);
        // const javascript can be ommitted and simply combined into "filteredWords" function below to save line space"
        // example instead of using an if statement:
        // const filteredWords = Object.values(data).filter((obj) => obj.vocabLanguage === 'Javascript');
        // resolve(filteredWords);
        // })
        // .catch(reject);
        const filteredWords = javascript.filter((item) => item.language === 'Javascript');
        resolve(filteredWords);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  createWord,
  getWords,
  updateWord,
  deleteWord,
  getSingleWord,
  filterJsWords,
  filterHtmlWords,
  filterCssWords
};

// NOTES**
// Altermate single filter function combining all filters into one:
// const filteredWords = (uid, lang) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const filterLang = Object.values(data).filter((item) => item.language === lang);
//       resolve(filterLang);
//     })
//     .catch(reject);
// });
