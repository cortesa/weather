
import { useCityWeather } from "../hooks/useCityWeather"
import { capitalizeFirstLetter } from "../utils/CapitalizeFirstLetter"
import { trimTrailingZeros } from "../utils/trimTrailingZeros"
import { Section } from "./Section"
import { WindArrow } from "./WindArrow"

type ForecastCardProps = {
	city: string
}

export function ForecastCard({city}:ForecastCardProps) {
	const {forecast} = useCityWeather({city})
	console.log("ACZ: forecast", forecast)
	return forecast && forecast.map((forecastDay, index)=>(
		<Section key={`forecast-${index}`}>
			<div className="flex flex-row gap-2">
				<div className={`
						flex flex-col
						px-1.5 pt-1 pb-1.5 
						border rounded-lg border-white/40
						bg-white/10
						`}>
					<span className="pt-1 text-lg font-bold">{capitalizeFirstLetter(forecastDay.weekDay)}</span>
					<span className="text-xl mt-0 font-bold">{forecastDay.date}</span>
				</div>
				<div className="w-full">
					<div className="flex flex-row justify-between gap-2 w-full text-sm font-bold">
						<p>Avg: {forecastDay.avgTempC}º</p>
						<p>Max: {forecastDay.maxTempC}º</p>
						<p>Min: {forecastDay.minTempC}º</p>
					</div>
					<div className={`
						grid gap-1 
						grid-cols-4 sm:grid-cols-8 
						w-full mt-1
						`}>
						{(forecastDay || []).hourly.map((item, index:number) => {
							return (
								<div 
									key={`hours-${index}`}
									className={`
									flex flex-col gap-1 
									justify-start items-center 
									p-1 
									border rounded-lg border-white/40
									bg-white/10
								`}>
									<p className="text-lg font-bold">{trimTrailingZeros(item.time)}h</p>
									<img src={item.icon} alt={item.description} className="w-24 max-w-10 h-auto" />
									<div className="mt-1">
										<p className="flex flex-row gap-0.5 text-xs font-semibold">
											{item.windSpeed}
											<WindArrow className="w-4 fill-white stroke-white/40" direction={item.windDegree}/>
										</p>
										<p className="text-xs font-semibold">Km/h</p>
									</div>
								</div>
							)})}
					</div>
				</div>
			</div>
		</Section>))
}
