
  async function submitForm(form, url, successMsg) {
    const formData = {};
    // Get all inputs with a name attribute
    form.querySelectorAll("[name]").forEach(input => {
      formData[input.name] = input.value.trim();
    });

    // Simple validation
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(successMsg);
        form.reset();
      } else {
        alert("Submission failed. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server.");
    }
  }

  // Hero form submission
  const heroForm = document.querySelector(".hero-form");
  if (heroForm) {
    heroForm.addEventListener("submit", e => { console.log("HERO FORM SUBMITTED"); 
      e.preventDefault();
      submitForm(heroForm, "https://web-projectbackend.onrender.com/consultations", 
        `Thanks ${heroForm.querySelector('[name="name"]').value}, we will contact you soon!`
      );
    });
  }

  // Footer subscribe form
  const footerForm = document.querySelector(".footer-form");

  if (footerForm) {
    footerForm.addEventListener("submit", e => {
      e.preventDefault(); 
      submitForm(
        footerForm, "https://web-projectbackend.onrender.com/subscribe", 
        `Thanks for subscribing with ${footerForm.querySelector('[name="email"]').value}!`
      );
    });
  }

