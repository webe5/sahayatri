import React from "react";

const WelcomePage = ({ onContinue }) => {
  return (
    <div className="wp-wrapper">
      {/* Top bar */}
      <header className="wp-topbar">
        <div className="wp-brand">
          <span className="wp-logo">SY</span>
          <div className="wp-brand-text">
            <span className="wp-brand-title">SahaYatri</span>
            <span className="wp-brand-subtitle">
              Jharkhand Tourism Citizen & Admin Portal
            </span>
          </div>
        </div>

        <div className="wp-topbar-right">
          <button
            type="button"
            className="wp-topbar-link"
          >
            Accessibility
          </button>
          <button
            type="button"
            className="wp-topbar-link"
          >
            English
          </button>
          <button
            type="button"
            className="wp-topbar-cta"
            onClick={onContinue}
          >
            Admin Login
          </button>
        </div>
      </header>

      {/* Hero section */}
      <main className="wp-hero">
        <div className="wp-hero-overlay">
          <section className="wp-hero-left">
            <p className="wp-eyebrow">Jharkhand Tourism Department</p>
            <h1 className="wp-heading">
              Welcome to the
              <br />
              Jharkhand Tourism
              <br />
              Admin Portal
            </h1>

            <p className="wp-lead">
              Manage destinations, eco-trails, guides, vendors and safety
              operations for visitors across Jharkhand from a single secure
              console.
            </p>

            <button
              type="button"
              className="wp-primary-btn"
              onClick={onContinue}
            >
              Continue to Admin Login
            </button>

            <p className="wp-note">
              For authorised officials of Jharkhand Tourism only.
            </p>
          </section>

          <section className="wp-hero-right">
            <label className="wp-search-label">
              <span>Search the portal</span>
              <div className="wp-search-box">
                <input
                  type="text"
                  placeholder="Search tourist, vendor, destination or SOS..."
                />
                <button type="button">Search</button>
              </div>
            </label>

            <div className="wp-quick-links">
              <button type="button" className="wp-quick-link">
                Tourist Operations
              </button>
              <button type="button" className="wp-quick-link">
                Guides & Vendors
              </button>
              <button type="button" className="wp-quick-link">
                SOS & Safety
              </button>
              <button type="button" className="wp-quick-link">
                Analytics & Reports
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="wp-footer">
        © {new Date().getFullYear()} Jharkhand Tourism Department · Official
        administration portal
      </footer>
    </div>
  );
};

export default WelcomePage;
