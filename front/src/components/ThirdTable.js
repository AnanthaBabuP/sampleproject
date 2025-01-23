function ThirdTable({ cars, onUpdate, onDelete }) {
    return (
      <div>
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Basic Amount</th>
              <th>Tax</th>
              <th>Max Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.model}</td>
                <td>
                  <input
                    type="number"
                    placeholder="Basic Amount"
                    value={data.basicAmount || 0}
                    onChange={(e) => onUpdate(index, "basicAmount", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Tax"
                    value={data.tax || 0}
                    onChange={(e) => onUpdate(index, "tax", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Max Amount"
                    value={data.maxAmount || 0}
                    onChange={(e) => onUpdate(index, "maxAmount", e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ThirdTable;
  