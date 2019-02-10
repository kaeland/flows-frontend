import React from "react";

const Table = props => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Machine</Table.HeaderCell>
          <Table.HeaderCell>7AM</Table.HeaderCell>
          <Table.HeaderCell>11AM</Table.HeaderCell>
          <Table.HeaderCell>3PM</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Temperature Sensor</Table.Cell>
          <Table.Cell />
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
        <Table.Row>
          <Table.Cell>Flow Sensor</Table.Cell>
          <Table.Cell />
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default Table;
