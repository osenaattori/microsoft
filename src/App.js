import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Kaikki Microsofin Admin linkit</p>
        <ul className="admin-links">
          <li>
            <a
              href="https://aad.portal.azure.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azure Active Directory Admin Center
            </a>
          </li>
          <li>
            <a
              href="https://endpoint.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Intune Admin Center
            </a>
          </li>
          <li>
            <a
              href="https://admin.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft 365 Admin Center
            </a>
          </li>
          <li>
            <a
              href="https://compliance.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Purview
            </a>
          </li>

          <li>
            <a
              href="https://account.azure.com/Subscriptions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azure Subscriptions
            </a>
          </li>
          <li>
            <a
              href="https://securitycopilot.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Security Copilot
            </a>
          </li>
          <li>
            <a
              href="Microsoft Security Copilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Defender For Endpoint
            </a>
          </li>
          <li>
            <a
              href="https://admin.teams.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Teams Admin
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
