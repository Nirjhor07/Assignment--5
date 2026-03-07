const searchItems = document.getElementById("issue-search-id");
searchItems.addEventListener("keyup", (event) => {
  //   if (event.key === "Enter") {
  //     // console.log(searchItems.value);
  //     // get the document
  //     searchText(searchItems.value);
  //   }
  searchText(searchItems.value);
});

const searchText = (searchInput) => {
 
  //   console.log(searchInput);
  //dynamic url made
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let value = data.data;
      if (value.length < 1) {
         spinner(true);
        alert("দুখিত!! কোনো ডাটা পাওয়া যায়নি।");
        parentCardContainerLength();
      } else {
        displayAllCards(value);
        parentCardContainerLength();
        spinner(false)
      }
    });
};
