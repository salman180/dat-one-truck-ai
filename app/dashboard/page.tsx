import Link from 'next/link';

const rows = [
  { lane: 'Dallas → Atlanta', rate: '$2.64/mi', margin: '19.2%', status: 'Hot' },
  { lane: 'Chicago → Denver', rate: '$2.48/mi', margin: '17.8%', status: 'Stable' },
  { lane: 'Memphis → Newark', rate: '$2.91/mi', margin: '22.4%', status: 'Hot' },
  { lane: 'Phoenix → Las Vegas', rate: '$2.19/mi', margin: '15.6%', status: 'Watch' }
];

export default function DashboardPage() {
  return (
    <main className="page-shell dashboard-shell">
      <div className="topbar">
        <div>
          <span className="eyebrow">Operations Center</span>
          <h1>DAT One dashboard</h1>
        </div>
        <Link href="/" className="button secondary">Back home</Link>
      </div>

      <section className="stats-row">
        <div className="stat-box">
          <small>Load count</small>
          <strong>1,284</strong>
        </div>
        <div className="stat-box">
          <small>Avg. rate</small>
          <strong>$2.71/mi</strong>
        </div>
        <div className="stat-box">
          <small>Carrier capacity</small>
          <strong>842 trucks</strong>
        </div>
        <div className="stat-box">
          <small>Pipeline value</small>
          <strong>$286k</strong>
        </div>
      </section>

      <section className="content-grid">
        <div className="card wide-card">
          <div className="card-head">
            <h3>Live market lanes</h3>
            <span className="pill success">Updated 2 min ago</span>
          </div>

          <table>
            <thead>
              <tr>
                <th>Lane</th>
                <th>Rate</th>
                <th>Margin</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.lane}>
                  <td>{row.lane}</td>
                  <td>{row.rate}</td>
                  <td>{row.margin}</td>
                  <td>
                    <span className={`status ${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>DAT One connection</h3>
          </div>
          <div className="connection-box">
            <span className="dot green" />
            Connected to DAT One
          </div>
          <p className="muted-text">
            Ready to sync lanes, freight availability, and market pricing with a live API key.
          </p>
          <Link href="/pricing" className="button primary full-width">Upgrade plan</Link>
        </div>
      </section>
    </main>
  );
}
