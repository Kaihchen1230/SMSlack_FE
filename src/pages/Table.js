import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import './react-boostrap-table.css';

class Table1 extends Component {
  render() {
    return (
      <div>

        <BootstrapTable data={this.props.data}>

          <TableHeaderColumn isKey dataField='Name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Email'>
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Phone Number'>
            Phone Number
          </TableHeaderColumn>

          <TableHeaderColumn dataField='Team Name'>
            Team Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Project Name'>
            Project Name
          </TableHeaderColumn>

        </BootstrapTable>
      </div>
    );
  }
}
export default Table1;
