import { useQuery } from "@tanstack/react-query"
import { weatherApi } from "../services/weatherAPI"

const DATA_TRUST_INTERVAL = 60 * 1000

export function useWeather(location?:string) {
	const activity = useQuery({
		queryKey: [ "weather-by-location", location] as const,
		queryFn: async ({ queryKey: [, location ] }) => {
			if(!location) return null
			const result = await weatherApi.getWeatherByTxLocation(location)
			return result
		},
		staleTime: DATA_TRUST_INTERVAL,
		refetchInterval: DATA_TRUST_INTERVAL,
		retry: false
	})
	return activity
}
