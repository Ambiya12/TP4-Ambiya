export function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

export function showError(message) {
    const errorElement = document.getElementById('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

export function hideError() {
    const errorElement = document.getElementById('error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}
