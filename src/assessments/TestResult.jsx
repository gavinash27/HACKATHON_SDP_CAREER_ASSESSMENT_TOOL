import { useEffect, useState } from "react";

function TestResult() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser");

    const attempts = JSON.parse(localStorage.getItem("attempts")) || [];

    const myResults = attempts.filter((a) => a.user === loggedUser);

    setResults(myResults);
  }, []);

  return (
    <div>
      <h2 className="form-title">My Test Results</h2>

      {results.length === 0 ? (
        <p>No test results found. Please complete a test.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            background: "#f8f9ff",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        >
          <thead style={{ background: "#d8e7ff" }}>
            <tr>
              <th>Test Type</th>
              <th>Your Score</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {results.map((res, index) => (
              <tr key={index}>
                <td>{res.testType}</td>
                <td>{res.score}</td>
                <td>{new Date(res.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TestResult;
