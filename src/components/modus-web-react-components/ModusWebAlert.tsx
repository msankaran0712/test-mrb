import "../node_modules/@trimble-oss/modus-web-components/dist/modus-web-components/modus-web-components.css";

export default function ModusWebAlert() {
  return (
    <div className="bg-dark">
      <modus-alert
        message="This is a light theme MWC Alert !"
        type="success"
        data-mwc-theme="light"
      />
      <modus-alert
        message="This is a dark theme MWC Alert !"
        type="success"
        data-mwc-theme="dark"
      />
    </div>
  );
}
