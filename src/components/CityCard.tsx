import { useCityWeather } from "../hooks/useCityWeather"

type CityCardProps = {
	city: string
}

export function CityCard({city}:CityCardProps) {
	const cityWeatherData = useCityWeather({city})
	return (
		<div className="mt-6 gap-5 grid grid-cols-[0.45fr_1fr] w-full  bg-black/20 p-5 rounded-2xl shadow-xl ">
			<div className="flex flex-col justify-center items-center  min-w-[50px]">
				<img src={cityWeatherData.weather.icon} alt={cityWeatherData.weather.description} className="w-24 h-auto" />
				<p className="text-xl">{cityWeatherData.weather.description}</p>
				<p className="text-xl font-bold">🌡️ {cityWeatherData.temperature}°C</p>
			</div>
			<div className="flex flex-col gap-2 justify-start items-start border border-amber-600 min-w-">
				<h2 className="text-4xl font-bold">{city}</h2>
				<p className="text-xl font-semibold "><span className="text-3xl ">💧 </span>: {cityWeatherData.humidity}%</p>
				<p className="text-xl font-semibold"><span className="text-3xl pl-2">🌬️</span>: {cityWeatherData.windSpeed} km/h</p>

			</div>
		</div>
	)
}
