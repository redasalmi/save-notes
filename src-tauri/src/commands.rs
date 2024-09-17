use tauri::ipc::Response;

#[tauri::command]
pub fn read_notes_file() -> Response {
    let data = std::fs::read("./src/notes.json").unwrap();
    tauri::ipc::Response::new(data)
}
