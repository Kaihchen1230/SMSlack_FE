import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import './react-boostrap-table.css';

class GroupTable extends Component {
  render() {
    return (
      <div>

        <BootstrapTable data={this.props.data}>

          <TableHeaderColumn isKey dataField='Group'>
            Group
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Message'>
            Message
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Time'>
            Time
          </TableHeaderColumn>

        </BootstrapTable>
      </div>
    );
  }
}
export default GroupTable;
