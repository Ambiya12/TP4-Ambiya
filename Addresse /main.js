import { getPosition } from './geolocation.js';
import { getAddressFromCoords } from './addressApi.js';
import { waitFor, showError, hideError } from './utils.js';

const geolocationButton = document.getElementById('geolocateBtn');
const addressText = document.getElementById('address');

geolocationButton.addEventListener('click', () => {
    getPosition()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            addressText.textContent = address;
        })
        .catch(error => {
            showError(error);
            waitFor(3).then(() => {
                hideError();
            });
        });
});
