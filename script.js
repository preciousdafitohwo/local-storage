console.log("local storage");
// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const colour = formData.get("colour");

//   localStorage.setItem("colour", colour);
// });

// const colour = localStorage.getItem("colour");

// if (colour) {
//   const input = document.querySelector("input");
//   input.value = colour;
// };








const form = document.querySelector("form");

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  // preferences is now an object, it might contain other preferences...
  const preferences = {
    colour,
  };

  // so when we save it, we stringify it
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);
// then we parse the string back into an object when we retrieve it
const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
};








function loadPreferences() {
    // load the prefs
    const preferences = JSON.parse(localStorage.getItem("preferences"));
  
    // if we have some prefs
    if (preferences) {
      // set the form value
      const input = document.querySelector("input");
      input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's true, otherwise it will use the value on the right as a default value if colour isn't saved
  
      // set the body color to the user colour preference (intentional US / UK spelling difference...)
      const body = document.querySelector("body");
      body.style.color = preferences.colour || "green";
    }
  };






  function clearPreferences(event) {
    event.preventDefault();
  
    localStorage.removeItem("preferences");
  };
  const defaults = {
    colour: "#000000",
  };
  
  document.body.style.color = preferences.colour || defaults.colour;





  // Function to handle changes in local storage
function handleLocalStorageChange(event) {
    if (event.key === "favouriteColour") {
      // Do something when the specific local storage key changes
      const newValue = event.newValue;
      console.log(`Local storage favouriteColour changed to: ${newValue}`);
    }
  }
  
  // Add an event listener to listen for changes in local storage
  window.addEventListener("storage", handleLocalStorageChange);