import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class TableContent extends React.Component {
    render() {
        const { data, onDelete} = this.props;
        return (
            <Table striped>
                <TableHeader />
                <TableBody list={data} onDelete={onDelete}/>
                
            </Table>
        );
    }
}