function clearContent() {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    
    console.log("Content cleared");
}

export {clearContent}