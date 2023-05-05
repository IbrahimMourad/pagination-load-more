import { Image } from "react-bootstrap";
import { Row } from "../../types/RowItem.types";

type Props = { id?: string; handleEdit: (data: Row) => void; data: Row };

export const TableItem = (props: Props) => {
  return (
    <tr>
      <td>
        <Image src={props.data.picture.thumbnail} roundedCircle />
      </td>
      <td>{props.data.gender}</td>
      <td>{props.data.email}</td>
      <td>
        <button
          className="btn btn-secondary  m-a"
          onClick={() => props.handleEdit(props.data)}
        >
          edit
        </button>
      </td>
    </tr>
  );
};
