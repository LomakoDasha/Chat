import { ADD_MESSAGES } from '../constants';

const MESSAGES = {
  messages: [],
};

const messages = (state = MESSAGES, { newMessages, type }) => {
  switch (type) {
    case ADD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...newMessages],
      };
    default:
      return state;
  }
};

export default messages;