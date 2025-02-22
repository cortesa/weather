import { useWeather } from "../../hooks/useWeahter"

export function AppPage() {
	const {data} = useWeather("cadiz")
	return (
		<div>{
			data?.current_condition[0]?.temp_C}</div>
	)
}
