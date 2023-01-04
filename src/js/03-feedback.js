import { throttle } from 'lodash';
const feedbackFormEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const userInput = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (userInput) {
  messageEl.value = userInput.message ? userInput.message : '';
  emailEl.value = userInput.email ? userInput.email : '';
}

function onFeedbackFormFieldChange() {
  userInput.email = emailEl.value;
  userInput.message = messageEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userInput));
}

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  feedbackFormEl.reset();
  console.log(userInput);
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener(
  'input',
  throttle(onFeedbackFormFieldChange, 500)
);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
