import { useWeather } from "./useWeahter"
import { WTTRMessageData } from "../services/weatherAPI"
import { WEATHER_ICONS } from "../const/weathreIcons"
import { WEATHER_CONDITIONS } from "../const/weatherConditions"

type AppPageDataParams = {
	city: string
}

type AppPageData = {
	current: {
		date: string,
		description: string,
		temperature: string,
		humidity: string,
		windSpeed: string,
		windDegree: number,
		icon: string
	},
	forecast: {
		date: string,
		weekDay: string,
		minTempC: string,
		maxTempC: string,
		avgTempC: string,
		hourly: {
			time: string,
			icon?: string,
			description: string,
			windSpeed: string,
			windDegree: number,
			temperature: string
		}[]
	}[]
}

const weatherData = (wData: WTTRMessageData | null | undefined): AppPageData => {
	const currentWeather = wData?.current_condition[0]
	const forecastWeather = wData?.weather

	console.log("ACZ: forecastWeather", forecastWeather)

	const current = {
		date: new Date(currentWeather?.localObsDateTime || Date.now()).toLocaleDateString("es-ES", {
			day: "2-digit",
			month: "2-digit",
		}),
		description: WEATHER_CONDITIONS[currentWeather?.weatherCode]?.["es"].daycondition || "--",
		temperature: currentWeather?.temp_C || "--",
		humidity: currentWeather?.humidity || "--",
		windSpeed: currentWeather?.windspeedKmph || "--",
		windDegree: currentWeather?.winddirDegree || "",
		icon: WEATHER_ICONS[currentWeather?.weatherCode]?.iconUrl,
	}
	const forecast =  forecastWeather?.reduce((array, item) => {
		const hourly = item.hourly.map(hourData=>({
			time: hourData.time,
			icon: WEATHER_ICONS[hourData.weatherCode]?.iconUrl,
			description: hourData.weatherDesc,
			windSpeed: hourData.windspeedKmph,
			windDegree: hourData.winddirDegree,
			temperature: hourData.tempC,
		}))
		const dayWeather = {
			date: new Date(item.date).toLocaleDateString("es-ES", {
				day: "2-digit",
				month: "2-digit",
			}),
			weekDay: new Date(item.date).toLocaleDateString("en-US", { weekday: "short" }),
			minTempC: item.mintempC,
			maxTempC: item.maxtempC,
			avgTempC: item.avgtempC,
			hourly
		}

		return [...array, dayWeather]
	},[])

	return {current, forecast}
}

export function useCityWeather({city}: AppPageDataParams):AppPageData {
	const {data: cityData} = useWeather({location: city})
	const weatherCityData = weatherData(cityData)

	return weatherCityData
	
}
