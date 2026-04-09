import './App.css';

function App() {
  return (
    <main className="app-shell">
      <div className="cards">
        <article className="card card-red">
          <div className="card-badge-row">
            <div className="card-label red">Red Teaming</div>
            <img src="/images/CCEH101.png" alt="CCEH Badge" className="program-badge" />
          </div>
          <h1>CCEH (Certified Cyber Cracker Ethical Hacker)</h1>

          <section className="card-section">
            <h2>Jobs</h2>
            <ul>
              <li>Ethical Hacker</li>
              <li>Penetration Tester</li>
              <li>Bug Bounty Hunter</li>
              <li>Security Analyst</li>
            </ul>
          </section>

          <section className="card-section">
            <h2>Certifications</h2>
            <ul>
              <li>CEH (Certified Ethical Hacker)</li>
              <li>eJPT</li>
              <li>CompTIA Security+</li>
            </ul>
          </section>
        </article>

        <article className="card card-blue">
          <div className="card-badge-row">
            <div className="card-label blue">Blue Teaming</div>
            <div className="program-badge placeholder">CCSE badge coming soon</div>
          </div>
          <h1>CCSE (Certified Cyber Cracker Security Expert)</h1>

          <section className="card-section">
            <h2>Jobs</h2>
            <ul>
              <li>Security Engineer</li>
              <li>SOC Analyst</li>
              <li>Network Security Specialist</li>
              <li>Cybersecurity Consultant</li>
            </ul>
          </section>

          <section className="card-section">
            <h2>Certifications</h2>
            <ul>
              <li>OSCP</li>
              <li>CISSP (Associate Level)</li>
              <li>CompTIA CySA+</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}

export default App;
