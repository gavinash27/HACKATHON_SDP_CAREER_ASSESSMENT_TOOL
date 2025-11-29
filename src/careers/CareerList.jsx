import { useNavigate } from "react-router-dom";

function CareerList() {
  const navigate = useNavigate();

  const careers = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Data Scientist" },
    { id: 3, title: "Graphic Designer" }
  ];

  return (
    <div>
      <h2 className="form-title">Career Options</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {careers.map((career) => (
          <li
            key={career.id}
            className="career-item"
            onClick={() => navigate(`/career-details/${career.id}`)}
            style={{ cursor: "pointer", margin: "10px 0" }}
          >
            <strong>• {career.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CareerList;
