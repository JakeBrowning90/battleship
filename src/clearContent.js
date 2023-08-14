function clearContent() {
    const main = document.querySelector("main");

    while (main.firstChild) {
      main.removeChild(main.lastChild);
      }
}

export {clearContent}