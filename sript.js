// Create map centered on Norfolk
const map = L.map('map').setView([36.8508, -76.2859], 13);

// Add map tiles (like Google Maps style)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers
properties.forEach(property => {

    const marker = L.marker([property.lat, property.lng]).addTo(map);

    const popupContent = `
        <div>
            <div class="popup-title">${property.name}</div>
            <div>${property.address}</div>
            <div><strong>Price:</strong> ${property.price}</div>
            <div><strong>Size:</strong> ${property.sqft}</div>
        </div>
    `;

    marker.bindPopup(popupContent);

    // Hover effect
    marker.on('mouseover', function () {
        this.openPopup();
    });

    marker.on('mouseout', function () {
        this.closePopup();
    });
});
``
