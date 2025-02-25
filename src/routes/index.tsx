import { createFileRoute } from "@tanstack/react-router"
import { AppPage } from "../compositions/AppPage"

export const Route = createFileRoute("/")({
	component: AppPage,
})
