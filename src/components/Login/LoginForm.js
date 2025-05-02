import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function LoginForm({ onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotInput, setForgotInput] = useState("");

  const validateInput = () => {
    const tempErrors = {};
    setAuthError("");

    if (!emailOrPhone.trim()) {
      tempErrors.emailOrPhone = "This field is required";
    } else {
      const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailOrPhone);
      const isPhone = /^(\+62|0)8[1-9][0-9]{6,9}$/.test(emailOrPhone);
      if (!isGmail && !isPhone) {
        tempErrors.emailOrPhone =
          "Masukkan Email yang valid / Nomor Handphone anda";
      }
    }

    if (!password.trim()) {
      tempErrors.password = "This field is required";
    }

    setErrors(tempErrors);
    setSubmitted(true);

    if (Object.keys(tempErrors).length === 0) {
      if (emailOrPhone === "user@gmail.com" && password === "password123") {
        console.log("Login berhasil!");
      } else {
        setAuthError("Username dan password tidak cocok!");
      }
    }
  };

  const validateForgotPassword = () => {
    const tempErrors = {};
    if (!forgotInput.trim()) {
      tempErrors.forgotInput = "This field is required";
    } else {
      const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(forgotInput);
      const isPhone = /^(\+62|0)8[1-9][0-9]{6,9}$/.test(forgotInput);
      if (!isGmail && !isPhone) {
        tempErrors.forgotInput =
          "Masukkan Email yang valid / Nomor Handphone anda";
      }
    }
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      console.log("Instruksi reset dikirim!");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {isForgotPassword ? (
          <>
            <h2>Lupa Password</h2>
            <label>Nomor HP / Email</label>
            <input
              type="text"
              placeholder="Masukkan Nomor HP / Email"
              value={forgotInput}
              onChange={(e) => {
                setForgotInput(e.target.value);
                setErrors({});
              }}
            />
            {errors.forgotInput && (
              <p className="error">{errors.forgotInput}</p>
            )}

            <button onClick={validateForgotPassword} className="login-btn">
              Kirim
            </button>
            <p
              className="forgot-password"
              onClick={() => {
                setIsForgotPassword(false);
                setForgotInput("");
                setErrors({});
              }}
            >
              Kembali ke Login
            </p>
          </>
        ) : (
          <>
            <h2>Log in / Masuk</h2>
            <label>Nomor HP / Email</label>
            <input
              type="text"
              placeholder="Masukkan Nomor HP / Email"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            {errors.emailOrPhone && (
              <p className="error">{errors.emailOrPhone}</p>
            )}

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

            {authError && <p className="error">{authError}</p>}

            <button onClick={validateInput} className="login-btn">
              Login
            </button>

            <p
              className="forgot-password"
              onClick={() => {
                setIsForgotPassword(true);
                setErrors({});
              }}
            >
              Lupa Password
            </p>

            {!submitted && (
              <p className="register-text">
                Belum punya akun?{" "}
                <span className="highlight" onClick={onSwitch}>
                  <a>Daftar</a>
                </span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
