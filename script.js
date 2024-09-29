function showRSVP() {
    document.getElementById('rsvp-modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('rsvp-modal').style.display = 'none';
  }
  
  document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
      
      document.querySelector('h1').textContent = `You're Invited, ${name}!`;
      document.getElementById('response-message').textContent = `Thank you for your response, ${name}!`;
      document.getElementById('rsvp-form').reset();
    }

    setTimeout(() => {
      closeModal();
      document.getElementById('response-message').textContent = '';  // Clear the message
    }, 3000);
  
  });
  