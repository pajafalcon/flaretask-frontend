export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const INVALIDATE_QUESTIONS = "INVALIDATE_QUESTIONS";

//sync actions

export function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  }
}

export function receiveQuestions( json ) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: json,
    receivedAt: Date.now()
  }
}

export function invalidateQuestions() {
  return {
    type: INVALIDATE_QUESTIONS
  }
}

// async actions

export function fetchQuestions() {
  return dispatch => {
    dispatch( requestQuestions() );
    return fetch( 'http://localhost:8090/api/v1/questions' )
      .then( response => response.json(), error => console.log( "An error occured", error ) )
      .then( response => dispatch( receiveQuestions( response ) ) )
  }
}
