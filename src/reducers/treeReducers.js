import { GENERATE_RANDOM_NUMBER } from "../types";

const random =  Math.floor(Math.random() * 10 + 1);

const initialState = {
  applesOnTheTree: 50,
  randomNumber: Math.floor(Math.random() * 10 + 1),
  droppedApples: [random],
};

export const randomNum = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_RANDOM_NUMBER:
      return {
        ...state,
        randomNumber: Math.floor(Math.random() * 10 + 1),
        droppedApples: state.droppedApples !== [] && [...state.droppedApples, state.randomNumber],
        sumNumber: state.droppedApples.length > 0 && state.droppedApples.reduce((sum, number) => sum + number)
      };
    default:
      return state;
  }
};
