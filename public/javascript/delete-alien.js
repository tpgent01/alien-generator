async function deleteAlienHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/aliens/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}
  
  document.querySelector('.delete-alien-btn').addEventListener('click', deleteAlienHandler);