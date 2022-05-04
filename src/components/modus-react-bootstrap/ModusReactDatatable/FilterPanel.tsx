import { useCallback, useRef, useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Chip,
} from "@trimbleinc/modus-react-bootstrap";

import { DataTableFilterPanelProps } from "@trimbleinc/modus-react-bootstrap/esm/types";

export default function FilterPanel<T extends Record<string, unknown>>(
  props: DataTableFilterPanelProps<T>
) {
  const {
    filterColumns,
    activeFilters,
    globalFilter,
    resetFilter,
    setGlobalFilter,
  } = props;
  const ref = useRef(null);

  const DismissibleChip = ({ label, onClose, ...props }: any) => {
    const [show, setShow] = useState(true);

    const handleClose = useCallback(() => {
      setShow(!show);
      onClose();
    }, [setShow, show, onClose]);

    return (
      <Chip
        label={label}
        onClose={handleClose}
        show={show}
        variant="outline"
        type="input"
        className="m-1"
      ></Chip>
    );
  };

  return (
    <div className="d-flex justify-content-start flex-column">
      <h3>DataTableFilters</h3>
      <div style={{ minWidth: "170px", lineHeight: 2 }} ref={ref}>
        <Container style={{ width: "100%" }} className="p-1 m-0">
          <Row xs={1} md={2}>
            {filterColumns.map((column) => (
              <div key={column.id}>
                <Col>{column.render("Filter")}</Col>
              </div>
            ))}
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="globalFilter1" className="w-50">
                <Form.Label>Search All</Form.Label>
                <div className="d-flex input-with-icon-left">
                  <Form.Control
                    as="input"
                    type="search"
                    placeholder="Search All"
                    value={globalFilter || ""}
                    onChange={(e) => {
                      setGlobalFilter(e.target.value || undefined);
                    }}
                  ></Form.Control>
                  <div className="input-icon">
                    <i className="material-icons">search</i>
                  </div>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <div>
          Active DataTableFilters:
          {filterColumns.map((column) => {
            const filter = activeFilters.find(
              (f: { id: any }) => f.id === column.id
            );
            const value = filter && filter.value;
            return (
              value && (
                <DismissibleChip
                  key={column.id}
                  label={column
                    .render("Header")
                    .toString()
                    .concat(": ", filter.value)}
                  onClose={() => resetFilter(column.id)}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
