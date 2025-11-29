import { useState, useEffect } from "react";

function CareerRecommendations() {
  const [careerList, setCareerList] = useState([]);
  const [newCareer, setNewCareer] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Load existing recommendations
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("careerRecommendations")) || [];
    setCareerList(saved);
  }, []);

  // Save recommendations to localStorage
  const saveRecommendations = (updatedList) => {
    setCareerList(updatedList);
    localStorage.setItem("careerRecommendations", JSON.stringify(updatedList));
  };

  // Add new recommendation
  const handleAdd = () => {
    if (!newCareer.trim() || !newDescription.trim()) {
      alert("Please fill out both fields");
      return;
    }

    const updated = [
      ...careerList,
      { id: Date.now(), title: newCareer, description: newDescription }
    ];

    saveRecommendations(updated);

    setNewCareer("");
    setNewDescription("");
    alert("Recommendation added!");
  };

  // Delete recommendation
  const handleDelete = (id) => {
    const updated = careerList.filter((item) => item.id !== id);
    saveRecommendations(updated);
    alert("Recommendation deleted!");
  };

  return (
    <div>
      <h2 className="form-title">Manage Career Recommendations</h2>

      {/* --- Add New Recommendation --- */}
      <div className="form-row">
        <input
          type="text"
          placeholder="Career Title"
          value={newCareer}
          onChange={(e) => setNewCareer(e.target.value)}
        />
      </div>

      <div className="form-row">
        <textarea
          placeholder="Career Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>

      <button className="button" onClick={handleAdd}>
        Add Recommendation
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* --- Existing Recommendations --- */}
      <h3>Existing Recommendations</h3>

      {careerList.length === 0 ? (
        <p>No recommendations added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {careerList.map((item) => (
            <li
              key={item.id}
              style={{
                background: "#eef3ff",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            >
              <strong>{item.title}</strong>
              <p>{item.description}</p>

              <button
                className="button secondary"
                style={{ marginTop: "5px" }}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CareerRecommendations;
