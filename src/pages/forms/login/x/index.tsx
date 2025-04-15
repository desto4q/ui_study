import { useState } from "react";
import { onSubmit } from "~/methods/methods";
import { AnimatePresence, motion } from "motion/react";

function Index() {
	let [modal, setModal] = useState<boolean>(false);

	return (
		<div
			className="min-h-dvh flex duration-150"
			data-theme="black"
		>
			<div className="flex-1 flex relative px-4 justify-center">
				<div className=" flex flex-col  gap-4  justify-center md:grid  md:grid-cols-2">
					<div className="md:h-full w-full grid place-items-center md:p-12 ">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/960px-X_logo.jpg"
							alt=""
							className="size-20 md:size-full object-contain"
						/>
					</div>
					<div className="grid place-items-center ">
						<div className="flex flex-col gap-12">
							<h2 className="text-3xl font-bold">
								Happening Now
							</h2>
							<h3 className="text-2xl font-bold">Join Today</h3>
							<div className="flex flex-col gap-4">
								<button className="btn bg-white w-full text-black rounded-full">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
										alt=""
										className="size-6  object-contain"
									/>{" "}
									Sign In With Google
								</button>
								<button className="btn bg-white w-full text-black rounded-full">
									<img
										src="
                                    https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
										alt=""
										className="size-6 object-contain"
									/>{" "}
									Sign In With Apple
								</button>
								<div className="flex justify-center items-center gap-4">
									<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
									<span>Or</span>
									<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
								</div>
								<button className="btn bg-blue-600 w-full py-2 rounded-full">
									Create Account
								</button>
							</div>

							<div>
								<h3 className="font-bold">
									Already have an account? <span></span>
								</h3>
								<button
									className="btn bg-blue-600 w-full py-2 rounded-full mt-2"
									onClick={() => setModal(true)}
								>
									Sign In
								</button>
							</div>
						</div>
					</div>
				</div>

				<AnimatePresence>
					{modal && (
						<motion.main
							className="absolute inset-0 flex bg-blue-500/10 backdrop-blur-md z-20 px-4"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							onClick={(e) => {
								e.stopPropagation();
								setModal(!modal);
							}}
						>
							<form
								onClick={(e) => {
									e.stopPropagation();
								}}
								onSubmit={onSubmit}
								className="w-full m-auto max-w-xl flex gap-8 flex-col bg-base-100  px-4 md:px-24 py-12 rounded-xl relative"
							>
								<button
									type="button"
									className="btn btn-ghost btn-circle absolute left-6 top-6 text-xl"
									onClick={() => setModal(false)}
								>
									x
								</button>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/960px-X_logo.jpg"
									alt=""
									className="size-18 mx-auto"
								/>
								<button className="btn bg-white w-full text-black rounded-full">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
										alt=""
										className="size-6 mr-2 object-contain"
									/>{" "}
									Sign In With Google
								</button>
								<button className="btn bg-white w-full text-black rounded-full">
									<img
										src="
                                    https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
										alt=""
										className="size-6 mr-2 object-contain"
									/>
									Sign In With Apple
								</button>
								<div className="flex justify-center items-center gap-4">
									<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
									<span>Or</span>
									<span className="flex-1 h-0.5 bg-neutral-500/25"></span>
								</div>
								<div>
									<input
										className="input w-full rounded-md py-4 h-auto"
										placeholder="Phone, email, or username"
									/>
								</div>
								<button className="btn bg-white w-full text-black rounded-full h-auto py-2">
									Next
								</button>
								<button className="btn btn-outline rounded-full h-auto py-2">
									Forgot Password
								</button>
								<div>
									Dont have an account{" "}
									<span className="text-blue-500 cursor-pointer">
										Sign Up
									</span>
								</div>
							</form>
						</motion.main>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Index;
