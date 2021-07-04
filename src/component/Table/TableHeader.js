import React from 'react';
import { } from 'reactstrap';


export default class TableHeader extends React.Component {
    render() {
        return (
            <thead >
                <tr>
                    <th>Job</th>
                    <th>Done</th>
                    <th>Not Done</th>
                </tr>
            </thead>
        );
    }
}