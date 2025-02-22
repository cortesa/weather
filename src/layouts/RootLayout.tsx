import { Outlet, Link } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-2 flex gap-2 text-blue-900">
				<Link to="/" className="[&.active]:text-red-500">
						Home
				</Link>{" "}
				<Link to="/about" className="[&.active]:text-green-500">
						About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
