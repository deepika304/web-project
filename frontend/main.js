document.addEventListener("DOMContentLoaded", () => {
    // Hero form (consultation)
    const heroForm = document.querySelector(".hero-form");
    if (heroForm) {
        heroForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                name: heroForm.name.value,
                email: heroForm.email.value,
                mobile: heroForm.mobile.value,
                city: heroForm.city.value
            };

            try {
                const response = await fetch("http://https://web-projectbackend.onrender.com/consultations", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (result.success) {
                    alert("Form submitted successfully!");
                    heroForm.reset();
                } else {
                    alert(result.error || "Something went wrong");
                }
            } catch (err) {
                console.error(err);
                alert("Failed to submit form. Check console.");
            }
        });
    }

    // Footer subscription
    const subscribeForm = document.querySelector(".subscribe-form");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = subscribeForm.email.value;
            try {
                const response = await fetch("http://https://web-projectbackend.onrender.com/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email })
                });

                const result = await response.json();
                if (result.success) {
                    alert("Subscribed successfully!");
                    subscribeForm.reset();
                } else {
                    alert(result.error || "Failed to subscribe");
                }
            } catch (err) {
                console.error(err);
                alert("Failed to subscribe. Check console.");
            }
        });
    }
});
