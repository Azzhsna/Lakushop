import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function LoginForm({ onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [forgotInput, setForgotInput] = useState("");
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleForgotChange = (e) => {
    setForgotInput(e.target.value);
    setErrors({});
  };

  const isValidEmailOrPhone = (value) => {
    const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
    const isPhone = /^(\+62|0)8[1-9][0-9]{6,9}$/.test(value);
    return isGmail || isPhone;
  };

  const validateLogin = () => {
    const { emailOrPhone, password } = loginData;
    const newErrors = {};

    setAuthError("");
    setSubmitted(true);

    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = "This field is required";
    } else if (!isValidEmailOrPhone(emailOrPhone)) {
      newErrors.emailOrPhone =
        "Masukkan Email yang valid / Nomor Handphone anda";
    }

    if (!password.trim()) {
      newErrors.password = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (emailOrPhone === "user@gmail.com" && password === "password123") {
      console.log("Login berhasil!");
    } else {
      setAuthError("Username dan password tidak cocok!");
    }
  };

  const validateForgotPassword = () => {
    const newErrors = {};

    if (!forgotInput.trim()) {
      newErrors.forgotInput = "This field is required";
    } else if (!isValidEmailOrPhone(forgotInput)) {
      newErrors.forgotInput =
        "Masukkan Email yang valid / Nomor Handphone anda";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Instruksi reset dikirim!");
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
              name="forgotInput"
              placeholder="Masukkan Nomor HP / Email"
              value={forgotInput}
              onChange={handleForgotChange}
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
              name="emailOrPhone"
              placeholder="Masukkan Nomor HP / Email"
              value={loginData.emailOrPhone}
              onChange={handleInputChange}
            />
            {errors.emailOrPhone && (
              <p className="error">{errors.emailOrPhone}</p>
            )}

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password"
                value={loginData.password}
                onChange={handleInputChange}
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

            <button onClick={validateLogin} className="login-btn">
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
