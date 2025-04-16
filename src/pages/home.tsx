import { useAtomValue } from "jotai";
import { Outlet } from "react-router";
import { theme_atom } from "~/client/client_state";
import Navbar from "~/components/Navbar";

function home() {
	let theme = useAtomValue(theme_atom)
	return (
		<div data-theme={theme}>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default home;
