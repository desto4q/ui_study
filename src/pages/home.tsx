import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";

function home() {
	return (
		<div data-theme="forest">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default home;
