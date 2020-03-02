import { INVALIDATE_QUESTIONS, RECEIVE_QUESTIONS, REQUEST_QUESTIONS } from '../actions/Actions'
import { combineReducers } from 'redux'

function questions( state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action ) {
  switch( action.type ) {
    case REQUEST_QUESTIONS:
      return Object.assign( {}, state, {
        isFetching: true,
        didInvalidate: false
      } );
    case INVALIDATE_QUESTIONS:
      return Object.assign( {}, state, { didInvalidate: true } );
    case RECEIVE_QUESTIONS:
      return Object.assign( {}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.questions,
        lastUpdate: action.receivedAt
      } )
    default:
      return state
  }
}

const rootReducer = combineReducers( {
  questions
} )

export default rootReducer;