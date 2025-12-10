const API_BASE = "https://web-projectbackend.onrender.com/api";


// HERO FORM
const heroForm = document.getElementById("heroForm");
heroForm.addEventListener("submit", async (e) => {
e.preventDefault();


const formData = {
name: heroForm.name.value,
email: heroForm.email.value,
mobile: heroForm.mobile.value,
city: heroForm.city.value,
};


try {
const res = await fetch(`${API_BASE}/consultations`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});


const data = await res.json();
alert(data.message || "Submitted");
} catch (err) {
alert("Error submitting form");
console.error(err);
}
});


// SUBSCRIBE FORM
const subscribeForm = document.getElementById("subscribeForm");
subscribeForm.addEventListener("submit", async (e) => {
e.preventDefault();


const formData = { email: subscribeForm.email.value };


try {
const res = await fetch(`${API_BASE}/subscribe`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});


const data = await res.json();
alert(data.message || "Subscribed");
} catch (err) {
alert("Error subscribing");
console.error(err);
}
});