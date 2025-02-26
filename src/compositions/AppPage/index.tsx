import { useEffect, useState } from "react"
import { CityCard } from "../../components/CityCard"
import { useNearestCity } from "../../hooks/useNearestCity"
import { ForecastCard } from "../../components/ForecastCard"
import { Geolocating } from "../../components/Geolocating"

export function AppPage() {
	const {nearestArea, isLoading, isError} = useNearestCity()
	const [inputCityValue, setInputCityValue] = useState("")
	const [city, setCity] = useState("")

	useEffect(()=>{
		if (!nearestArea) return
		setInputCityValue(nearestArea)
		setCity(nearestArea)
	},[nearestArea])

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setCity(inputCityValue)
		}
	}

	return (
		<div className={`
			h-dvh w-dvw 
			bg-gradient-to-br from-blue-600 to-cyan-400 
			flex flex-col 
			items-center 
			p-6 md:px-20 lg:px-26`}>
			<h1 className="text-4xl font-bold text-white drop-shadow-lg">Weather App</h1>
			<div className="w-full max-w-md bg-white p-2 rounded-2xl shadow-2xl mt-6 flex items-center gap-3">
				<input
					type="text"
					placeholder="Enter a city..."
					className="flex-1 p-2 rounded-xl focus:outline-none text-lg border border-gray-300 shadow-inner text-indigo-500"
					value={inputCityValue}
					onChange={(e) => setInputCityValue(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
		
				<button
					onClick={()=>setCity(inputCityValue)}
					className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
				>
          Search
				</button>
			</div>
			{isLoading && !isError && !city && <Geolocating/>}
			{!isLoading && isError && !city && <div className="pt-6">Unable to retrieve location. Please enter a city</div>}
			{city && <CityCard city={city}/>}
			{city && <ForecastCard city={city}/>}
		</div>
	)
};
