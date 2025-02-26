import { useWeather } from "./useWeahter"
import { WTTRMessageData } from "../services/weatherAPI"
import { WEATHER_ICONS } from "../const/weathreIcons"
import { WEATHER_CONDITIONS } from "../const/weatherConditions"
type AppPageDataParams = {
	city: string
}

type AppPageData = {
	current:{
		date: string,
		description: string
		temperature: string
		humidity: string
		windSpeed: string
		icon: string
	},
	forecast:{
		date: string,

	}
}

const weatherData = (wData: WTTRMessageData | null | undefined): AppPageData => {
	const currentWeather = wData?.current_condition[0]
	const forecastWeather = wData?.weather

	const current = {
		date: new Date(currentWeather?.localObsDateTime || Date.now()).toLocaleDateString("es-ES", {
			day: "2-digit",
			month: "2-digit",
		}),
		description: WEATHER_CONDITIONS[currentWeather?.weatherCode]?.["es"].daycondition || "--",
		temperature: currentWeather?.temp_C || "--",
		humidity: currentWeather?.humidity || "--",
		windSpeed: currentWeather?.windspeedKmph || "--",
		icon: WEATHER_ICONS[currentWeather?.weatherCode]?.iconUrl,
	}
	const forecast = {
		date: new Date(currentWeather?.localObsDateTime || Date.now()).toLocaleDateString("es-ES", {
			day: "2-digit",
			month: "2-digit",
		}),
	}

	console.log("ACZ:", forecastWeather)

	return {current, forecast}
}

export function useCityWeather({city}: AppPageDataParams):AppPageData {
	const {data: cityData} = useWeather({location: city})
	const weatherCityData = weatherData(cityData)

	return weatherCityData
	
}
