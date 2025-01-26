document
  .getElementById("logisticsForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for your submission! We will contact you soon.");
          form.reset(); // Clear the form fields
        } else {
          alert(
            "Oops! There was a problem with your submission. Please try again."
          );
        }
      })
      .catch(() => {
        alert(
          "There was an error. Please check your internet connection and try again."
        );
      });
  });
