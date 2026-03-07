const activeButton = (clickedBtnId) => {
  const allBtn = document.getElementById("btn-all");
  const openBtn = document.getElementById("btn-open");
  const closeBtn = document.getElementById("btn-closed");

  // reset all buttons
  allBtn.classList.remove("btn-primary");
  openBtn.classList.remove("btn-primary");
  closeBtn.classList.remove("btn-primary");

  //easy way now
  const clickedBtn = document.getElementById(clickedBtnId);
  clickedBtn.classList.remove("btn", "btn-outline");
  clickedBtn.classList.add("btn", "btn-primary");
};
