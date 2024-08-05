export default function FormsAndActions() {
	return (
		<div className="flex flex-col mt-20 px-5">
			<header className="text-center mb-10">
				<h1 className="text-2xl font-bold">Forms & Actions</h1>
			</header>
			<form className="flex flex-col gap-2">
				<input type="email" placeholder="Email" required />
				<input type="username" placeholder="Username" required />
				<input type="password" placeholder="Password" required />
				<button>Log in</button>
			</form>
		</div>
	);
}
