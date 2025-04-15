import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router";
import "./index.css";
/// @ts-ignore
import routes from "~react-pages";
import { useAtom } from "jotai";
import { theme_atom } from "./client/client_state";
/// ts-ignore
function App() {
	let [theme, setTheme] = useAtom(theme_atom);
	return (
		<Suspense
			fallback={
				<div
					className="min-h-dvh  flex"
					data-theme={theme ? theme : "dark"}
				>
					<div className="flex-1 place-items-center grid">
						<h2>loading</h2>
					</div>
				</div>
			}
		>
			{useRoutes(routes)}
		</Suspense>
	);
}

const app = createRoot(document.getElementById("root")!);

app.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
