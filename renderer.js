const fetch = require('node-fetch');

document.getElementById('get-times').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const timings = data.data.timings;
        document.getElementById('results').innerText = `
            Fajr: ${timings.Fajr}
            Dhuhr: ${timings.Dhuhr}
            Asr: ${timings.Asr}
            Maghrib: ${timings.Maghrib}
            Isha: ${timings.Isha}
        `;
    } catch (error) {
        document.getElementById('results').innerText = 'Error fetching prayer times';
    }
});
