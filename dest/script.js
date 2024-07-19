"use strict";
let input = document.getElementById("input");
let form = document.getElementById("form");
let list = document.getElementById("list");
const AddNewTask = (Task) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    let checkbox = document.createElement("input");
    let container = document.createElement("div");
    let div = document.createElement("div");
    let EditBtn = document.createElement("button");
    let DeleteBtn = document.createElement("button");
    // Li teg info
    li.classList.add("flex", "justify-between", "items-center", "gap-2");
    li.id = Task === null || Task === void 0 ? void 0 : Task.id;
    // Completed task
    checkbox.type = "checkbox";
    checkbox.classList.add("cursor-pointer", "w-5", "h-5", "accent-sky-600");
    let complete = Task.complete;
    checkbox.addEventListener("click", () => {
        if (!complete) {
            input.classList.add("line-through");
            complete = true;
        }
        else {
            input.classList.remove("line-through");
            complete = false;
        }
    });
    // Task Text
    input.value = Task === null || Task === void 0 ? void 0 : Task.title;
    input.disabled = true;
    input.classList.add("w-full", "bg-white", "rounded-lg", "outline-0", "px-2", "py-1", "font-medium");
    // Task Div
    div.classList.add("w-full", "flex", "items-center", "gap-2");
    div.appendChild(checkbox);
    div.appendChild(input);
    // Edit Btn
    EditBtn.textContent = "Edit";
    EditBtn.classList.add("px-3", "py-1", "mr-2", "text-white", "bg-sky-600", "rounded-lg");
    let save = false;
    EditBtn.addEventListener("click", () => {
        if (!save) {
            input.classList.add("border-2", "border-sky-600");
            input.disabled = false;
            EditBtn.textContent = "Save";
            input.classList.remove("line-through");
            save = true;
        }
        else {
            input.classList.remove("border-2", "border-sky-600");
            input.disabled = true;
            EditBtn.textContent = "Edit";
            input.classList.add("line-through");
            save = false;
            if (complete) {
                input.classList.add("line-through");
            }
            else {
                input.classList.remove("line-through");
            }
        }
    });
    // Delete Btn
    DeleteBtn.textContent = "Delete";
    DeleteBtn.classList.add("px-3", "py-1", "text-white", "bg-sky-600", "rounded-lg");
    DeleteBtn.addEventListener("click", () => {
        list === null || list === void 0 ? void 0 : list.removeChild(li);
    });
    // Add btns to container
    container.classList.add("flex");
    container === null || container === void 0 ? void 0 : container.appendChild(EditBtn);
    container === null || container === void 0 ? void 0 : container.appendChild(DeleteBtn);
    li === null || li === void 0 ? void 0 : li.appendChild(div);
    li === null || li === void 0 ? void 0 : li.appendChild(container);
    list === null || list === void 0 ? void 0 : list.appendChild(li);
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const Task = {
        id: self.crypto.randomUUID(),
        title: input === null || input === void 0 ? void 0 : input.value,
        complete: false,
        createdAt: new Date().toString(),
    };
    AddNewTask(Task);
    input.value = "";
});
