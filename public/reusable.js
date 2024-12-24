const MSG_ElementID = "errorMessage";
const Login_MSG_ElementID = "loginErrorMessage";
const Delete_MSG_ElementID = "deleteErrorMessage";
const Job_Seeker_MSG_ElementID = "jobSeekerMessage";

async function apiRequest(url, method = "GET", data = null) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = {
      method,
      headers,
    };

    if (data) {
      // options.body = data;
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    // Check if the request was successful
    if (!response.ok) {
      console.error("API Request Error:", result);
      throw new Error(`${response.statusText}`);
    } else {
      return result;
    }
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
}

const addOrRemoveClass = (elementID, removeClasses = [], addClasses = []) => {
  const element = document.getElementById(elementID);
  if (!element) {
    console.error(`Element with ID "${elementID}" not found.`);
    return;
  }

  // Remove specified classes
  removeClasses.forEach((className) => {
    if (className) {
      element.classList.remove(className);
    }
  });

  // Add specified classes
  addClasses.forEach((className) => {
    if (className) {
      element.classList.add(className);
    }
  });
};
