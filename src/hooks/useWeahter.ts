import { useQuery } from "@tanstack/react-query"
import { weatherApi } from "../services/weatherAPI"

export function useWeather(location?:string) {
	const activity = useQuery({
		queryKey: [ "weather-by-location", location] as const,
		queryFn: async ({ queryKey: [, location ] }) => {
			if(!location) return null
			const result = await weatherApi.getWeatherByTxLocation(location)
			console.log(result)
			return result
		},
		staleTime: 60_000,
		refetchInterval: 60_000,
		retry: false
	})
	return activity
}
