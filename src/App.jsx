import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const Navigation = () => (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
    </nav>
);

const App = () => {
    return (
        <Router>
            <div style={{ padding: "1rem" }}>
              {/* Navigation Bar */}
                <Navigation />

                {/* Routes */}
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
