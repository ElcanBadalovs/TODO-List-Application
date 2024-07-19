let input = document.getElementById("input") as HTMLInputElement | null;
let form = document.getElementById("form") as HTMLFormElement | null;
let list = document.getElementById("list") as HTMLUListElement | null;

interface ToDoTask {
  id: string;
  title: string;
  complete: boolean;
  createdAt: string;
}

const AddNewTask = (Task: ToDoTask) => {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let checkbox = document.createElement("input");
  let container = document.createElement("div");
  let div = document.createElement("div");
  let EditBtn = document.createElement("button");
  let DeleteBtn = document.createElement("button");

  // Li teg info
  li.classList.add("flex", "justify-between", "items-center", "gap-2");
  li.id = Task?.id;

  // Completed task
  checkbox.type = "checkbox"
  checkbox.classList.add("cursor-pointer", "w-5", "h-5", "accent-sky-600")
  let complete: boolean = Task.complete
  checkbox.addEventListener("click", () => {
    if(!complete){
        input.classList.add("line-through")
        complete = true
    }else{
        input.classList.remove("line-through")
        complete = false
    }
  })

  // Task Text
  input.value = Task?.title;
  input.disabled = true;
  input.classList.add(
    "w-full",
    "bg-white",
    "rounded-lg",
    "outline-0",
    "px-2",
    "py-1",
    "font-medium"
  );

  // Task Div
  div.classList.add("w-full","flex", "items-center",  "gap-2")
  div.appendChild(checkbox)
  div.appendChild(input)

  // Edit Btn
  EditBtn.textContent = "Edit";
  EditBtn.classList.add(
    "px-3",
    "py-1",
    "mr-2",
    "text-white",
    "bg-sky-600",
    "rounded-lg"
  );
  let save: boolean = false;
  EditBtn.addEventListener("click", () => {
    if (!save) {
      input.classList.add("border-2", "border-sky-600");
      input.disabled = false;
      EditBtn.textContent = "Save";
      input.classList.remove("line-through")
      save = true;
    } else {
      input.classList.remove("border-2", "border-sky-600");
      input.disabled = true;
      EditBtn.textContent = "Edit";
      input.classList.add("line-through")
      save = false;
      if(complete){
        input.classList.add("line-through")
      }else{
        input.classList.remove("line-through")
      }
    }
  });

  // Delete Btn
  DeleteBtn.textContent = "Delete";
  DeleteBtn.classList.add(
    "px-3",
    "py-1",
    "text-white",
    "bg-sky-600",
    "rounded-lg"
  );
  DeleteBtn.addEventListener("click", () => {
    list?.removeChild(li);
  });

  // Add btns to container
  container.classList.add("flex");
  container?.appendChild(EditBtn);
  container?.appendChild(DeleteBtn);

  li?.appendChild(div);
  li?.appendChild(container);

  list?.appendChild(li);
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const Task: ToDoTask = {
    id: self.crypto.randomUUID(),
    title: input?.value,
    complete: false,
    createdAt: new Date().toString(),
  };

  AddNewTask(Task);
  input.value = "";
});
