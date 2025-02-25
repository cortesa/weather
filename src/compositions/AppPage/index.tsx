import { useEffect, useState } from "react"
import { CityCard } from "../../components/CityCard"
import { useNearestCity } from "../../hooks/useNearestCity"

export function AppPage() {
	const {nearestArea, isLoading, isError} = useNearestCity()
	const [inputCityValue, setInputCityValue] = useState("")
	const [city, setCity] = useState("")

	useEffect(()=>{
		if (!nearestArea) return
		setInputCityValue(nearestArea)
		setCity(nearestArea)
	},[nearestArea])

	console.log('asa:', !isLoading && isError && !city, !isLoading , isError , !city)

	return (
		<div className={`
			h-dvh w-dvw 
			bg-gradient-to-br from-blue-600 to-cyan-400 
			flex flex-col 
			items-center 
			p-6 lg:px-96`}>
			<h1 className="text-4xl font-bold text-white drop-shadow-lg">Weather App</h1>
			<div className="w-full max-w-md bg-white p-2 rounded-2xl shadow-2xl mt-6 flex items-center gap-3">
				<input
					type="text"
					placeholder="Enter a city..."
					className="flex-1 p-2 rounded-xl focus:outline-none text-lg border border-gray-300 shadow-inner text-indigo-500"
					value={inputCityValue}
					onChange={(e) => setInputCityValue(e.target.value)}
				/>
				<button
					onClick={()=>setCity(inputCityValue)}
					className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
				>
          Search
				</button>
			</div>
			{isLoading && !isError && !city && <div className="pt-6">Geolocating...</div>}
			{!isLoading && isError && !city && <div className="pt-6">Unable to retrieve location. Please enter a city</div>}
			{city && <CityCard city={city}/>}
		</div>
	)
};
