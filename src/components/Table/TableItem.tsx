import { Image } from "react-bootstrap";
import { Row } from "../../types/RowItem.types";

type Props = {
  id?: string;
  data: Row;
  setSelected: (data: Row) => void;
  handleShow: () => void;
};

export const TableItem = (props: Props) => {
  return (
    <tr>
      <td>
        <Image src={props.data.picture.thumbnail} roundedCircle />
      </td>
      <td>{props.data.gender}</td>
      <td>{props.data.email}</td>
      <td>{/* <CustomModal setSelected={setSelected} /> */}</td>
    </tr>
  );
};
