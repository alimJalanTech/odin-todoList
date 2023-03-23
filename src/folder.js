import { createHtmlElement, setId } from "./dom";

const folder = document.querySelector("#folders .card");

class Folder {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const div = createHtmlElement("div", this.id, ["folder"], null);
    const title = createHtmlElement("p", null, null, this.title);
    const del = createHtmlElement("img", null, ["del"], null);
    del.src = "./img/del.svg";

    del.addEventListener("click", () => {
      this.del();
    });

    div.appendChild(title);
    div.appendChild(del);

    folder.appendChild(div);
    div.addEventListener("click", () => {
      currentFolder = this;
      currentFolder.active = false;

      this.renderTasks();
      this.addDelButton();

      if (!div.classList.value.includes("active")) {
        div.classList.add("active");
        del.src = "./img/del.svg";
      } else return;
    });
  }

  addDelButton() {
    let foldersClass = document.querySelectorAll(".folder");
    foldersClass.forEach((f) => (f.classList.value = "folder"));
    let delButtons = document.querySelectorAll(".del");
    delButtons.forEach((button) => (button.src = "./img/del.svg"));
  }

  del() {
    foldersArray = foldersArray.filter((folder) => folder.id !== this.id);
    Folder.renderFolders();
  }

  renderTasks() {
    const tasks = document.querySelector("#task-container");
    tasks.innerHTML = ``;
    this.tasks.forEach((task) => task.render());
  }

  static renderFolders() {
    folder.innerHTML = "";
    foldersArray.forEach((folder) => folder.render());
  }
  static setCurrentFolder(folder) {
    currentFolder = folder;
  }
}

let foldersArray = [];
let currentFolder = foldersArray[0];

export { Folder, foldersArray, currentFolder };
