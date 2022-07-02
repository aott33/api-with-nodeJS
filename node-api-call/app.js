const WeatherAPI = require('./weather')

const asyncApiCall = async () => {
    const response = await WeatherAPI.getCompatibility('Abbotsford')

    console.log(response.data)
}

asyncApiCall()