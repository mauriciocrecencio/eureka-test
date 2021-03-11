import React from "react";
import { Address } from "../../interfaces/address";
import "./style.css";

export interface TableProps {
  adresses: Address[];
}

const Table = ({ adresses }: TableProps) => {
  console.log(adresses);
  return (
    <table className="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Estado</th>
          <th>Cidade</th>
          <th>CEP</th>
          <th>Bairro</th>
          <th>Rua</th>
          <th>Complemento</th>
        </tr>
      </thead>
      <tbody>
        {adresses.map((address, index) => {
          return (
            <tr key={index} className={index % 2 === 0 ? "pure-table-odd" : ""}>
              <td>{index}</td>
              <td>{address.state}</td>
              <td>{address.city}</td>
              <td>{address.cep}</td>
              <td>{address.neighborhood}</td>
              <td>{address.street}</td>
              <td>{address.complement}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
