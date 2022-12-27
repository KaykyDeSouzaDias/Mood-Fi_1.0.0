import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <head>
      {/* loads the entire Material Icons Variable Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        rel="stylesheet"
      />
    </head>
    <body className="appBody">
      <App />
    </body>
  </>
);
