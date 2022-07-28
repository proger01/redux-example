export const INCREMENT = 'counter/incremented';
export const DECREMENT = 'counter/decremented';
export const UPDATE_DIGIT = 'counter/update_digit';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const updateDigit = (digit) => {
  return {
    type: UPDATE_DIGIT,
    payload: {
      digit: digit,
    },
  };
};
