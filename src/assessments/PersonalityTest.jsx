import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalityTest() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const questions = [
    { q: "I prefer working in a team rather than alone.", weight: 2 },
    { q: "I consider myself a creative thinker.", weight: 2 },
    { q: "I communicate my ideas confidently.", weight: 2 },
    { q: "I enjoy social interactions.", weight: 2 },
    { q: "I stay calm during difficult situations.", weight: 2 },
    { q: "I try to understand others' feelings.", weight: 2 },
    { q: "I adapt quickly to changes.", weight: 2 },
    { q: "I enjoy trying new activities.", weight: 2 },
    { q: "I prefer organized tasks over spontaneous ones.", weight: 2 },
    { q: "I consider myself open-minded and curious.", weight: 2 }
  ];

  const handleSubmit = () => {
    const loggedUser = localStorage.getItem("loggedInUser");
    let attempts = JSON.parse(localStorage.getItem("attempts")) || [];

    attempts.push({
      user: loggedUser,
      testType: "Personality Test",
      score,
      date: new Date().toISOString()
    });

    localStorage.setItem("attempts", JSON.stringify(attempts));
    alert("Personality Test Completed!");
    navigate("/test-result");
  };

  return (
    <div>
      <h2 className="form-title">Personality Test</h2>

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
        Submit Personality Test
      </button>
    </div>
  );
}

export default PersonalityTest;
