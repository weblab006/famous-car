
// Clock 

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();




// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Show Loader
  document.getElementById("loading").style.display = "block";
 
  setTimeout(calculateResults, 2000);
 
  e.preventDefault();
});
 
// Calculate Results
function calculateResults() {
 
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
 
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
 
  // Computed Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
 
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
 
    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check number inputs");
  }
}
 
// Show Error
function showError(error) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Hide Loader
  document.getElementById("loading").style.display = "none";
 
  // Create a div
  const errorDiv = document.createElement("div");
 
  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
 
  // Add class
  errorDiv.className = "alert alert-danger";
 
  // Create text node and append div
  errorDiv.appendChild(document.createTextNode(error));
 
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
 
  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);
 
  // Clear Error
  function clearError() {
    document.querySelector(".alert").remove();
  }
}


var typed = new Typed(".auto-type", {
	strings: ["coding, sleeping", "Eating"],
	typespeed: 150,
	backspeed: 150,
	loap: true,
	
})