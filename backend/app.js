// Replace this with your actual deployed backend URL
const BACKEND_URL = "https://web-projectbackend.onrender.com";

// Generic function to submit forms
async function submitForm(form, endpoint, successMsg) {
  const formData = {};
  
  form.querySelectorAll("[name]").forEach(input => {
    formData[input.name] = input.value.trim();
  });

  // Validation
  for (const key in formData) {
    if (!formData[key]) {
      alert(`Please fill in ${key}`);
      return;
    }
  }

  try {
    const res = await fetch(`${BACKEND_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(successMsg);
      form.reset();
    } else {
      const text = await res.text();
      console.error("Backend error:", text);
      alert("Submission failed. Try again later.");
    }
  } catch (err) {
    console.error("Connection error:", err);
    alert("Error connecting to server.");
  }
}

// Hero form
const heroForm = document.querySelector(".hero-form");
if (heroForm) {
  heroForm.addEventListener("submit", e => {
    e.preventDefault();
    submitForm(heroForm, "/consultations", 
      `Thanks ${heroForm.querySelector('[name="name"]').value}, we will contact you soon!`
    );
  });
}

// Footer subscribe form
const footerForm = document.querySelector(".footer-form");
if (footerForm) {
  footerForm.addEventListener("submit", e => {
    e.preventDefault();
    submitForm(footerForm, "/subscribe", 
      `Thanks for subscribing with ${footerForm.querySelector('[name="email"]').value}!`
    );
  });
}
