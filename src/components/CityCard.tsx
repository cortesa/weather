import { useCityWeather } from "../hooks/useCityWeather"
import { capitalizeFirstLetter } from "../utils/CapitalizeFirstLetter"
import { LoaderSpinner } from "./LoaderSpinner"
import { Section } from "./Section"

type CityCardProps = {
	city: string
}

export function CityCard({city}:CityCardProps) {
	const {current: currentWeather} = useCityWeather({city})
	return (
		<Section title="Current ">
			<div className="grid grid-row-2 w-full">
				<div className="flex flex-row relative justify-between items-center">
					<h2 className="text-3xl font-bold">{capitalizeFirstLetter(city)}</h2>
					<div className={`
						flex flex-col
						absolute -top-2 -right-2 
						text-3xl align-bottom font-bold 
						pt-1 pb-2 px-2 
						border rounded-2xl
						border-white/40
						bg-white/10
						`}>
						<span className="text-sm">Date:</span>
						{currentWeather.date}
					</div>
				</div>
				<div className="mt-2 gap-5 grid grid-cols-[0.45fr_1fr] w-full">
					<div className="flex flex-col justify-center items-center  min-w-[50px]">
						{currentWeather.icon
							? <img src={currentWeather.icon} alt={currentWeather.description} className="w-24 h-auto" />
							: <LoaderSpinner/>
						}
					</div>
					<div className="flex flex-col justify-start items-start">
						<p className="text-2xl font-bold">{capitalizeFirstLetter(currentWeather.description)}</p>
						<p className="text-xl font-bold"><span className="text-xl font-light">Temp  </span>: {currentWeather.temperature}°C</p>
						<p className="text-xl font-semibold "><span className="text-xl font-light">Humidity </span>: {currentWeather.humidity}%</p>
						<p className="text-xl font-semibold"><span className="text-xl font-light">Wind</span>: {currentWeather.windSpeed} km/h</p>

					</div>

				</div>
			</div> 
		</Section>
	)
}
