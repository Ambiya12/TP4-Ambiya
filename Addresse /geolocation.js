export function getPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('La géolocalisation n\'est pas supportée par votre navigateur.');
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                error => {
                    reject(`Erreur de géolocalisation: ${error.message}`);
                }
            );
        }
    });
}
