const apiKey = 'cb544dd6c8a149028b155028241510';  // API key Anda
const city = 'Jakarta';
const days = 7;

// URL untuk API WeatherAPI
const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`;

// Fetch data dari WeatherAPI
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Fetch data dari WeatherAPI
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                const currentWeather = data.current.condition.text.toLowerCase(); // Deskripsi cuaca

                // Atur background berdasarkan cuaca
                let backgroundUrl;

                if (currentWeather.includes('rain')) {
                    backgroundUrl = 'https://img.freepik.com/free-vector/realistic-clouds-with-falling-rain_1017-33597.jpg';
                } else if (currentWeather.includes('cloud')) {
                    backgroundUrl = 'https://plus.unsplash.com/premium_photo-1667143327769-1c36fd30a7c6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                } else if (currentWeather.includes('sun') || currentWeather.includes('clear')) {
                    backgroundUrl = 'https://images.unsplash.com/photo-1713032994950-10223544dd93?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                } else if (currentWeather.includes('snow')) {
                    backgroundUrl = 'https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                } else {
                    backgroundUrl = 'https://www.shutterstock.com/image-photo/natural-cloudy-fresh-blue-sky-600nw-2475825589.jpg'; // Default
                }

                // Update background image
                document.body.style.backgroundImage = `url('${backgroundUrl}')`;

                const current = data.current;
                const forecast = data.forecast.forecastday;

                // Header Info
                document.getElementById('header-city').textContent = city;
                document.getElementById('city-temp').textContent = `${current.temp_c}°C`;
                document.getElementById('description').textContent = current.condition.text;

                // Set weather icon
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = current.condition.icon;
                weatherIcon.alt = current.condition.text;

                // title ramalan cuaca
                document.getElementById('seven-day-title').textContent = `Ramalan Cuaca ${days} Hari Kedepan`;

                // title informasi cuaca
                document.getElementById('weather-info-title').textContent = `Informasi Cuaca`;

                // Informasi Tambahan
                document.getElementById('wind-info').textContent = `Angin: ${current.wind_kph} km/h`;
                document.getElementById('humidity-info').textContent = `Kelembapan: ${current.humidity}%`;
                document.getElementById('uv-index-info').textContent = `UV Index: ${current.uv}`;
                document.getElementById('pressure-info').textContent = `Tekanan Udara: ${current.pressure_mb} hPa`;
                document.getElementById('feels-like-info').textContent = `Terasa Seperti: ${current.feelslike_c}°C`;

                // Hourly Forecast
                const hourlyForecast = document.getElementById('hourly-forecast');
                const hourlyData = forecast[0].hour;
                const leftBtn = document.getElementById('left-btn');
                const rightBtn = document.getElementById('right-btn');

                // Scroll ke kiri saat tombol kiri ditekan
                leftBtn.addEventListener('click', () => {
                    hourlyForecast.scrollBy({ left: -100, behavior: 'smooth' });
                });

                // Scroll ke kanan saat tombol kanan ditekan
                rightBtn.addEventListener('click', () => {
                    hourlyForecast.scrollBy({ left: 100, behavior: 'smooth' });
                });

                // Menampilkan data dari jam 12 siang hingga 2 pagi
                hourlyData.slice(0, 24).forEach(hour => {
                    const hourBlock = document.createElement('div');
                    hourBlock.innerHTML = `
                                            <p>${hour.time.split(' ')[1]}</p>
                                            <img src="${hour.condition.icon}" alt="${hour.condition.text}" />
                                            <p>${hour.temp_c}°C</p>
                                        `;
                    hourlyForecast.appendChild(hourBlock);
                });


                const sevenDayUl = document.getElementById('seven-day-forecast');
                forecast.forEach(day => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <span>
                            ${new Date(day.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        <span>Siang: ${day.day.maxtemp_c}° / Malam: ${day.day.mintemp_c}°</span>
                    `;
                    sevenDayUl.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('city-temp').textContent = 'Error memuat data';
            });

        // Menampilkan cuaca hari ini
        const currentWeatherDiv = document.getElementById('current-weather');
        const currentWeather = data.current;
        currentWeatherDiv.innerHTML = `
            <h2>Cuaca Hari Ini</h2>
            <p>Suhu: ${currentWeather.temp_c}°C</p>
            <p>Deskripsi: ${currentWeather.condition.text}</p>
            <p>Kecepatan Angin: ${currentWeather.wind_kph} km/h</p>
            <p>Kelembapan: ${currentWeather.humidity}%</p>
        `;

        // Menampilkan ramalan cuaca 7 hari ke depan
        const forecastDiv = document.getElementById('weather-forecast');
        let forecastHTML = '';
        data.forecast.forecastday.forEach((day) => {
            const date = new Date(day.date);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);

            forecastHTML += `
                <div class="day">
                    <h4>${formattedDate}</h4>
                    <p>Suhu Siang: ${day.day.maxtemp_c}°C</p>
                    <p>Suhu Malam: ${day.day.mintemp_c}°C</p>
                    <p>Cuaca: ${day.day.condition.text}</p>
                </div>
            `;
        });
        forecastDiv.innerHTML = forecastHTML;

        // Update header dengan suhu dan kondisi saat ini
        document.getElementById('city-temp').textContent = `${currentWeather.temp_c}° | ${currentWeather.condition.text}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('description').innerHTML = '<p>Terjadi kesalahan saat mengambil data cuaca.</p>';
        document.getElementById('seven-day-title').innerHTML = '<p>Ramalan cuaca tidak dapat ditampilkan.</p>';
        document.getElementById('weather-info-title').innerHTML = '<p>Informasi Cuaca tidak dapat ditampilkan.</p>';
        document.body.style.backgroundImage = 'url("https://www.shutterstock.com/image-photo/natural-cloudy-fresh-blue-sky-600nw-2475825589.jpg")';

    });
