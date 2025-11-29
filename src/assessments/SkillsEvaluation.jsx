import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SkillsEvaluation() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const questions = [
    { q: "I can solve technical or logical problems easily.", weight: 2 },
    { q: "I am good at planning and organizing tasks.", weight: 2 },
    { q: "I can communicate ideas clearly to others.", weight: 2 },
    { q: "I can manage time effectively.", weight: 2 },
    { q: "I can work efficiently under pressure.", weight: 2 },
    { q: "I quickly learn new tools or technologies.", weight: 2 },
    { q: "I can work both independently and in teams.", weight: 2 },
    { q: "I am confident during presentations.", weight: 2 },
    { q: "I create effective solutions for real problems.", weight: 2 },
    { q: "I can analyze information to make decisions.", weight: 2 }
  ];

  const handleSubmit = () => {
    const loggedUser = localStorage.getItem("loggedInUser");

    let attempts = JSON.parse(localStorage.getItem("attempts")) || [];

    attempts.push({
      user: loggedUser,
      testType: "Skills Evaluation",
      score,
      date: new Date().toISOString()
    });

    localStorage.setItem("attempts", JSON.stringify(attempts));

    alert("Skills Evaluation Completed!");
    navigate("/test-result");
  };

  return (
    <div>
      <h2 className="form-title">Skills Evaluation Test</h2>

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
        Submit Skills Evaluation
      </button>
    </div>
  );
}

export default SkillsEvaluation;
