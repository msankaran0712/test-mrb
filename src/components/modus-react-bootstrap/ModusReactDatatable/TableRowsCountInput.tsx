import { Form } from "@trimbleinc/modus-react-bootstrap";

const TableRowsCountInput = ({ updateRowsCount }: any) => {
  return (
    <Form.Group controlId="formBasicEmail" style={{ width: "20%" }}>
      <Form.Label>Enter number of rows</Form.Label>
      <Form.Control
        as="input"
        placeholder="Placeholder Text"
        defaultValue={10000}
        onChange={(e) => {
          updateRowsCount(parseFloat(e.target.value));
        }}
      ></Form.Control>
    </Form.Group>
  );
};

export default TableRowsCountInput;
