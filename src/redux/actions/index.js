export const setData = (data) => (dispatch) => {
    
      //const  data = ['Aslam', 'Bari'];
      data = [...data];
      dispatch({ type: "SET_DATA", payload: data });

  };

  export const fetchAccounts = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    let response = await fetch("http://localhost:3003/api/contacts",{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'auth-token' : token
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        
    });
    const result = await response.json();
    if(result.length > 0){
        //localStorage.setItem("token", result.authToken);
        //navigate("/");
        dispatch({ type: "GET_ACCOUNTS", payload: result });
    }
    //dispatch({ type: "SET_DATA", payload: data });

};
  

  
  
  