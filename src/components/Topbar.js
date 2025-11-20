import React from "react";

const Topbar = () => {
  return (
    <header className="topbar" role="banner">
      <div className="topbar-search">
        <input
          type="search"
          aria-label="Search"
          placeholder="Search tourist, vendor, SOS, destination..."
        />
      </div>
      <div className="topbar-right">
        <button className="topbar-pill" aria-pressed="false">
          This Week
        </button>
        <button className="primary-btn" title="Download CSV report">
          Download Report
        </button>

        <button className="outline-btn" aria-label="Notifications">
          <span style={{marginRight:8}}>🔔</span>
          <span className="chip neutral">3</span>
        </button>

        <div className="topbar-user" role="img" aria-label="Admin profile">
          <div className="topbar-avatar">AD</div>
          <div className="topbar-user-info">
            <div className="topbar-user-name">Admin</div>
            <div className="topbar-user-role">Jharkhand</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

