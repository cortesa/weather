
export type WeatherDescription = 
		"Sunny"
	|	"Partly Cloudy"
	|	"Cloudy"
	|	"Light Rain"
	|	"Heavy Rain"
	|	"Snow"
	|	"Thunderstorm"
	| null | undefined

const ICON_MAP = {
	"Sunny": "/weatherIcons/sunny.png",
	"sunny": "/weatherIcons/sunny.png",
	"Partly Cloudy": "/weatherIcons/cloudy.png",
	"Cloudy": "/weatherIcons/cloudy.png",
	"Light Rain": "/weatherIcons/rainy.png",
	"Heavy Rain": "/weatherIcons/rainy.png",
	"rainy": "/weatherIcons/rainy.png",
	"Snow": "/weatherIcons/snowy.png",
	"snowy": "/weatherIcons/snowy.png",
	"Thunderstorm": "/weatherIcons/storm.png",
	"storm": "/weatherIcons/storm.png",
}
export const getWeatherIcon = (description?: string) => {
	if (!description) return ICON_MAP["Cloudy"]
	return ICON_MAP[description] || ICON_MAP["Cloudy"]
}
