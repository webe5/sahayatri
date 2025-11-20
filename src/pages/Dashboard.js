import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* Header */}
      <header className="dashboard-hero card flex-between">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Complete overview of tourism, vendors, SOS alerts & system insights.
          </p>
        </div>
        <div className="flex gap-12">
          <button className="primary-btn">New Report</button>
          <button className="outline-btn">Manage Alerts</button>
        </div>
      </header>

      {/* KPI Grid */}
      <section className="grid grid-4 mt-24">
        
        <div className="card kpi-card">
          <div className="kpi-label">Total Tourists Registered</div>
          <div className="kpi-value">12,430</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-success">+14%</span>
            <span>Last 30 days</span>
          </div>
        </div>

        <div className="card kpi-card">
          <div className="kpi-label">Active Guides / Vendors</div>
          <div className="kpi-value">286</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-success">32 new</span>
            <span>DNK Verified</span>
          </div>
        </div>

        <div className="card kpi-card">
          <div className="kpi-label">Pending Verifications</div>
          <div className="kpi-value">18</div>
          <div className="kpi-meta">
            <span>Guides + Vendors</span>
            <span className="kpi-pill kpi-pill-warning">Action required</span>
          </div>
        </div>

        <div className="card kpi-card">
          <div className="kpi-label">Today's SOS Alerts</div>
          <div className="kpi-value kpi-danger">3</div>
          <div className="kpi-meta">
            <span className="kpi-pill kpi-pill-danger">2 high priority</span>
            <button className="outline-btn small">Live view</button>
          </div>
        </div>

      </section>

      {/* Charts */}
      <section className="grid grid-2 mt-24">

        <div className="card chart-card">
          <div className="card-header flex-between">
            <div>
              <h3>Tourist Footfall (Last 90 Days)</h3>
              <p className="card-subtitle">
                District-level trends and season insights.
              </p>
            </div>
            <button className="chip">Rolling 90 days</button>
          </div>
          <div className="chart-placeholder">Chart integration area</div>
        </div>

        <div className="card chart-card">
          <div className="card-header flex-between">
            <div>
              <h3>Most Visited Destinations</h3>
              <p className="card-subtitle">Today / Week / Month</p>
            </div>
            <button className="chip">This Month</button>
          </div>

          <div
            className="dest-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12,
              alignItems: "start",
            }}
          >
            <div className="dest-card">
              <img
                src="/images/netarhat.jpg"
                alt="Netarhat"
                className="dest-thumb"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <div className="dest-caption">
                <div><span className="rank-pos">1</span> <strong>Netarhat</strong></div>
                <div className="muted">412 visits</div>
              </div>
            </div>

            <div className="dest-card">
              <img
                src="/images/betla.jpg"
                alt="Betla National Park"
                className="dest-thumb"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <div className="dest-caption">
                <div><span className="rank-pos">2</span> <strong>Betla</strong></div>
                <div className="muted">298 visits</div>
              </div>
            </div>

            <div className="dest-card">
              <img
                src="public/logo192.png"
                alt="Dassam Falls"
                className="dest-thumb"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <div className="dest-caption">
                <div><span className="rank-pos">3</span> <strong>Dassam Falls</strong></div>
                <div className="muted">220 visits</div>
              </div>
            </div>

            <div className="dest-card">
              <img
                src="/images/hundru.jpg"
                alt="Hundru"
                className="dest-thumb"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <div className="dest-caption">
                <div><span className="rank-pos">4</span> <strong>Hundru</strong></div>
                <div className="muted">160 visits</div>
              </div>
            </div>

            <div
              className="dest-card"
              style={{ gridColumn: "1 / -1", justifySelf: "center", maxWidth: 460 }}
            >
              <img
                src="/images/deoghar.jpg"
                alt="Deoghar"
                className="dest-thumb"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <div className="dest-caption">
                <div><span className="rank-pos">5</span> <strong>Deoghar</strong></div>
                <div className="muted">140 visits</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SOS + Approvals */}
      <section className="grid grid-2 mt-24">

        {/* SOS Table */}
        <div className="card">
          <div className="card-header flex-between">
            <h3>Live SOS & Safety Alerts</h3>
            <span className="chip neutral">Today</span>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th><th>Tourist</th><th>Location</th>
                <th>Priority</th><th>Status</th>
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

        {/* Vendor Approvals */}
        <div className="card">
          <div className="card-header flex-between">
            <h3>Vendor & Homestay Approvals</h3>
            <span className="chip neutral">Verification Pending</span>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Vendor</th><th>Type</th><th>District</th><th>DNK</th><th>Status</th>
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
                <td>Guide & Tour</td>
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

      </section>

      {/* Quick Actions */}
      <section className="quick-actions mt-24">
        <h3>Quick Actions</h3>
        <div className="quick-actions-row">
          <button className="primary-btn ghost">Approve Vendors</button>
          <button className="primary-btn ghost">Approve Guides</button>
          <button className="primary-btn ghost">View SOS Live Map</button>
          <button className="primary-btn ghost">Add Event</button>
          <button className="primary-btn ghost">Push Travel Advisory</button>
          <button className="primary-btn ghost">Add Destination</button>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
