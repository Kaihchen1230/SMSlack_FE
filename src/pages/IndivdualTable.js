import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import './react-boostrap-table.css';

class IndivdualTable extends Component {
  render() {
    return (
      <div>

        <BootstrapTable data={this.props.data}>

          <TableHeaderColumn isKey dataField='Name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Time'>
            Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Message'>
            Message
          </TableHeaderColumn>

        </BootstrapTable>
      </div>
    );
  }
}
export default IndivdualTable;
