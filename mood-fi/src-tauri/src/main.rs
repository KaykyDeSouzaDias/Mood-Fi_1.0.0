use tauri::Manager;

#[cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .setup(|app| {
          let splashscreen_window = app.get_window("splashscreen").unwrap();
          let main_window = app.get_window("main").unwrap();
          tauri::async_runtime::spawn(async move {
            std::thread::sleep(std::time::Duration::from_secs(5));

            splashscreen_window.close().unwrap();
            main_window.show().unwrap();
          });
          Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
