export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";

function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  }
}

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

function reveiveQuestions() {
  return {
    type: RECEIVE_QUESTIONS,
    questions: json.data.children.map(child.data)
  }
}