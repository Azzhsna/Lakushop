import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Login.css";

function ModalLogin({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-popup">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {isRegistering ? (
          <RegisterForm onSwitch={() => setIsRegistering(false)} />
        ) : (
          <LoginForm
            onSwitch={() => setIsRegistering(true)}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default ModalLogin;
