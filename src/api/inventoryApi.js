import * as constants from '../constants/CONSTANT';

const inventoryApi = {

  //************************ Contacts ***********************************//
  async fetchContacts() {
    const token = localStorage.getItem("token");
    let response = await fetch(constants.API_BASE_URL + "/api/contacts", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }

    });
    const result = await response.json();
    if (result.length > 0) {
      return result;
    }
    return null;

  },

  async saveContact(contact) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/contacts/" + contact.id,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(contact),
      }
    );

    return await response.json();

  },

  async deleteContact(id) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/contacts/" + id,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        }
      }
    );

    return await response.json();

  },

  //************************ Lead ***********************************//
  
  async fetchLeads() {
    const token = localStorage.getItem("token");
    let response = await fetch(constants.API_BASE_URL + "/api/leads", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }

    });
    const result = await response.json();
    if (result.length > 0) {
      return result;
    }
    return null;

  },

  async createLead(lead) {
    const token = localStorage.getItem("token");
    let response = await fetch(constants.API_BASE_URL + "/api/leads", 
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(lead),

    });
    
    return await response.json();

  },

  async saveLead(lead) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/leads/" + lead.id,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(lead),
      }
    );

    return await response.json();

  },

  async deleteLead(id) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/leads/" + id,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        }
      }
    );

    return await response.json();

  },

   //************************ Task ***********************************//

   async fetchTasks(pid) {
    const token = localStorage.getItem("token");
    ///"+pid+"/*
    let response = await fetch( constants.API_BASE_URL + "/api/tasks/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }

    });
    const result = await response.json();
    if (result.length > 0) {
      return result;
    }
    return null;

  },

  async createTask(task) {
    const token = localStorage.getItem("token");
    let response = await fetch( constants.API_BASE_URL + "/api/tasks", 
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(task),

    });
    
    return await response.json();

  },

  async saveTasks(task) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/tasks/" + task.id,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(task),
      }
    );

    return await response.json();

  },

  async deleteTask(id) {
    const token = localStorage.getItem("token");
    let response = await fetch(
      constants.API_BASE_URL + "/api/tasks/" + id,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        }
      }
    );

    return await response.json();

  },

  //************************ files ***********************************//

  async createfiles(files) {
    console.log("creat",files);
    const token = localStorage.getItem("token");
    let response = await fetch(constants.API_BASE_URL +"/api/files", 
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(files),

    });
    
    return await response.json();

  }
}



export default inventoryApi
