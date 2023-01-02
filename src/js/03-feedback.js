import { throttle } from 'lodash'; 
const feedbackFormEl = document.querySelector('.feedback-form');
const userInput = {};

const fillFeedbackFormFields = () => {
  try {
    const userInfoFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (userInfoFromLS === null) {
      return;
    }

    for (const prop in userInfoFromLS) {
      feedbackFormEl.elements[prop].value = userInfoFromLS[prop];
    }
  } catch (err) {
    console.error(err);
  }
};

fillFeedbackFormFields();

const onFeedbackFormFieldChange = event => {
    const { target } = event;

    const fieldValue = target.value;
    const fieldName = target.name;

    userInput[fieldName] = fieldValue;

    try {
        localStorage.setItem('feedback-form-state', JSON.stringify(userInput));
    } catch (err) {
        console.error(err);
    }
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormFieldChange, 500));
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
