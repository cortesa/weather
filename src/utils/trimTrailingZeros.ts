export const trimTrailingZeros = (num: number | string): string | number => {
	const trimmed = num.toString().replace(/0+$/, "") // Elimina ceros finales
	return trimmed === "" ? 0 : trimmed // Si el resultado es vacío, devuelve 0
}
