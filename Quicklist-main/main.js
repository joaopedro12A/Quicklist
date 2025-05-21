const items = []

function addItem() {
    const itemName = document.querySelector("item").ariaValueMax

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("item").value = ""

    showItemsList()
}

function showItemsList() { 
     const sectionList = document.querySelector(".list")

     sectionList.innerHTML = ""

     items.sort((itemA, itemB)) => Number(itemA.checked) - number (itemB.checked)

     items.map((item, index) => {
        sectionList.innerHTML += `
         <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox">
                       <img src="./assets/checked.svg" alt="checkend"> 
                    </div>
                    <label for="item-2">Café</label>
                </div>
                <button>
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
            <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-3">
                    <div class="custom-checkbox">
                       <img src="./assets/checked.svg" alt="checkend"> 
                    </div>
                    <label for="item-${index}">${item.name}</label>
                </div>
                <button>
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `
     })
}

function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItemsList()
}