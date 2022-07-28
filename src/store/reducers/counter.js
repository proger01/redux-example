import { DECREMENT, INCREMENT, UPDATE_DIGIT } from '../actions/counter';

const initialState = {
	value: 0,
	someDigit: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
				...state,
				value: state.value + 1,
			};
    case DECREMENT:
      return {
				...state,
				value: state.value - 1,
			};
		case UPDATE_DIGIT:
			return {
				...state,
				someDigit: action.payload.digit,
				// value: state.value - 1,
			}
    default:
      return state;
  }
}
