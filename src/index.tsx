import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { defineCustomElements } from "@trimble-oss/modus-web-components/loader";
import ModusReactTable from "./components/modus-react-bootstrap/ModusReactDatatable/ModusReactTable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

defineCustomElements();
root.render(
  <React.StrictMode>
    <ModusReactTable />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
