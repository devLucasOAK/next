function Table() {
    return (
        <div>
             <table>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
            <th>Age</th>
            </tr>
            <tr>
            <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
            </tr>
        </table> 

        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }

          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }   
        `}</style>
        </div>
    )
  }

  export default Table