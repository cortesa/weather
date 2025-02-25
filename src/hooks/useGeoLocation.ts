import { useState, useEffect } from "react"

const useGeolocation = () => {
	const [coords, setCoords] = useState<{ latitude: number | null, longitude: number | null }>({ latitude: null, longitude: null })
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getLocation = async () => {
			try {
				const position = await new Promise<GeolocationPosition>((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject)
				})

				setCoords({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				})
			} catch (err: any) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getLocation()
	}, [])

	return { ...coords, loading, error }
}

export default useGeolocation
