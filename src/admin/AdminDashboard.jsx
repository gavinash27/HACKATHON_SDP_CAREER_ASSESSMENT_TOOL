import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <div>
      <h2 className="form-title">Admin Dashboard</h2>

      <div className="form-row">
        <button className="button" onClick={() => navigate("/admin/manage-tests")}>
          Manage Tests
        </button>
      </div>

      <div className="form-row">
        <button className="button" onClick={() => navigate("/admin/students")}>
          View Registered Students
        </button>
      </div>

      <div className="form-row">
        <button className="button" onClick={() => navigate("/admin/student-results")}>
          View Student Results
        </button>
      </div>

      <div className="form-row">
        <button className="button" onClick={() => navigate("/admin/edit-questions")}>
          Edit Questions
        </button>
      </div>

      <div className="form-row">
        <button className="button" onClick={() => navigate("/admin/recommendations")}>
          Manage Career Recommendations
        </button>
      </div>

      <div className="form-row">
  <button className="button" onClick={() => navigate("/admin/chat")}>
    View Student Queries
  </button>
</div>


      {/* LOGOUT */}
      <div className="form-row" style={{ marginTop: "20px" }}>
        <button className="button secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
