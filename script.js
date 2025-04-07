const counterElement = document.getElementById("counter");
    const button = document.getElementById("incrementBtn");

    button.addEventListener("click", () => {
      const currentValue = parseInt(counterElement.innerText);
      alert(currentValue); // Show un-incremented value
      counterElement.innerText = currentValue + 1; // Increment counter
    });