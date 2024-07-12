import { createStore } from 'redux'

const initialState = { income: 0, expenses: 0 }

const financeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_INCOME":
        return {...state, income: state.income + action.payload}
      case "ADD_EXPENSES":
        return {...state, expenses: state.expenses + action.paylaod }
      default: 
        return state
    }
}

export default createStore(financeReducer)