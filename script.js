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

    const feedbackTitle = document.createElement('h3');
    feedbackTitle.textContent = 'Feedback Submitted';

    const feedbackName = document.createElement('p');
    feedbackName.innerHTML = `<strong>Name:</strong> ${name}`;

    const feedbackRating = document.createElement('p');
    feedbackRating.innerHTML = `<strong>Rating:</strong> ${rating}`;

    const feedbackComments = document.createElement('p');
    feedbackComments.innerHTML = `<strong>Comments:</strong> ${comments}`;

    feedbackEntry.appendChild(feedbackTitle);
    feedbackEntry.appendChild(feedbackName);
    feedbackEntry.appendChild(feedbackRating);
    feedbackEntry.appendChild(feedbackComments);
    
    displayFeedback.appendChild(feedbackEntry);

    // Clear the form
    event.target.reset();
});
