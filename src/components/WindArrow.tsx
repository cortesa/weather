type WindArrowProps = {
  direction: number;
  size?: number;
	className?: string
};

export function WindArrow({ direction , className}: WindArrowProps) {
	return (
		<svg
			className={className}
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* <rect x="0" y="0" width="50" height="50" stroke="black" strokeWidth="1" fill="none" /> */}
			<circle cx="25" cy="25" r="18" strokeWidth="4" fill="none" />
			<line x1="25" y1="0" x2="25" y2="13" strokeWidth="3" />
			<g transform={`rotate(${direction} 25 25)`}>
				<polygon points="25,0 10,50 25,35 40,50" />
			</g>
		</svg>
	)
}
