import * as constants from '../constants/CONSTANT';
const authApi = {
    async login(email, password){
        let response = await fetch(constants.API_BASE_URL + "/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
        localStorage.setItem("token", result.authToken);
    }
    return result;
    },

    
    logout(){        
        localStorage.removeItem("token");
    },
}




export default authApi
  