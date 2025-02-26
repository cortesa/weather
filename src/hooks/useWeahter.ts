import { useQuery } from "@tanstack/react-query"
import { weatherApi } from "../services/weatherAPI"

type UseWeatherProps = {
	location: string, 
	refetch?: boolean
}

const DATA_TRUST_INTERVAL = 60 * 1000

export function useWeather({location, refetch = true}: UseWeatherProps) {
	const activity = useQuery({
		queryKey: [ "weather-by-location", location] as const,
		queryFn: async ({ queryKey: [, location ] }) => {
			if(!location) return null
			const result = await weatherApi.getWeatherByTxLocation(location)
			
			return result
		},
		staleTime: refetch ?  DATA_TRUST_INTERVAL : undefined ,
		refetchInterval: refetch ? DATA_TRUST_INTERVAL : undefined ,
		retry: false
	})
	return activity
}
