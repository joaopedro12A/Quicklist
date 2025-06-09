const itemInput = document.getElementById("item");
const listSection = document.querySelector(".list");
const warningBox = document.querySelector(".warning");
const closeWarningBtn = warningBox.querySelector("button");

function addItem() {
  const itemValue = itemInput.value.trim();
  if (itemValue === "") return;

  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <div>
      <input type="checkbox" id="check-${itemValue}">
      <label for="check-${itemValue}">
        <span class="custom-checkbox"></span>
        ${itemValue}
      </label>
    </div>
    <button class="delete-btn">
      <img src="./assets/trash-icon.svg" alt="Deletar">
    </button>
  `;

  
  item.querySelector(".delete-btn").addEventListener("click", () => {
    item.remove();
    showWarning();
  });

  listSection.appendChild(item);
  itemInput.value = "";
}

function showWarning() {
  warningBox.classList.remove("hide-warning");
  clearTimeout(warningBox.timeout);

  warningBox.timeout = setTimeout(() => {
    warningBox.classList.add("hide-warning");
  }, 3000); 
}

closeWarningBtn.addEventListener("click", () => {
  warningBox.classList.add("hide-warning");
});
