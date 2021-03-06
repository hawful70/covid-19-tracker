import React from "react";
import "./Table.css";
import numeral from "numeral";

const Table = ({ countries }) => {
    return (
        <div className="table">
            <table>
                <tbody>
                    {countries.map((country, index) => (
                        <tr key={index}>
                            <td>{country.country}</td>
                            <td>
                                <strong>{numeral(country.cases).format("0,0")}</strong>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
