document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    // Simulate form submission (e.g., to a backend)
    const ticketData = {
        name,
        email,
        subject,
        description
    };

    // Show response message
    document.getElementById("response-message").textContent = "Ticket submitted successfully! Thank you for reporting the issue.";

    // Optionally, reset the form
    document.getElementById("ticket-form").reset();
});
