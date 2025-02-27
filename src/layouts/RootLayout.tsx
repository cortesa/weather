import { Outlet } from "@tanstack/react-router"
// import { TanStackRouterDevtools } from "@tanstack/router-devtools"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}
