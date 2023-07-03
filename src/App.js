import React from "react";
import "./styles.css";

export default function App() {
  async function loginExample(e) {
    const requestBody = {
      "username": "myCoolUserName1",
      "password": "my_PaSSwoRd",
    }

    const res = await fetch('http://localhost:8080/signup', {
      "method": "POST",
      headers: {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(requestBody)
    })
    console.log('result: ', await res.json())
  }

  return (
    <div className="App">
      <div className="pa5 flex justify-between">
        <div>
          <img
            alt=""
            src="https://indent.com/static/indent_text_black.png"
            height={32}
          />

          <ul className="pl0 mw5 list">
            <li className="mt4 mb4">
              <strong className="db mb1">Quick and free sign-up</strong>
              Enter your email address to create an account.
            </li>
            <li className="mb4">
              <strong className="db mb1">Low and zero-code integration</strong>
              Get up and running with Indent in a few minutes.
            </li>
            <li>
              <strong className="db mb1">Quick and free preview</strong>
              Enter your email address to create an account and try Indent.
            </li>
          </ul>
        </div>
        <div>
          <div className="shadow-4 br3 pa4 ph5">
            <h2 className="fw4 ph5 pt2 pb3">Create your Indent account</h2>

            <label className="db mv2">Email</label>
            <input
              className="w-100 f4 input-reset"
              style={{ borderColor: "#d8d8d8" }}
            />

            <label className="db mv2">Full name</label>
            <input
              className="w-100 f4 input-reset"
              style={{ borderColor: "#d8d8d8" }}
            />

            <label className="db mv2">Password</label>
            <input
              className="mb2 w-100 f4 input-reset"
              style={{ borderColor: "#d8d8d8" }}
            />

            <label className="db mv2">Confirm password</label>
            <input
              className="mb2 w-100 f4 input-reset"
              style={{ borderColor: "#d8d8d8" }}
            />

            <button className="mt4 f6 link dim br3 ph3 pv2 mb2 dib white bg-blue outline-none" onClick={loginExample}>
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
