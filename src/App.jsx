import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutHospital from "./pages/AboutHospital";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";

const ProtectedRoute = ({ children, role }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<HomePage />}>
          
          {/* Default content inside Pbody */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="about" element={<AboutHospital />} />
          <Route path="contact" element={<Contact />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* Admin Route */}
          <Route
            path="admin"
            element={
              <ProtectedRoute role="ADMIN">
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Doctor Route */}
          <Route
            path="doctor"
            element={
              <ProtectedRoute role="DOCTOR">
                <Doctor />
              </ProtectedRoute>
            }
          />

          {/* Patient Route */}
          <Route
            path="patient"
            element={
              <ProtectedRoute role="PATIENT">
                <Patient />
              </ProtectedRoute>
            }

          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;