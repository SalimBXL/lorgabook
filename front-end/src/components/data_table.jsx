import React from 'react'
import { titleize } from '../utils/text';

function DataTable({datas, tableName}) {
  const printTable = () => {
    const categoryNames = Object.keys(datas[0]);
    return (<table>
      <thead>
        <tr>
          {categoryNames.map(categoryName => <th key={categoryName}>{titleize(categoryName)}</th>)}
        </tr>
      </thead>
      <tbody>
        {datas.map(data => <tr key={data.id}>
          {categoryNames.map(key => <td>{data[key]}</td>)}
        </tr>)}
      </tbody>
    </table>);
  }
  return (<div>
    <h3>{tableName.toUpperCase()} ({datas.length})</h3>
    {datas.length > 0 && printTable()}
  </div>);
}

export default DataTable;