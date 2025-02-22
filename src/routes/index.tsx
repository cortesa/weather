import { createFileRoute } from "@tanstack/react-router"
import { useWeather } from "../hooks/useWeahter"
import { AppPage } from "../compositions/AppPage"

export const Route = createFileRoute("/")({
	component: AppPage,
})

function Index() {
	const {data} = useWeather("london")
	console.log (data)
	return (
		<div className="p-2">
			<h3>Welcome Home! KK2</h3>
		</div>
	)
}

