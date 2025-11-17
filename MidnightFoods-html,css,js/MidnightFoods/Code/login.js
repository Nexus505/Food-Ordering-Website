document.addEventListener("DOMContentLoaded", function() {
    const continueButton = document.getElementById("continue-btn");
    const emailGroup = document.getElementById("email-group");
    const passwordGroup = document.getElementById("password-group");
  
    continueButton.addEventListener("click", function(event) {
        const email = document.getElementById("email").value.trim();
      
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
  
        
        emailGroup.classList.add("hidden");
        passwordGroup.classList.remove("hidden");
        continueButton.textContent = "Sign In";
        continueButton.type = "button"; 
        continueButton.removeEventListener("click", arguments.callee);
        continueButton.addEventListener("click", validatePassword);
    });
  
    function validatePassword(event) {
        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("password-error");
  
        
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
        if (!passwordRegex.test(password)) {
            passwordError.textContent = "Password must be at least 8 characters long and include letters, numbers, and special characters.";
            passwordError.style.display = "block";
            event.preventDefault(); 
        } else {
            passwordError.style.display = "none"; 
            alert("Form submitted successfully!");
        }
    }
  });