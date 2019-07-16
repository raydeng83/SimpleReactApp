import React, { Component } from 'react';

class Table extends Component {

    render() {
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
            )
        }

        const TableBody = props => {
            const rows = props.data.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.job}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => props.removeCharacter(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })

            return <tbody>{rows}</tbody>
        }

        const { data, removeCharacter } = this.props;

        return (
            <table className="table">
                <TableHeader />
                <TableBody data={data} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table