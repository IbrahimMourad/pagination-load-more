import { useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import { Image } from "react-bootstrap";

// import { TableItem } from "./TableItem";
import { CustomModal } from "../Modal/Modal";
import { Row } from "../../types/RowItem.types";

type Props = {
  data: Row[];
  handleEdit: (data: Row) => void;
};

export const CustomTable = (props: Props) => {
  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.data?.map((row) => {
            return (
              <tr key={row.login.uuid}>
                <td>
                  <Image src={row.picture.thumbnail} roundedCircle />
                </td>
                <td>{row.name?.first}</td>
                <td>{row.name?.last}</td>
                <td>{row.email}</td>
                <td>
                  <CustomModal
                    selectedItem={row}
                    handleEdit={props.handleEdit}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
