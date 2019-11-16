import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'Item',
  initialState: {
    id: 1, // or some hash
    title: 'Poster',
    image: 'logo.png',
    price: 10,
    note: 'hide, this will be a tooltip',
    countIn: 12,
    add: 0, // assuming on-field item additions/inventory moves? allow negative?
    comp: 0, // assuming on-field compensation? (broken, damaged, missing/stolen)
    countOut: 5,
    finalized: false
  },
  reducers: {
    // ... was experimenting with adding +/- buttons for inputs & playing with async/loaders

    // incrementCounter: (state, action) => ({ ...state, counter: action.payload + 1 }),
    // decrementCounter: (state, action) => ({ ...state, counter: action.payload - 1 }),
    // resetCounterLaunched: state => ({ ...state, resetLoading: true }),
    // resetCounterSuccess: state => ({ ...state, counter: 0, resetLoading: false }),
    // resetCounterFailure: state => ({ ...state, resetLoading: false }),
    updateCountIn: (state, action) => ({ ...state, countIn: action.payload }),
    updateAdd: {
      reducer: (state, action) => ({ ...state, add: action.payload }),
      // prepare: value => ({ payload: value })
      // payload creator
    },
    updateComp: (state, action) => ({ ...state, comp: action.payload }),
    updateCountOut: (state, action) => ({ ...state, countOut: action.payload }),
    updatePrice: (state, action) => ({ ...state, price: action.payload }),
    updateNote: (state, action) => ({ ...state, note: action.payload }),
    updateFinalized: (state, action) => ({ ...state, finalized: true })
  }
});

//  ACTIONS
export const {
  // incrementCounter,
  // decrementCounter,
  // resetCounterLaunched,
  // resetCounterSuccess,
  // resetCounterFailure,
  updateCountIn,
  updateAdd,
  updateComp,
  updateCountOut,
  updatePrice,
  updateNote,
  updateFinalized
} = actions;

// export const resetCounter = () => async (dispatch/* , getState */) => {
//   try {
//     dispatch(resetCounterLaunched());
//     //  mock API call & delay
//     await new Promise((resolve/* , reject */) => {
//       setTimeout(resolve, 500);
//     });

//     dispatch(resetCounterSuccess());
//   } catch (error) {
//     dispatch(resetCounterFailure());
//   }
// };

export const itemReducer = reducer;
