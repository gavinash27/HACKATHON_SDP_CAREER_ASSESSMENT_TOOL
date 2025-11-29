import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((u) => u.email === email);
    if (exists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      email: email.trim().toLowerCase(),   // normalize email
      password: password.trim(),
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/signin");
  };

  return (
    <div>
      <h2 className="form-title">Sign Up</h2>

      <div className="form-row">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-row">
        <button className="button" onClick={handleSignup}>
          Register
        </button>
      </div>

      <div className="helper">
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/signin")}>Sign In</span>
      </div>
    </div>
  );
}

export default SignUp;
