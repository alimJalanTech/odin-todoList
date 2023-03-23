import { createHtmlElement, setId } from "./dom";
import { currentFolder } from "./folder";

const folder = document.querySelector("#task-container");

export class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.id = setId();
  }

  render() {
    const div = createHtmlElement("div", this.id, ["task"], null);

    const divTaskName = createHtmlElement("div", null, ["task-name"], null);
    const checkbox = createHtmlElement("input", null, ["checkbox"], null);
    checkbox.type = "checkbox";

    const p = createHtmlElement("p", null, null, this.name);

    const divTaskInfo = createHtmlElement("div", null, ["task-info"], null);
    const date = createHtmlElement("p", null, null, this.date);
    const badge = createHtmlElement("div", null, ["badge"], this.priority);
    const del = createHtmlElement("img", null, ["del"], null);
    del.src = "./img/del.svg";
    const edit = createHtmlElement("img", null, ["edit"], null);
    edit.src = "./img/edit.svg";
    edit.addEventListener("click", () => {
      this.edit();
    });

    divTaskName.appendChild(checkbox);
    divTaskName.appendChild(p);

    divTaskInfo.appendChild(date);
    divTaskInfo.appendChild(badge);
    divTaskInfo.appendChild(del);
    divTaskInfo.appendChild(edit);

    div.appendChild(divTaskName);
    div.appendChild(divTaskInfo);

    folder.appendChild(div);
    checkbox.addEventListener("change", () => {
      p.classList.toggle("done");
    });
    if (this.priority === "high") {
      badge.classList.add("high");
    }

    del.addEventListener("click", () => {
      this.del();
    });
  }

  del() {
    currentFolder.tasks = currentFolder.tasks.filter(
      (task) => task.id !== this.id
    );
    currentFolder.renderTasks();
  }

  edit() {
    const modal = document.getElementById("my-modal");
    modal.style.display = "flex";
    const form = document.getElementById("form-task-edit");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("task-name-edit");
      if (title.value === "") {
        alert("The task must have a name");
        return;
      }
      const date = document.getElementById("task-date-edit");
      if (date.value === "") {
        alert("Please choose a deadline");
        return;
      }
      const priority = document.getElementById("task-priority-edit");

      this.name = title.value;
      this.date = date.value;
      this.priority = priority.value;
      modal.style.display = "none";
      currentFolder.renderTasks();
    });
  }
}
