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

	_handleAPIError(data: WTTRResponse<unknown> | undefined | null) {
		if ((data )?.error) {
			throw new Error((data)?.error || "An error occurred")
		}
	}

	async _makeRequest<T = unknown>(
		method: AxiosMethod,
		url: string,
		...args: []
	) {
		try {
			const { data } = await this.client.request<WTTRResponse<T>>({
				method,
				url,
				...args
			})

			this._handleAPIError(data)
			return data as T
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			throw parseAxiosAPIError(err)
		}
	}

	_public = {
		get: <T>(url: string, ...args: []) => {
			return this._makeRequest<T>("get", url, ...args)
		},
		post: <T>(url: string, ...args: []) => {
			return this._makeRequest<T>("post", url, ...args)
		},
		put: <T>(url: string, ...args: []) => {
			return this._makeRequest<T>("put", url, ...args)
		},
		delete: <T>(url: string, ...args: []) => {
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
