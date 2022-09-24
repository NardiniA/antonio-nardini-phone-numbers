import { copyText } from '@/utils/copyText';
import React from 'react';

const Table = ({ numbers, isLoading }) => {
    const handleClick = (tel) => {
        copyText(tel.replace(")", " ").replace("(", ""));
    }

    if (isLoading) return (
        <div className="row table-animation">
            <div className="column lg-12">
                <div className="table-responsive skeleton">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div></div>
                                </th>
                                <th>
                                    <div></div>
                                </th>
                                <th>
                                    <div></div>
                                </th>
                                <th>
                                    <div></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3].map((row, index) => (
                                <tr key={row + "table_skeleton_key" + index}>
                                    <td>
                                        <div></div>
                                    </td>
                                    <td>
                                        <div></div>
                                    </td>
                                    <td>
                                        <div></div>
                                    </td>
                                    <td>
                                        <div></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    else if (numbers) return (
        <div className="row table-animation">
            <div className="column lg-12">
                <div className="table-responsive table-animation">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Tel</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map((num, index) => (
                                <tr key={num.name + "phone_number_table_key" + index}>
                                    {num.name && <td>{num.name}</td>}
                                    {num.address && <td>{num.address}</td>}
                                    {num.tel && <td>{num.tel.replace(")", ") ")}</td>}
                                    <td>
                                        <button className="table-icon" onClick={() => handleClick(num.tel)}>
                                            <i className="bx bx-copy"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table