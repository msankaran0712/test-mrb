import { Alert } from "@trimbleinc/modus-react-bootstrap";

const ModusReactTableInfo = (
  <Alert key="a1" variant="primary">
    <ul className="m-0 ">
      <li>
        To know more about the Table visit{" "}
        <a
          href="https://modus-react-bootstrap.trimble.com/components/tables/#datatable"
          className="ml-1 mr-1 text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <u> Modus React Bootstrap site.</u>
        </a>
      </li>
      <li>
        Please check the{" "}
        <a
          href="https://github.com/ag-grid/ag-grid/issues"
          className="ml-1 mr-1 text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <u>GitHub page</u>
        </a>{" "}
        to find the issues already logged.
      </li>
    </ul>
  </Alert>
);

export default ModusReactTableInfo;
