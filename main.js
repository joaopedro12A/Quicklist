const itemInput = document.getElementById("item");
const listSection = document.querySelector(".list");
const warningBox = document.querySelector(".warning");
const closeWarningBtn = warningBox.querySelector("button");

// Gera ID seguro para HTML (sem espaços ou acentos)
function slugify(text) {
  return text.toLowerCase()
             .normalize("NFD")
             .replace(/[\u0300-\u036f]/g, "") 
             .replace(/[^a-z0-9]+/g, "-")     
             .replace(/(^-|-$)+/g, "");       
}

function addItem() {
  const itemValue = itemInput.value.trim();
  if (itemValue === "") return;

  const safeId = slugify(itemValue);

  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <div>
      <input type="checkbox" id="check-${safeId}">
      <label for="check-${safeId}">
        <span class="custom-checkbox"></span>
        ${itemValue}
      </label>
    </div>
    <button class="delete-btn" aria-label="Remover item">
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
