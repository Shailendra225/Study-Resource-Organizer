const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let resources = JSON.parse(localStorage.getItem("resources")) || [];

// Display Resources
function showResources() {
  list.innerHTML = "";
  resources.forEach((res, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${res.title}</strong><br>
      <a href="${res.link}" target="_blank">Open</a><br>
      <button onclick="deleteResource(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Add Resource
addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const link = document.getElementById("link").value;

  if (title === "" || link === "") {
    alert("Please fill all fields");
    return;
  }

  resources.push({ title, link });
  localStorage.setItem("resources", JSON.stringify(resources));

  showResources();

  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
});

// Delete Resource
function deleteResource(index) {
  resources.splice(index, 1);
  localStorage.setItem("resources", JSON.stringify(resources));
  showResources();
}

// Initial Load
showResources();
