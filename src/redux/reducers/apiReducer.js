const initialState = {
    accounts: []
} 

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ACCOUNTS":
        return {
            ...state,
            accounts : action.payload,
        };

     
        
      default:
        return state;
    }
  };
  export default apiReducer;