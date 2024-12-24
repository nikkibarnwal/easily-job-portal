// addOrRemoveClass, apiRequest, MSG_ElementID are coming from public/require.js

const handlePostRegister = async (e) => {
  const msgElement = document.getElementById(MSG_ElementID);

  //   msgElement.classList.toggle("d-none");
  // JavaScript to handle form submission and retrieve data
  const form = document.getElementById("registerform");

  // Create a FormData object to get form values
  const formData = new FormData(form);

  // Retrieve values using FormData methods
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  apiRequest("/register", "POST", data)
    .then((responseData) => {
      msgElement.innerHTML = responseData.message;
      if (responseData.success) {
        addOrRemoveClass(
          MSG_ElementID,
          ["alert-danger", "d-none"],
          ["alert-success"]
        );
        setTimeout(() => {
          handleLoginModal();
        }, 2000);
      } else {
        console.log("in else");
        addOrRemoveClass(
          MSG_ElementID,
          ["alert-success", "d-none"],
          ["alert-danger"]
        );
      }
    })
    .catch((error) => {
      msgElement.innerHTML = error;
      addOrRemoveClass(
        MSG_ElementID,
        ["alert-success", "d-none"],
        ["alert-danger"]
      );
    });
};

const handleLoginModal = () => {
  const registerModal = document.getElementById("registerModal");
  const registerModalInstance = bootstrap.Modal.getInstance(registerModal); // Bootstrap Modal instance
  registerModalInstance.hide(); // hide the modal

  const loginModal = document.getElementById("loginModal");
  const loginModalInstance = new bootstrap.Modal(loginModal); // Bootstrap Modal instance
  loginModalInstance.show(); // Show the modal
};

/**Handle login click */

const handlePostLogin = () => {
  const msgElement = document.getElementById(Login_MSG_ElementID);

  //   msgElement.classList.toggle("d-none");
  // JavaScript to handle form submission and retrieve data
  const form = document.getElementById("loginForm");

  // Create a FormData object to get form values
  const formData = new FormData(form);

  // Retrieve values using FormData methods
  const data = {
    email: formData.get("loginemail"),
    password: formData.get("loginpassword"),
  };
  //   call login API
  apiRequest("/login", "POST", data)
    .then((responseData) => {
      msgElement.innerHTML = responseData.message;
      console.log("error hai bhai", responseData.message);
      if (responseData.success) {
        window.location = "/jobs";
      } else {
        addOrRemoveClass(Login_MSG_ElementID, ["d-none"], ["alert-danger"]);
      }
    })
    .catch((error) => {
      if (error) {
        msgElement.innerHTML = error;
      }
      addOrRemoveClass(Login_MSG_ElementID, ["d-none"], ["alert-danger"]);
    });
};
const appendJobId = (jobId) => {
  let link = document.getElementById("jobSeekerForm");
  link.setAttribute("action", `/jobs/${jobId}/applicants`);
};

const showDeleteModal = (jobId) => {
  const confirmDeleteButton = document.getElementById("confirmDelete");
  confirmDeleteButton.setAttribute("data-job-id", jobId); // Attach the item ID to the button
  const deleteModal = new bootstrap.Modal(
    document.getElementById("deleteConfirmationModal")
  );
  deleteModal.show();
};

const deleteJob = () => {
  const msgElement = document.getElementById(Delete_MSG_ElementID);
  const confirmDeleteButton = document.getElementById("confirmDelete");
  const jobId = confirmDeleteButton.getAttribute("data-job-id"); // Attach the item ID to the button
  console.log(jobId);
  apiRequest(`/jobs/${jobId}/delete`, "POST", { id: jobId })
    .then((responseData) => {
      msgElement.innerHTML = responseData.message;
      if (responseData.success) {
        window.location = "/jobs";
      } else {
        addOrRemoveClass(Delete_MSG_ElementID, ["d-none"], ["alert-danger"]);
      }
    })
    .catch((error) => {
      msgElement.innerHTML = error;
      addOrRemoveClass(Delete_MSG_ElementID, ["d-none"], ["alert-danger"]);
    });
};
