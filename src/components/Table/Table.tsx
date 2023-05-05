import Table from "react-bootstrap/Table";
import { v4 } from "uuid";

import { TableItem } from "./TableItem";
import { Row } from "../../types/RowItem.types";

type Props = {
  data: Row[];
  handleEdit: (data: Row) => void;
};

export const CustomTable = (props: Props) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Gender</th>
          <th>Email</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((row) => {
          const id = v4().toString();
          return (
            <TableItem
              key={row.login.uuid}
              data={row}
              handleEdit={props.handleEdit}
            />
          );
        })}
      </tbody>
    </Table>
  );
};
