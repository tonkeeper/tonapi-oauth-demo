import React, { useEffect } from 'react'
import './App.css';
import { useLocalStorage } from './hooks'
import { getAuthDataFromUrl } from './utils'

const TONAPI_OAUTH_LOGIN_URL = "https://tonapi.io/v1/oauth/login?returnUrl=http://localhost:3000/";

function App() {
  const [wallet, setWallet] = useLocalStorage("wallet", null);
  const [clientId, setClientId] = useLocalStorage("clientId", null);

  useEffect(() => {
    const {
      wallet,
      clientId,
    } = getAuthDataFromUrl();

    if (wallet) {
      setWallet(wallet)
    }

    if (clientId) {
      setClientId(clientId)
    }
  }, [])


  return (
      <div className="App">
        <header className="App-header">
          {
            wallet && clientId
                ? (
                    <p>
                      Logined as: {wallet}
                    </p>
                )
                : (
                    <>
                      <p>
                        Wallet is uknown, please login
                      </p>
                      <a
                          className="App-link"
                          href={TONAPI_OAUTH_LOGIN_URL}
                          rel="noopener noreferrer"
                      >
                        Login
                      </a>
                    </>
                )
          }
        </header>
      </div>
  );
}

export default App;
