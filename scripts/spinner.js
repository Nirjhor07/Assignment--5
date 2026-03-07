//function spinner
const spinner = (status) => {
  const spinnerContainer = document.getElementById("spinner");
  //get the parent of cards
  const card = document.getElementById('all-card-container');
  if (status === true) {
    spinnerContainer.classList.remove("hidden");
    card.classList.add('hidden')
  } else if(status===false) {
    spinnerContainer.classList.add("hidden");
    card.classList.remove('hidden')
  }
};