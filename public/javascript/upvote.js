async function upvoteClickHandler(event) {
    event.preventDefault();

    // get the alien id from the browser address
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/aliens/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            alien_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);