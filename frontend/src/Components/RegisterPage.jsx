import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = () => {
    const rawUsers = localStorage.getItem("users");
    const users = rawUsers ? JSON.parse(rawUsers) : [];

    if (users.find((u) => u.username === formData.username)) {
      setPostResponse("Username already exists");
      return;
    }

    users.push({ username: formData.username, password: formData.password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
          required
        />
        <br />
        <button>Create account</button>
      </form>
      {postResponse && <p style={{ color: "red" }}>{postResponse}</p>}
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}
