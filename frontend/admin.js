// Sidebar navigation
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Show Projects Section by default
showSection('projects');

// Local frontend-only project addition
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

projectForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = projectForm.querySelector('[name="projectName"]').value.trim();
    const desc = projectForm.querySelector('[name="projectDesc"]').value.trim();
    const file = projectForm.querySelector('[name="projectFile"]').files[0];

    if (!name || !desc || !file) {
        alert("Please fill all fields");
        return;
    }

    const item = document.createElement('div');
    item.className = "project-item";
    item.textContent = `${name} - ${desc} - (${file.name})`;

    projectList.appendChild(item);
    projectForm.reset();
});
