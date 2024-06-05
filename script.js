document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get form values
    const name = event.target.name.value;
    const rating = event.target.rating.value;
    const comments = event.target.comments.value;

    // Validate that all fields are filled out
    if (!name || !rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    // Append the submitted feedback to the display area
    const displayFeedback = document.getElementById('displayFeedback');
    const feedbackEntry = document.createElement('div');
    feedbackEntry.innerHTML = `
        <h3>Feedback Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;
    displayFeedback.appendChild(feedbackEntry);

    // Clear the form
    event.target.reset();
});
