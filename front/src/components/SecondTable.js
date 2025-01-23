function SecondTable({ pendingCars, onUpdate, onDelete }) {
    return (
      <div>
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingCars.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.model}</td>
                <td>
                  <button onClick={() => onUpdate(index)}>Update</button>
                  <button onClick={() => onDelete(index)} style={{ marginLeft: "10px", color: "red" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default SecondTable;
  