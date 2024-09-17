import { Router, Route } from "@solidjs/router";
import { NotesLayout } from "./layouts/notes";
import { Notes } from "./routes/notes";
import { Note } from "./routes/note";

export const App = () => {
	return (
		<Router>
			<Route path="/notes" component={NotesLayout}>
				<Route path="/" component={Notes} />
				<Route path="/:slug" component={Note} />
			</Route>
		</Router>
	);
};
