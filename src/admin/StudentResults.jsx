import { useEffect, useState } from "react";

function StudentResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem("attempts")) || [];
    setResults(attempts);
  }, []);

  return (
    <div>
      <h2 className="form-title">All Student Results</h2>

      {results.length === 0 ? (
        <p>No test attempts found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 10 }}>
          <thead style={{ background: "#d8e7ff" }}>
            <tr>
              <th>Student</th>
              <th>Test Type</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, index) => (
              <tr key={index}>
                <td>{r.user}</td>
                <td>{r.testType}</td>
                <td>{r.score}</td>
                <td>{new Date(r.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentResults;
