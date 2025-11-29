import { useEffect, useState } from "react";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setStudents(users);
  }, []);

  return (
    <div>
      <h2 className="form-title">Registered Students</h2>

      {students.length === 0 ? (
        <p>No registered students found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 10 }}>
          <thead style={{ background: "#d8e7ff" }}>
            <tr>
              <th>Email</th>
              <th>Registered On</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.email}</td>
                <td>{new Date(student.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudents;
