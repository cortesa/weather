import { useCityWeather } from "../hooks/useCityWeather"
import { capitalizeFirstLetter } from "../utils/CapitalizeFirstLetter"
import { LoaderSpinner } from "./LoaderSpinner"
import { Section } from "./Section"
import { WindArrow } from "./WindArrow"

type CityCardProps = {
	city: string
}

export function CityCard({city}:CityCardProps) {
	const {current} = useCityWeather({city})
	return (
		<Section title="Current ">
			<div className="grid grid-row-2 w-full">
				<div className="flex flex-row relative justify-between items-center">
					<h2 className="text-4xl font-bold">{capitalizeFirstLetter(city)}</h2>
					<div className={`
						flex flex-col
						absolute -top-2 -right-2 
						text-2xl md:text-3xl align-bottom font-bold 
						px-2 pt-1 pb-1.5 
						border rounded-2xl
						border-white/40
						bg-white/10
						`}>
						<span className="text-sm">Date:</span>
						{current.date}
					</div>
				</div>
				<div className="mt-2 gap-5 grid grid-cols-[0.45fr_1fr] w-full">
					<div className="flex flex-col justify-center items-center  min-w-[50px]">
						{current.icon
							? <img src={current.icon} alt={current.description} className="w-24 h-auto" />
							: <LoaderSpinner/>
						}
					</div>
					<div className="flex flex-col justify-start items-start">
						<p className="text-xl font-bold">{capitalizeFirstLetter(current.description)}</p>
						<p className="text-xl font-bold"><span className="text-xl font-light">Temp: </span> {current.temperature}°</p>
						<p className="text-xl font-semibold "><span className="text-xl font-light">Humidity: </span> {current.humidity}%</p>
						<p className="flex flex-row gap-1 text-xl font-semibold">
							<span className="text-xl font-light">Wind:</span>
							{current.windSpeed} km/h
							<WindArrow className="ml-2 w-7 fill-white stroke-white/40" direction={current.windDegree}/>
						</p>
					</div>
				</div>
			</div> 
		</Section>
	)
}
