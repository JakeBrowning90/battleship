 //Function to fill banner with ship placement form
function drawShipPlacer() {
    const infoBanner = document.querySelector(".gameInfoBanner");
    
    const instructionDiv = document.createElement("div");
    instructionDiv.classList.add("instructionDiv");
    instructionDiv.textContent = "Placement";

    const rowInputLabel = document.createElement("label");
    rowInputLabel.setAttribute("for", "rowInput");
    rowInputLabel.textContent = "Row:";

    const rowInput = document.createElement("select");

    const colInputLabel = document.createElement("label");
    colInputLabel.setAttribute("for", "rowInput");
    colInputLabel.textContent = "Column:";

    const colInput = document.createElement("select");

    const radioDiv = document.createElement("div");
    radioDiv.classList.add("radioDiv");
    
    const hRadioButtonLabel = document.createElement("label");
    hRadioButtonLabel.setAttribute("for", "hRadioButton");
    hRadioButtonLabel.textContent = "Horizontal:";

    const hRadioButton = document.createElement("input");
    hRadioButton.setAttribute("type", "radio");
    hRadioButton.setAttribute("name", "orientation");
    hRadioButton.setAttribute("value", "h");
    hRadioButton.setAttribute("checked", "");

    const vRadioButtonLabel = document.createElement("label");
    vRadioButtonLabel.setAttribute("for", "vRadioButton");
    vRadioButtonLabel.textContent = "Vertical:";

    const vRadioButton = document.createElement("input");
    vRadioButton.setAttribute("type", "radio");
    vRadioButton.setAttribute("name", "orientation");
    vRadioButton.setAttribute("value", "v");

    const placeShipBtn = document.createElement("button");
    placeShipBtn.classList.add("placeShipBtn");
    placeShipBtn.textContent = "Place ship";

    const errorField = document.createElement("div");
    errorField.classList.add("errorField");
    errorField.textContent = "Errors go here!";

    infoBanner.appendChild(instructionDiv);
    infoBanner.appendChild(placeShipBtn);
    infoBanner.appendChild(rowInputLabel);
    infoBanner.appendChild(rowInput);
    fillDropMenu(rowInput);
    infoBanner.appendChild(colInputLabel);
    infoBanner.appendChild(colInput);
    fillDropMenu(colInput);
    infoBanner.appendChild(radioDiv);
    radioDiv.appendChild(hRadioButtonLabel);
    radioDiv.appendChild(hRadioButton);
    radioDiv.appendChild(vRadioButtonLabel);
    radioDiv.appendChild(vRadioButton);
    infoBanner.appendChild(errorField);

    function fillDropMenu(parentSelect) {
        for (let i = 0; i < 10; i++) {
            let option = document.createElement("option");
            option.textContent = `${i}`;
            option.setAttribute("value", `${i}`);
            parentSelect.appendChild(option);
        }
    }
}

export {drawShipPlacer}