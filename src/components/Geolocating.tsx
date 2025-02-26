import { LoaderLinear } from "./LoaderLinear"

export function Geolocating() {
	return <div className="pt-6 gap-1 flex flex-col justify-center items-center">
		<span >Geolocating</span>
		<LoaderLinear/>
	</div>
}
