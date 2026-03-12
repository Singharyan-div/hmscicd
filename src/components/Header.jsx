import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="header">
      <h1>Hospital Management System</h1>

      <nav>
        {!currentUser ? (
          <>
            <button className="nav-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="nav-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <button className="nav-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;