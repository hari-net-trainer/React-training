import React, { Component } from 'react'

export default class StatefulApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Hari',
                    'age': 35
                },
                {
                    'id': 2,
                    'name': 'shiva',
                    'age': 33
                },
                {
                    'id': 3,
                    'name': 'balu',
                    'age': 30
                }
            ]
        }
    }

    render() {
        return (
            <>
                <h1>
                    Customer Details
                </h1>
                <table className="table table-hover table-striped">
                    <tbody>
                        {
                            this.state.data.map((person, index) => <TableRow data={person} />)
                        }
                    </tbody>
                </table>

            </>
        )
    }

}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
        </tr>
    )
}
