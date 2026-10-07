import './globals.css';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="badge">DAT One + Logistics SaaS</span>
          <h1>Freight intelligence for brokers and carriers.</h1>
          <p>
            A truk.ai-inspired platform for matching freight, checking rates, and turning
            lane data into revenue.
          </p>
          <div className="cta-row">
            <a className="button primary" href="/dashboard">Open dashboard</a>
            <a className="button secondary" href="/pricing">View pricing</a>
          </div>
          <ul className="mini-stats">
            <li><strong>24k+</strong><span>Loads tracked</span></li>
            <li><strong>4.9/5</strong><span>Broker rating</span></li>
            <li><strong>$98k</strong><span>Avg. monthly revenue</span></li>
          </ul>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <span className="dot green" />
            <span>DAT One live status</span>
          </div>
          <div className="panel-card">
            <p>Today’s lane overview</p>
            <h3>Dallas → Chicago</h3>
            <div className="metric-row">
              <div>
                <small>Rate</small>
                <strong>$2.84/mi</strong>
              </div>
              <div>
                <small>Volume</small>
                <strong>312 loads</strong>
              </div>
            </div>
          </div>
          <div className="signal-list">
            <div><span>Avg. margin</span><strong>18.4%</strong></div>
            <div><span>Carrier match</span><strong>76%</strong></div>
            <div><span>New leads</span><strong>142</strong></div>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card">
          <span className="feature-icon">📦</span>
          <h3>Load board</h3>
          <p>Track active freight, pricing trends, and available capacity across key lanes.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Rate intelligence</h3>
          <p>Compare lane benchmarks and build stronger bids with live market insights.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Carrier ops</h3>
          <p>Monitor dispatch workflows, available trucks, and profitable shipment matches.</p>
        </div>
      </section>
    </main>
  );
}
