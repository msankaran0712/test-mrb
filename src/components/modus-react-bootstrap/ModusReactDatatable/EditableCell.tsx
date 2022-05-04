import { useState, useEffect } from "react";
import { Form } from "@trimbleinc/modus-react-bootstrap";
import { DataTableCellProps } from "@trimbleinc/modus-react-bootstrap/esm/types";
import { DataType } from "./MakeData";

type EditableCellProps = DataTableCellProps<DataType> & {
  updateData: (rowIndex: number, columnId: string, value: any) => void;
};

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}: EditableCellProps & {}) => {
  const [value, setValue] = useState(initialValue);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleEdit = (e: any) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      exitEditMode();
    } else {
      setValue(e.target.value);
    }
  };

  const handleBlur = () => {
    exitEditMode();
  };

  const exitEditMode = () => {
    setEditMode(false);
    updateData(index, id, value);
  };

  return (
    <div
      onClick={handleEdit}
      className={"d-flex align-items-center cell-editable".concat(
        editMode ? " cell-editing" : ""
      )}
    >
      {editMode ? (
        <Form.Control
          as="input"
          defaultValue={value}
          size="lg"
          className="border-0"
          autoFocus
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
        />
      ) : (
        <span data-toggle="tooltip" data-placement="top" title={value}>
          {value}
        </span>
      )}
    </div>
  );
};

export default EditableCell;
