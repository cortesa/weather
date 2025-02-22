import { AxiosError } from "axios"

export const parseAxiosAPIError = (err: any) => {
	if (!err) return new Error("An unknown error occurred")
	const parsedError = (err as AxiosError<{ error: string }>)?.response?.data?.error
	// console.log(parsedError)
	return parsedError ? new Error(parsedError) : err
}
