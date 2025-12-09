// Sidebar navigation
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Show Projects Section by default
showSection('projects');

// Example: Add Project (local for now)
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = projectForm[0].value;
    const desc = projectForm[1].value;
    const li = document.createElement('div');
    li.textContent = `${name} - ${desc}`;
    projectList.appendChild(li);
    projectForm.reset();
});
