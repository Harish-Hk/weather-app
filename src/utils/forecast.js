const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/625e98b289bca87dc1083b2328e88eff/' + lat + ',' + long
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find Location', undefined)
        } else {
            // console.log(body.daily.data[0]);

            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ', with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast