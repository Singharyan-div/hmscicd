import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <select required>
          <option value="">Select Role</option>
          <option value="ADMIN">Admin</option>
          <option value="DOCTOR">Doctor</option>
          <option value="PATIENT">Patient</option>
        </select>

        <button type="submit" className="auth-btn">
          Create Account
        </button>
      </form>

      {/* Switch link */}
      <p className="switch-auth">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;