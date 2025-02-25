import { useWeather } from "./useWeahter"
import { WTTRMessageData } from "../services/weatherAPI"
import { getWeatherIcon } from "../utils/weatherIcons"
type AppPageDataParams = {
	city: string
}

type AppPageData = {
	temperature: string
	weather: {
		icon: string
		descriptionCode: string
	}
	humidity: string
	windSpeed: string
}

const weatherData = (wData: WTTRMessageData | null | undefined) => {
	const currentCondition = wData?.current_condition[0]

	const temperature = currentCondition?.temp_C || "--"
	const weather = {
		icon: getWeatherIcon(currentCondition?.weatherDesc[0].value),
		descriptionCode: currentCondition?.weatherCode || "--",
	}
	const humidity = currentCondition?.humidity || "--"
	const windSpeed = currentCondition?.windspeedKmph || "--"

	return {temperature, weather, humidity, windSpeed}
}

export function useCityWeather({city}: AppPageDataParams):AppPageData {

	const {data: cityData} = useWeather(city)
	const weatherCityData = weatherData(cityData)

	return weatherCityData
	
}
