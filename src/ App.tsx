import React, { useEffect } from 'react'
import './App.css';
import { useLocalStorage } from './hooks'
import { getAuthDataFromUrl } from './utils'

const RETURN_URL = `${process.env.REACT_APP_RETURN_URL}`

function App() {
  const [authToken, setAuthToken] = useLocalStorage("authToken", null);

  const TONAPI_OAUTH_LOGIN_URL = `${process.env.REACT_APP_TONAPI_OAUTH_LOGIN_URL}=${RETURN_URL}`;

  useEffect(() => {
    const query = getAuthDataFromUrl();

    if (query.authToken) {
      setAuthToken(query.authToken)
    }
  }, [])


  const handleLogout = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    localStorage.removeItem("authToken")
    window.location.href = RETURN_URL
  }


  return (
      <div className="App">
        <div className="App-header">
          {
            authToken
                ? (
                    <div className="Token-container">
                      <p>
                        AuthToken is:
                      </p>
                      <span>
                        {authToken}
                      </span>
                      <a
                          onClick={handleLogout}
                          className="App-link"
                          href={""}
                          rel="noopener noreferrer"
                      >
                        Logout
                      </a>
                    </div>
                )
                : (
                    <>
                      <p>
                        AuthToken is uknown, please login
                      </p>
                      <a
                          className="App-link"
                          href={TONAPI_OAUTH_LOGIN_URL}
                          rel="noopener noreferrer"
                      >
                        Login using tonapi.io
                      </a>
                    </>
                )
          }
        </div>
      </div>
  );
}

export default App;
