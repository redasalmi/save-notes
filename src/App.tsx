import { Router, Route } from "@solidjs/router";
import { NotesLayout } from "./layouts/notes";
import { Notes } from "./routes/notes";
import { Note } from "./routes/note";
import { open } from "@tauri-apps/plugin-dialog";
import { homeDir, join } from "@tauri-apps/api/path";
import { create, BaseDirectory } from "@tauri-apps/plugin-fs";

const openDialog = async () => {
	const homeDirPath = await homeDir();
	const selectedDir = await open({
		multiple: false,
		directory: true,
		defaultPath: homeDirPath,
	});
	if (!selectedDir) {
		return;
	}

	const filePath = await join(selectedDir, "khra.txt");
	const file = await create(filePath, {
		baseDir: BaseDirectory.Home,
	});
	await file.write(new TextEncoder().encode("Hello world"));
	await file.close();
};

export const App = () => {
	return (
		<div>
			<h1>damn</h1>
			<button type="button" onClick={openDialog}>
				khra
			</button>
		</div>
	);

	// return (
	// 	<Router>
	// 		<Route path="/notes" component={NotesLayout}>
	// 			<Route path="/" component={Notes} />
	// 			<Route path="/:slug" component={Note} />
	// 		</Route>
	// 	</Router>
	// );
};
