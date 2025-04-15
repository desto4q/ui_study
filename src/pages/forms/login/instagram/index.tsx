import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { theme_atom } from "~/client/client_state";

function index() {
	let theme = useSetAtom(theme_atom);
	useEffect(() => {
		theme("garden");
	}, []);
	return (
		<div
			className="min-h-dvh flex bg-base-200 px-8 md:px-0"
			data-theme="garden"
		>
			<title>instagram form login</title>
			<div className="flex-1 flex flex-col gap-4 items-center justify-center ">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					action=""
					className="bg-base-100 max-w-md border border-neutral-500/50  w-full p-4 rounded-md flex flex-col gap-4"
				>
					<h2 className="text-2xl text-center pb-4 grid place-items-center">
						{/* Instagram */}
						<img
							className="w-2/4"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
						/>
					</h2>
					<div>
						<input
							type="text"
							placeholder="Phone number, E-mail or username"
							className="input w-full "
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="Password"
							className="input w-full "
						/>
					</div>
					<button
						data-theme="dark"
						className="btn bg-blue-500 mt-4"
					>
						Submit
					</button>
					<div className="flex justify-center items-center gap-4">
						<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
						<span>Or</span>
						<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
					</div>

					<button
						type="button"
						className="btn btn-ghost text-blue-500"
					>
						Login with facebook
					</button>

					<a
						href=""
						className="text-blue-500 text-center text-sm"
					>
						Forgot password?
					</a>
				</form>
				<div className="bg-base-100 max-w-md border border-neutral-500/50  w-full p-4 rounded-md flex flex-col gap-4">
					<div className="text-sm text-center ">
						Need Assistance{" "}
						<span className="text-blue-500 font-bold capitalize">
							contact us
						</span>
					</div>
				</div>

				<div className="mt">Get The App</div>
				<div
					className=" grid grid-cols-2 gap-2 bg-transparent "
					data-theme="dark"
				>
					<button className="cursor-pointer bg-neutral-900 rounded-md flex px-2 py-2 items-center gap-2 hover:opacity-75 duration-150">
						<div className="size-8 aspect-square ">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/30px-Apple_logo_white.svg.png"
								className="size-full object-contain"
								alt=""
							/>
						</div>
						<div>
							<p className="text-xs">Download on</p>
							<h2 className="text-md font-bold">App Store</h2>
						</div>
					</button>
					<button className="cursor-pointer bg-neutral-900 rounded-md flex px-2 py-2 items-center gap-2 hover:opacity-75 duration-150">
						<div className="size-8 aspect-square ">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Google_Play_2016_icon.svg/120px-Google_Play_2016_icon.svg.png"
								className="size-full object-contain"
								alt=""
							/>
						</div>
						<div>
							<p className="text-xs">Download on</p>
							<h2 className="text-md font-bold">Play Store</h2>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default index;
