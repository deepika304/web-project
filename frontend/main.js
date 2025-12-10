const heroForm = document.querySelector(".hero-form");

heroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: heroForm.name.value,
    email: heroForm.email.value,
    mobile: heroForm.mobile.value,
    city: heroForm.city.value
  };

  try {
    const response = await fetch("https://web-project-backend.onrender.com/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    console.log("Response status:", response.status);
    console.log("Response text:", await response.text());

    if (!response.ok) throw new Error("Server error!");

    alert("Form submitted successfully!");
    heroForm.reset();
  } catch (err) {
    console.error(err);
    alert("Failed to submit form.");
  }
});
