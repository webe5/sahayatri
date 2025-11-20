import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-hero card">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Overview of tourists, vendors, SOS alerts and key tourism metrics.
          </p>
        </div>
        <div style={{display:'flex', gap:12}}>
          <button className="primary-btn">New Report</button>
          <button className="outline-btn">Manage Alerts</button>
        </div>
      </div>

      {/* Top KPI cards */}
      <div className="grid grid-4">
        <div className="card kpi-card">
          <div className="kpi-label">Total Tourists</div>
          <div className="kpi-value">12,430</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-success">14% vs previous month</span>
            <span>Last 30 days</span>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Verified Vendors and Homestays</div>
          <div className="kpi-value">286</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-success">32 new this month</span>
            <span>DNK verified</span>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Active Eco-Trails</div>
          <div className="kpi-value">39</div>
          <div className="kpi-meta">
            <span>Across 11 districts</span>
            <span>3 trails under review</span>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Open SOS Alerts</div>
          <div className="kpi-value kpi-danger">3</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-warning">2 high priority</span>
            <button className="outline-btn small">Live safety view</button>
          </div>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-2 mt-24">
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <h3>Tourist Footfall by District (Last 90 Days)</h3>
              <p className="card-subtitle">
                Placeholder for bar or line chart. Shows which districts are
                driving tourism and eco trail usage.
              </p>
            </div>
            <button className="chip">Rolling 90 days</button>
          </div>
          <div className="chart-placeholder">
            Chart integration area
          </div>
        </div>
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <h3>Top Destinations by Bookings</h3>
              <p className="card-subtitle">
                Helps plan infrastructure, safety and promotion budgets.
              </p>
            </div>
            <button className="chip">This month</button>
          </div>
          <ul className="rank-list">
            <li>
              <span>1</span> Netarhat
            </li>
            <li>
              <span>2</span> Betla
            </li>
            <li>
              <span>3</span> Dassam Falls
            </li>
            <li>
              <span>4</span> Hundru
            </li>
            <li>
              <span>5</span> Deoghar
            </li>
          </ul>
        </div>
      </div>

      {/* SOS and Approvals */}
      <div className="grid grid-2 mt-24">
        <div className="card">
          <div className="card-header">
            <h3>Live SOS and Safety Alerts</h3>
            <span className="chip neutral">Today</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tourist</th>
                <th>Location</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#SOS-1842</td>
                <td>Rahul S.</td>
                <td>Netarhat</td>
                <td><span className="status-pill danger">High</span></td>
                <td><span className="status-pill warning">In progress</span></td>
              </tr>
              <tr>
                <td>#SOS-1839</td>
                <td>Aditi K.</td>
                <td>Betla National Park</td>
                <td><span className="status-pill medium">Medium</span></td>
                <td><span className="status-pill danger">Open</span></td>
              </tr>
              <tr>
                <td>#SOS-1831</td>
                <td>Foreign Group</td>
                <td>Dassam Falls</td>
                <td><span className="status-pill danger">High</span></td>
                <td><span className="status-pill success">Resolved</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Vendor and Homestay Approvals</h3>
            <span className="chip neutral">Pending verification</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Type</th>
                <th>District</th>
                <th>DNK</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prabhat Eco Stay</td>
                <td>Homestay</td>
                <td>Latehar</td>
                <td>Yes</td>
                <td><button className="link-btn">Document check</button></td>
              </tr>
              <tr>
                <td>Tribal Trails Jharkhand</td>
                <td>Guide and Tour</td>
                <td>Ranchi</td>
                <td>No</td>
                <td><button className="link-btn">Field visit</button></td>
              </tr>
              <tr>
                <td>Handloom Crafts Centre</td>
                <td>Artisan</td>
                <td>Gumla</td>
                <td>Yes</td>
                <td><button className="link-btn">Awaiting approval</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="quick-actions mt-24">
        <h3>Quick Actions</h3>
        <div className="quick-actions-row">
          <button className="primary-btn ghost">Approve vendors</button>
          <button className="primary-btn ghost">Approve guides</button>
          <button className="primary-btn ghost">View SOS live map</button>
          <button className="primary-btn ghost">Add event</button>
          <button className="primary-btn ghost">Push travel advisory</button>
          <button className="primary-btn ghost">Add destination</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
