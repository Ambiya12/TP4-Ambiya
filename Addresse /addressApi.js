export function getAddressFromCoords({ latitude, longitude }) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                return data.features[0].properties.label;
            } else {
                throw new Error('Adresse non trouvée.');
            }
        })
        .catch(error => {
            throw new Error(`Erreur lors de recuperation l'adresse: ${error.message}`);
        });
}
