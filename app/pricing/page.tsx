const pricing = [
  { tier: 'Starter', price: '$0', description: 'For freelancers and early experiments.', features: ['Basic lane dashboard', '2 data syncs/day', 'Email alerts'] },
  { tier: 'Pro', price: '$49/mo', description: 'For growing brokers and operators.', features: ['Live DAT One data', 'Unlimited lane tracking', 'Priority support'], popular: true },
  { tier: 'Scale', price: '$149/mo', description: 'For multi-branch teams and enterprise ops.', features: ['Advanced analytics', 'Team seats', 'Custom integrations'] }
];

export default function PricingPage() {
  return (
    <main className="page-shell">
      <div className="topbar center">
        <div>
          <span className="eyebrow">Monetization</span>
          <h1>Simple pricing for logistics teams</h1>
        </div>
      </div>

      <section className="pricing-grid">
        {pricing.map((plan) => (
          <div key={plan.tier} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
            {plan.popular && <span className="popular-tag">Most popular</span>}
            <h3>{plan.tier}</h3>
            <div className="price">{plan.price}</div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="button primary full-width">Choose plan</button>
          </div>
        ))}
      </section>
    </main>
  );
}
