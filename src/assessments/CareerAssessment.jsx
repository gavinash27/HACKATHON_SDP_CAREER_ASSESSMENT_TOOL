import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CareerAssessment() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const questions = [
    { q: "I enjoy solving logical or analytical problems.", weight: 2 },
    { q: "I like working with computers and technology.", weight: 2 },
    { q: "I prefer tasks requiring logical thinking.", weight: 2 },
    { q: "I enjoy understanding how systems or machines work.", weight: 2 },
    { q: "I am comfortable learning new software or tools.", weight: 2 },
    { q: "I am detail-oriented when working on projects.", weight: 2 },
    { q: "I enjoy tasks that require precision and accuracy.", weight: 2 },
    { q: "I prefer structured tasks with clear steps.", weight: 2 },
    { q: "I like analyzing data or patterns.", weight: 2 },
    { q: "I enjoy working independently on technical tasks.", weight: 2 }
  ];

  const handleSubmit = () => {
    const loggedUser = localStorage.getItem("loggedInUser");
    let attempts = JSON.parse(localStorage.getItem("attempts")) || [];

    attempts.push({
      user: loggedUser,
      testType: "Career Assessment",
      score,
      date: new Date().toISOString()
    });

    localStorage.setItem("attempts", JSON.stringify(attempts));
    alert("Career Assessment Completed!");
    navigate("/test-result");
  };

  return (
    <div>
      <h2 className="form-title">Career Assessment Test</h2>

      {questions.map((item, index) => (
        <div key={index} className="form-row">
          <p>{item.q}</p>

          <select
            onChange={(e) =>
              setScore((prev) => prev + Number(e.target.value) * item.weight)
            }
          >
            <option value="0">Select</option>
            <option value="1">Strongly Disagree</option>
            <option value="2">Disagree</option>
            <option value="3">Neutral</option>
            <option value="4">Agree</option>
            <option value="5">Strongly Agree</option>
          </select>
        </div>
      ))}

      <button className="button" onClick={handleSubmit}>
        Submit Assessment
      </button>
    </div>
  );
}

export default CareerAssessment;
