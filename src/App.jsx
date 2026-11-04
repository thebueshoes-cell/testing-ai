import { useState } from "react";

function BrandMark() {
  return (
    <a className="brand" href="#login" aria-label="Northstar home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3.5 19.5 12.5 28.5 16l-9 3.5-3.5 9-3.5-9L3.5 16l9-3.5L16 3.5Z"
            fill="currentColor"
          />
          <circle cx="16" cy="16" r="2.4" fill="white" />
        </svg>
      </span>
      <span>northstar</span>
    </a>
  );
}

function AuthForm({ mode, onModeChange }) {
  const isRegister = mode === "register";
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      isRegister
        ? "Your details look good. Account creation is not connected yet."
        : "Your details look good. Sign-in is not connected yet.",
    );
  }

  function switchMode(nextMode) {
    setMessage("");
    setShowPassword(false);
    onModeChange(nextMode);
  }

  return (
    <section className="form-panel" aria-labelledby="form-title">
      <div className="form-content">
        <div className="mobile-brand">
          <BrandMark />
        </div>
        <p className="eyebrow">{isRegister ? "GET STARTED" : "WELCOME BACK"}</p>
        <h1 id="form-title">
          {isRegister ? "Create your account" : "Sign in to your account"}
        </h1>
        <p className="form-description">
          {isRegister
            ? "A few details and you're ready to go."
            : "Your next great idea is just around the corner."}
        </p>

        <div className="mode-switch" role="tablist" aria-label="Account action">
          <button
            className={!isRegister ? "mode-tab active" : "mode-tab"}
            type="button"
            role="tab"
            aria-selected={!isRegister}
            onClick={() => switchMode("login")}
          >
            Sign in
          </button>
          <button
            className={isRegister ? "mode-tab active" : "mode-tab"}
            type="button"
            role="tab"
            aria-selected={isRegister}
            onClick={() => switchMode("register")}
          >
            Create account
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <label className="field">
              <span>Full name</span>
              <input
                autoComplete="name"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
          )}

          <label className="field">
            <span>Email address</span>
            <input
              autoComplete="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <span className="password-wrap">
              <input
                autoComplete={isRegister ? "new-password" : "current-password"}
                minLength={8}
                name="password"
                placeholder="At least 8 characters"
                required
                type={showPassword ? "text" : "password"}
              />
              <button
                className="password-toggle"
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </span>
          </label>

          {!isRegister && (
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <button
                className="text-button"
                type="button"
                onClick={() =>
                  setMessage("Password reset is not connected yet.")
                }
              >
                Forgot password?
              </button>
            </div>
          )}

          {isRegister && (
            <label className="checkbox-label terms-label">
              <input type="checkbox" name="terms" required />
              <span>
                I agree to the <a href="#terms">Terms of Service</a> and{" "}
                <a href="#privacy">Privacy Policy</a>
              </span>
            </label>
          )}

          <button className="submit-button" type="submit">
            {isRegister ? "Create account" : "Sign in"}
            <span aria-hidden="true">→</span>
          </button>

          <p className="form-message" aria-live="polite">
            {message}
          </p>
        </form>

        <p className="switch-prompt">
          {isRegister ? "Already have an account?" : "New to Northstar?"}{" "}
          <button
            className="text-button"
            type="button"
            onClick={() => switchMode(isRegister ? "login" : "register")}
          >
            {isRegister ? "Sign in" : "Create an account"}
          </button>
        </p>
        <p className="secure-note">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2m-8 0h9v7h-9V7Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </svg>
          Your information is always kept private
        </p>
      </div>
    </section>
  );
}

function App() {
  const [mode, setMode] = useState("login");

  return (
    <main className="page-shell">
      <section className="visual-panel" aria-label="Northstar introduction">
        <div className="visual-top">
          <BrandMark />
          <span className="top-note">A little more clarity, every day.</span>
        </div>

        <div className="visual-copy">
          <span className="sparkle" aria-hidden="true">✳</span>
          <p className="visual-kicker">MAKE ROOM FOR WHAT MATTERS</p>
          <h2>
            Find your
            <br />
            <em>north star.</em>
          </h2>
          <p className="visual-description">
            Good things happen when your best ideas have a place to grow.
            Let&apos;s make it happen together.
          </p>
        </div>

        <div className="visual-bottom">
          <div className="avatar-stack" aria-hidden="true">
            <span>J</span>
            <span>M</span>
            <span>A</span>
            <span>+</span>
          </div>
          <p>
            <strong>Good company, great ideas.</strong>
            <br />
            Join a community building what&apos;s next.
          </p>
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="star star-one" aria-hidden="true">✳</div>
        <div className="star star-two" aria-hidden="true">✦</div>
      </section>

      <AuthForm mode={mode} onModeChange={setMode} />
    </main>
  );
}

export default App;
