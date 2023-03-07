function drawStartScreen() {
    const content = document.querySelector("#content");

    const startScreenBase = document.createElement("form");
    startScreenBase.classList.add("startScreenBase");

    // Title portion
    const startScreenTitle = document.createElement("h1");
    startScreenTitle.classList.add("startScreenTitle");
    startScreenTitle.textContent = "Battleship";

    // Label for Player 1 name Input
    const player1NameInputLabel = document.createElement("label");
    player1NameInputLabel.setAttribute("for", "player1NameInput");
    player1NameInputLabel.textContent = "Player 1 name:";

    // Player 1 name Input
    const player1NameInput = document.createElement("input");
    player1NameInput.setAttribute("required", "");
    player1NameInput.setAttribute("id", "player1NameInput");
    player1NameInput.setAttribute("name", "player1NameInput");

    // Label for Player 1 auto-place checkbox
    const player1AutoPlaceLabel = document.createElement("label");
    player1AutoPlaceLabel.setAttribute("for", "player1AutoPlace");
    player1AutoPlaceLabel.textContent = "Auto-place ships:";

    // Player 1 auto-place checkbox
    const player1AutoPlaceCheckbox = document.createElement("input");
    player1AutoPlaceCheckbox.setAttribute("type", "checkbox");
    player1AutoPlaceCheckbox.setAttribute("id", "player1AutoPlaceCheckbox");
    player1AutoPlaceCheckbox.setAttribute("name", "player1AutoPlaceCheckbox");

    // Label for Player 1 AI checkbox
    const player1AILabel = document.createElement("label");
    player1AILabel.setAttribute("for", "player1AICheckbox");
    player1AILabel.textContent = "AI player:";

    // Player 1 AI checkbox
    const player1AICheckbox = document.createElement("input");
    player1AICheckbox.setAttribute("type", "checkbox");
    player1AICheckbox.setAttribute("id", "player1AICheckbox");
    player1AICheckbox.setAttribute("name", "player1AICheckbox");
    player1AICheckbox.disabled = true;

    // Label for Player 2 name Input
    const player2NameInputLabel = document.createElement("label");
    player2NameInputLabel.setAttribute("for", "player2NameInputLabel");
    player2NameInputLabel.textContent = "Player 2 name:";

    // Player 2 name Input
    const player2NameInput = document.createElement("input");
    player2NameInput.setAttribute("required", "");
    player2NameInput.setAttribute("id", "player2NameInput");
    player2NameInput.setAttribute("name", "player2NameInput");

    // Label for Player 2 AI checkbox
    const player2AILabel = document.createElement("label");
    player2AILabel.setAttribute("for", "player2Checkbox");
    player2AILabel.textContent = "AI player:";

    // Player 2 AI checkbox
    const player2AICheckbox = document.createElement("input");
    player2AICheckbox.setAttribute("type", "checkbox");
    player2AICheckbox.setAttribute("id", "player2AICheckbox");
    player2AICheckbox.setAttribute("name", "player2AICheckbox");

    // Label for Player 2 auto-place checkbox
    const player2AutoPlaceLabel = document.createElement("label");
    player2AutoPlaceLabel.setAttribute("for", "player2AutoPlace");
    player2AutoPlaceLabel.textContent = "Auto-place ships:";

    // Player 2 auto-place checkbox
    const player2AutoPlaceCheckbox = document.createElement("input");
    player2AutoPlaceCheckbox.setAttribute("type", "checkbox");
    player2AutoPlaceCheckbox.setAttribute("id", "player2AutoPlaceCheckbox");
    player2AutoPlaceCheckbox.setAttribute("name", "player2AutoPlaceCheckbox");

    const startGameBtn = document.createElement('input');
    startGameBtn.setAttribute("type", "submit");
    startGameBtn.setAttribute("id", "startGameBtn");
    startGameBtn.setAttribute("value", "Start Game");

    // Append form elements
    content.appendChild(startScreenBase);

    startScreenBase.appendChild(startScreenTitle);

    startScreenBase.appendChild(player1NameInputLabel);
    startScreenBase.appendChild(player1AILabel);
    startScreenBase.appendChild(player1AutoPlaceLabel);
    startScreenBase.appendChild(player1NameInput);
    startScreenBase.appendChild(player1AICheckbox);
    startScreenBase.appendChild(player1AutoPlaceCheckbox);

    startScreenBase.appendChild(player2NameInputLabel);
    startScreenBase.appendChild(player2AILabel);
    startScreenBase.appendChild(player2AutoPlaceLabel);
    startScreenBase.appendChild(player2NameInput);
    startScreenBase.appendChild(player2AICheckbox);
    startScreenBase.appendChild(player2AutoPlaceCheckbox);

    startScreenBase.appendChild(startGameBtn);
}

export {drawStartScreen}