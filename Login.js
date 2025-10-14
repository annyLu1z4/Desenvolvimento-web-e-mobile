function login() {
    const username = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    // Simple authentication(replace with real authentication)
    if (username ==='Chiclete' && password === '12345') {
        window.location.href = 'alex.html';
    } else {
        alert('Informações Incorretas');
    }
}

// opcional
document.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    login();
}
});