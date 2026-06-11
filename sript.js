window.onload = function () {

    // Create the map
    const map = L.map('map').setView([36.8508, -76.2859], 13);

    // Add map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Check if properties exists
    if (typeof properties === "undefined") {
        console.error("properties data not loaded");
        return;
    }

    // Add markers
    properties.forEach(property => {

        if (!property.lat || !property.lng) return;

        const marker = L.marker([property.lat, property.lng]).addTo(map);

        const popupContent = `
            <strong>${property.name}</strong><br>
            ${property.address}<br>
            Price: ${property.price}<br>
            Size: ${property.sqft}
        `;

        marker.bindPopup(popupContent);

        marker.on('mouseover', function () {
            this.openPopup();
        });

        marker.on('mouseout', function () {
            this.closePopup();
        });
    });

};
