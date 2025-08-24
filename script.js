const scriptURL = "https://script.google.com/macros/s/AKfycbwCmhBv16wIF3UPF8GCZ1VVS0W_ubKtWYirIeVUwyh1OxAIq8_ahENb1kNLFGyS4yBC0Q/exec"; 

document.getElementById("sheetForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("status");

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    challenge: form.challenge.value.trim()
  };

  status.textContent = "Submitting...";

  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const response = await res.json();

    if (response.result === "success") {
      status.textContent = "Submitted successfully ✅";
      form.reset();
    } else {
      status.textContent = "Error: " + response.error;
    }
  } catch (err) {
    status.textContent = "Request failed: " + err.message;
  }
});


