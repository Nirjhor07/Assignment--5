//function create for dynamically add levels from card object fetched from api
const createElement = (array) => {
  const htmlelements = array.map((element) => {
    return ` <span class="badge  ${element === "bug" ? "badge-error" : element === "enhancement" ? "badge-success" : "badge-warning"} badge-lg">
    ${element}
    </span> 
        `;
  });
  return htmlelements.join("");
};
