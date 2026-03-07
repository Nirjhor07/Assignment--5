//fetching all cards info here function
const allCards = (id) => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      activeButton(id);
      if (id == "btn-all") {
        displayAllCards(data.data);
        parentCardContainerLength();
      } else if (id == "btn-open") {
        // console.log("my name is open");
        const openStatusCards = data.data.filter(
          (element) => element.status === "open",
        );
        displayAllCards(openStatusCards);
        parentCardContainerLength();
      } else if (id == "btn-closed") {
        const closedStatusCards = data.data.filter(
          (element) => element.status === "closed",
        );
        displayAllCards(closedStatusCards);
        parentCardContainerLength();
      }
    }); //cause data array er vitore ase amr wantted object
};

const displayAllCards = (data) => {
  //   console.log(data);
  // bap re doira niya ashi jekhane store korbo all cards
  const cardContainer = document.getElementById("all-card-container");
  //vitorer value shob faka kore dei
  cardContainer.innerHTML = "";
  // console.log(cardContainer);

  //forEach loop chalaiya shob gula object acces korbo
  data.forEach((element) => {
    // pola banai ekta jekhane element from json api data store korbo
    const cardChildContainer = document.createElement("div");
    // set the inner html
    //  element.status === "open" ? "border-green-700" : "border-red-700"
    cardChildContainer.innerHTML = `
      <!-- Issue Card container -->
      <div  class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border-t-4 ${element.status === "open" ? "border-green-700" : "border-violet-700"}">
      <!-- cards -->
        <div class="card-body">
          <!-- Top section: Icon and Priority Badge -->
          <div class="flex justify-between items-start mb-4">
            <!-- Open Issue Icon -->
            <div
              class="w-7 h-7 rounded-full bg-success/30 flex items-center justify-center"
            >
             <img src="${element.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"} " alt="" srcset="">
            </div>
            <!-- Priority Badge -->
            <span
              class="badge badge-error badge-lg text-error ${element.priority === "high" ? "bg-error/30" : element.priority === "low" ? "bg-gray-200" : "bg-warning/30"} border-0 font-semibold"
              >${element.priority}</span
            >
          </div>

          <!-- Title -->
          <h2 class="card-title text-xl font-bold mb-2">
            ${element.title}
          </h2>

          <!-- Description -->
          <p class="text-base-content/60 mb-4">
             ${element.description}
          </p>

          <!-- Labels/Tags -->
          <div class="flex gap-2 mb-4">
            <span class="badge badge-lg bg-error/10 text-error border-0 gap-2">
              <i class="fa-solid fa-bug"></i>
              BUG
            </span>
            <span
              class="badge badge-lg bg-warning/20 text-warning border-0 gap-2"
            >
              <i class="fa-solid fa-circle-question"></i>
              HELP WANTED
            </span>
          </div>

          <!-- Footer: Issue # and Date -->
          <div
            class="flex justify-between items-center text-sm text-base-content/60 border-t pt-4"
          >
            <span>#${element.id} by <span class="font-medium">${element.author == "" ? "no author found" : element.author}</span></span>
            <span>creatted: ${new Date(element.createdAt).toLocaleDateString()}</span>
          </div>

           <div
            class="flex justify-between items-center text-sm text-base-content/60  pt-4"
          >
             <span class="font-medium">Assignee: ${element.assignee == "" ? "no assignee found" : element.assignee}</span>
            <span>updated: ${new Date(element.updatedAt).toLocaleDateString()}</span>
          </div>

        </div>
      </div>
    `;
    //apend the child to parent container
    cardContainer.appendChild(cardChildContainer);
  });
};
allCards("btn-all");
