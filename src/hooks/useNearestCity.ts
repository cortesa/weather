import useGeolocation from "./useGeoLocation"
import { useWeather } from "./useWeahter"

type AppPageData = {
	nearestArea: string
	isError: boolean
	isLoading: boolean
}

export function useNearestCity():AppPageData {
	const {error, latitude, longitude, loading} = useGeolocation()
	
	let GPSCoordinates = ""
	if (!error && !loading) GPSCoordinates = `${latitude},${longitude}`
	
	const {data: GeoLocationData, isSuccess: isWSuccess, isError: isWError } = useWeather({location: GPSCoordinates, refetch: false})

	const isError = !!error || isWError
	const isLoading = !isError && !(isWSuccess && !loading)

	const nearestCondition = GeoLocationData?.nearest_area[0]
	const nearestArea = nearestCondition?.areaName[0].value || ""
	
	return {nearestArea, isLoading, isError}
	
}
