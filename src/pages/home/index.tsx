function index() {
	return (
		<div className="min-h-dvh flex">
			<div className="flex-1 grid place-items-center">
				<div className="text-center flex flex-col items-center px-4">
					<h3 className="max-w-md text-xs md:text-xl">
						Hey there! Happy to have you here I’m Destiny, and
						welcome to my{" "}
						<span className="font-bold bg-gradient-to-r from-primary to-accent/80 bg-clip-text text-transparent uppercase  ">
							Space
						</span>
					</h3>
					<h1 className=" text-3xl md:text-8xl font-bold capitalize mt-2">
						Frontend Developer
					</h1>
					<div className="w-[186px] bg-base-200 aspect-[4/5] mt-2 drop-shadow-md"></div>
				</div>
			</div>
			{/* <div>
				<h2>Ui Study</h2>
			</div> */}
		</div>
	);
}

export default index;
