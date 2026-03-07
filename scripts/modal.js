const modalLoad = (id) => {
  //   console.log("im card modal");
  //   document.getElementById("my_modal_5").showModal();
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModal(data.data));
};

const displayModal = (cardId) => {
  console.log(cardId);
  // bap re dori age jekhane modal card store korum
  const modalParent = document.getElementById("my_modal_5");
  modalParent.innerHTML = "";

  // console.log(element);
  //create modal child
  const modalChild = document.createElement("div");
  modalChild.innerHTML = `
      <div id="modal-box-card" class="modal-box space-y-2.5 border-t-4 ${cardId.status==='open'? 'border-green-600': 'border-violet-700'}">
        <!-- Title -->
        <h3 id="modal-title" class="text-2xl font-bold mb-3">
          ${cardId.title}
        </h3>

        <!-- Status and Author Info -->
        <div class="flex items-center gap-2 mb-4 text-sm">
          <span
            id="modal-status-badge"
            class="badge ${cardId.status === "open" ? "badge-success" : "badge-error"}  text-white font-semibold"
          >
            ${cardId.status === "open" ? "opened" : "closed"}
          </span>
          <span class="text-base-content/60">
            Opened by
            <span id="modal-author" class="font-medium">${cardId.author}</span> •
            <span id="modal-date">${new Date(cardId.createdAt).toLocaleDateString()}</span>
          </span>
        </div>

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

        <!-- Description -->
        <p
          id="modal-description"
          class="text-base-content/70 mb-6 leading-relaxed"
        >
        ${cardId.description}
        </p>

        <!-- Assignee and Priority -->
        <div class="flex justify-between items-center mb-6 bg-base-200 px-7 py-3">
          <div>
            <p class="text-sm text-base-content/60 mb-1">Assignee:</p>
            <p id="modal-assignee" class="font-semibold">${cardId.assignee === "" ? "বল তোর কেউ(Assignee) নেই XD" : cardId.assignee}</p>
          </div>

          <div class="text-right">
            <p class="text-sm text-base-content/60 mb-1">Priority:</p>
            <span
              id="modal-priority"
              class="badge ${cardId.priority === "high" ? "badge-error" : cardId.priority === "low" ? "bg-gray-300" : "badge-warning"} badge-lg text-neutral font-semibold"
            >
             ${cardId.priority}
            </span>
          </div>
        </div>

        <!-- Modal Action -->
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    `;
  //apend to the parent class
  modalParent.appendChild(modalChild);

  document.getElementById("my_modal_5").showModal();
};
