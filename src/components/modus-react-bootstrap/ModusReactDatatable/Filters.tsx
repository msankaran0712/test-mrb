import { useState } from "react";

import { Form } from "@trimbleinc/modus-react-bootstrap";
import { DataTableFilterProps } from "@trimbleinc/modus-react-bootstrap/esm/types";

import { DataType } from "./MakeData";

export function TextFilter({
  column: { setFilter, render },
}: DataTableFilterProps<DataType>) {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Form.Group controlId="textFilter">
      <Form.Label>{render("Header")}</Form.Label>
      <div className="input-with-icon-left">
        <Form.Control
          as="input"
          placeholder={render("Header")}
          value={filterValue || ""}
          onChange={(e) => {
            setFilter(e.target.value || undefined);
            setFilterValue(e.target.value);
          }}
        ></Form.Control>
        <div className="input-icon">
          <i className="modus-icons material-icons">search</i>
        </div>
      </div>
    </Form.Group>
  );
}

export function SliderFilter({
  column: { setFilter, render },
}: DataTableFilterProps<DataType>) {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Form.Group controlId="sliderFilter">
      <Form.Label>{render("Header")}</Form.Label>
      <Form.Control
        type="range"
        min={0}
        max={100}
        value={filterValue || 0}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
          setFilterValue(e.target.value);
        }}
        custom
      />
    </Form.Group>
  );
}

export function SelectFilter({
  column: { setFilter, render },
}: DataTableFilterProps<DataType>) {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Form.Group controlId="selectFilter">
      <Form.Label>{render("Header")}</Form.Label>
      <Form.Control
        as="select"
        custom
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
          setFilterValue(e.target.value);
        }}
      >
        <option value="">All</option>
        <option>Pending</option>
        <option>Verified</option>
        <option>Rejected</option>
      </Form.Control>
    </Form.Group>
  );
}
