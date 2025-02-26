type SectionProps = {
	title?: string
	children: React.ReactNode
}

export function Section({title, children}:SectionProps) {
	return (
		<div className={`${title ? "mt-6" : ""} w-full max-w-2xl`}>
			{title && <h3 className="text-xl">{title}</h3>}
			<div className="mt-2 bg-black/20 p-5 rounded-2xl shadow-xl ">
				{children}
			</div>
		</div>
	)
}
