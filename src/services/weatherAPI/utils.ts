import { AxiosError } from "axios"

export const parseAxiosAPIError = (err: Error) => {
	if (!err) return new Error("An unknown error occurred")
	const parsedError = (err as AxiosError<{ error: string }>)?.response?.data?.error
	return parsedError ? new Error(parsedError) : err
}
