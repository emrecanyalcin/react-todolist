import React from 'react';



export default class TableBody extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tbody>
                {list.map((item, index) => {
                    return (
                        <tr key={`product-${index}`}>

                            <td>{item.job}</td>
                            
                            <td><input type="checkbox"></input></td>
                            <td><input type="checkbox"></input></td>
                        </tr>
                    );
                })}
            </tbody>);
    }
}