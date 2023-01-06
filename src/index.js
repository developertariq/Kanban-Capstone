import _ from 'lodash';
import './style.css';
import { add, loadList } from './data.js';

const gameId = 'S58ZtGSMOy7mSGqc3Q6H';
const myList = document.getElementById('leaderboard');
const form = document.getElementById('entry-form');
const btnRefresh = document.getElementById('btnRefresh');

const clearForm = () => {
  form.elements.name.value = '';
  form.elements.score.value = '';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const users = {};
  users.user = form.elements.name.value;
  users.score = form.elements.score.value;
  add(gameId, users, myList);
  clearForm();
});

btnRefresh.addEventListener('click', () => {
  myList.innerHTML = '';
  loadList(gameId, myList);
});

window.addEventListener('load', () => {
  loadList(gameId, myList);
});
