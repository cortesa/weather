import type { AxiosMethod } from "@/types"
import axios, { AxiosInstance } from "axios"
import { WTTRMessageData, WTTRResponse } from "./types"
import { parseAxiosAPIError } from "./utils"

const WEATHER_SERVICE_URL = "https://wttr.in/"

class WeatherAPI {
	private client: AxiosInstance

	constructor() {
		this.client = axios.create({
			baseURL: `${WEATHER_SERVICE_URL}`,
			// headers: this._formatHeaders(),
			timeout: 10_000
		})
	}

	_handleAPIError(data: WTTRResponse<any> | undefined | null) {
		if ((data as any)?.error) {
			throw new Error((data as any)?.error || "An error occurred")
		}
	}

	async _makeRequest<T = any>(
		method: AxiosMethod,
		url: string,
		...args: any
	) {
		try {
			const { data } = await this.client.request<WTTRResponse<T>>({
				method,
				url,
				...args
			})

			this._handleAPIError(data)
			return data as T
		} catch (err: any) {
			throw parseAxiosAPIError(err)
		}
	}

	_public = {
		get: <T>(url: string, ...args: any) => {
			return this._makeRequest<T>("get", url, ...args)
		},
		post: <T>(url: string, ...args: any) => {
			return this._makeRequest<T>("post", url, ...args)
		},
		put: <T>(url: string, ...args: any) => {
			return this._makeRequest<T>("put", url, ...args)
		},
		delete: <T>(url: string, ...args: any) => {
			return this._makeRequest<T>("delete", url, ...args)
		}
	}

	async getWeatherByTxLocation(location: string) {
		const _location = location.trim().replace(" ", "+")
		const result = await this._public.get<WTTRMessageData>(`/${_location}?format=j1`)
		return result || {}
	}

}

export const weatherApi = new WeatherAPI()
