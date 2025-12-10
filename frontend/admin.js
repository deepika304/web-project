const API = "https://web-projectbackend.onrender.com/api/files";
const fileList = document.getElementById("fileList");


async function loadFiles() {
try {
const res = await fetch(API);
const files = await res.json();


fileList.innerHTML = "";


files.forEach(f => {
const div = document.createElement("div");
div.textContent = `${f.name} | ${f.email} | ${f.city}`;
fileList.appendChild(div);
});
} catch (err) {
fileList.innerHTML = "Failed to load files";
}
}


loadFiles();