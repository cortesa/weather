export function LoaderLinear() {
	return (
		<div className="flex justify-center items-center w-full h-full">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 30" className="w-15 h-3">
				{[0, 0.05, 0.1, 0.15, 0.2].map((delay, index) => (
					<circle
						key={index}
						fill="#FFFFFF"
						stroke="#FFFFFF"
						strokeWidth="8"
						opacity={1 - index * 0.2}
						r="10"
						cx="25"
						cy="15"
					>
						<animate
							attributeName="cx"
							calcMode="spline"
							dur="2s"
							values="25;155;155;25;25"
							keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
							repeatCount="indefinite"
							begin={`${delay}s`}
						/>
					</circle>
				))}
			</svg>
		</div>
	)
}
