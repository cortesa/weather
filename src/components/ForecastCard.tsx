
import { useCityWeather } from "../hooks/useCityWeather"
import { Section } from "./Section"

type ForecastCardProps = {
	city: string
}

export function ForecastCard({city}:ForecastCardProps) {
	const {forecast} = useCityWeather({city})
	console.log("ACZ1:", forecast)
	return forecast && (
		<Section>
			<div className="">
				<div className="border flex flex-row gap-5 relative justify-between items-top w-full">
					<p className={`
						relative -top-2.5 -left-3 
						text-3xl font-bold 
						px-2 pt-1 pb-1.5
						border rounded-2xl border-white/40
					bg-white/10
					`}>
						{forecast[0].date}
					</p>
					<div className="flex flex-row gap-2">
						<p>Max:{forecast[0].maxTempC}º</p>
						<p>Min:{forecast[0].minTempC}º</p>
					</div>
				</div>
				<div className="border">jj</div>
			</div>
			{/*	<div className="flex flex-col justify-center items-center  min-w-[50px] border border-amber-600">
					<img src={cityWeatherData.weather.icon} alt={cityWeatherData.weather.description} className="w-24 h-auto" />
					<p className="text-xl">{cityWeatherData.weather.description}</p>
					<p className="text-xl font-bold">🌡️ {cityWeatherData.temperature}°C</p>
				</div>
				<div className="flex flex-col gap-2 justify-start items-start border border-amber-600">
					<h2 className="text-4xl font-bold">{city}</h2>
					<p className="text-xl font-semibold "><span className="text-3xl ">💧 </span>: {cityWeatherData.humidity}%</p>
					<p className="text-xl font-semibold"><span className="text-3xl pl-2">🌬️</span>: {cityWeatherData.windSpeed} km/h</p>

				</div>
			</div> */}
		</Section>
	)
}
