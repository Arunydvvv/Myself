// Function to ask for a secret code
function askForCode() {
    document.getElementById('code-input').style.display = 'block';
}

// Function to check the entered code and redirect to the appropriate page
function checkCode() {
    const code = document.getElementById('code').value.toUpperCase();
    let message = '';
    switch(code) {
        case 'LIFE':
            message = 'Redirecting to Life page...';
            setTimeout(() => { window.location.href = 'life.html'; }, 1000);
            break;
        case 'LOVE':
            message = 'Redirecting to Love page...';
            setTimeout(() => { window.location.href = 'love.html'; }, 1000);
            break;
        case 'WORK':
            message = 'Redirecting to Work page...';
            setTimeout(() => { window.location.href = 'work.html'; }, 1000);
            break;
        case 'CONNECT':
            message = 'Redirecting to Connect page...';
            setTimeout(() => { window.location.href = 'connect.html'; }, 1000);
            break;
        default:
            message = 'Incorrect code. Please try again.';
            break;
    }
    document.getElementById('code-message').textContent = message;
}
