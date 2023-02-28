import "../styles/register.css";
import "../styles/login.css";
import loginVec from "../assets/vec2.svg";

export default function RegisterPage() {
  const registerUser = (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.fname.value,
      lastName: e.target.lname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confPassword: e.target.cpassword.value,
    };
    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://mindmate-m3ak.onrender.com/user/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        if (result.status === 0) {
          window.location.href = "/login";
        }
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="register__page">
      <div className="bg-content">
        <div className="center-text">
          <h2>MindMate</h2>
          <br />
          <p>
            Home for one, Home for all <br />
            Fun Time right, let us have it at that then
          </p>
          <img alt="." src={loginVec} />
        </div>
      </div>
      <div className="main">
        <div className="greet">
          <div>
            <h2>Sign up</h2>
            <p>Fill in the following details</p>
          </div>
        </div>

        <form action="" onSubmit={registerUser}>
          <fieldset>
            <div className="inp">
              <span className="iconx">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
              />
            </div>
            <div className="inp">
              <span className="iconx">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last name"
              />
            </div>
            <div className="inp">
              <span className="iconx">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input type="text" name="email" id="email" placeholder="email" />
            </div>
            <div className="inp">
              <span className="iconx">
                <svg
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7.5H13V5.5C13 2.74 10.76 0.5 8 0.5C5.24 0.5 3 2.74 3 5.5V7.5H2C0.9 7.5 0 8.4 0 9.5V19.5C0 20.6 0.9 21.5 2 21.5H14C15.1 21.5 16 20.6 16 19.5V9.5C16 8.4 15.1 7.5 14 7.5ZM5 5.5C5 3.84 6.34 2.5 8 2.5C9.66 2.5 11 3.84 11 5.5V7.5H5V5.5ZM14 19.5H2V9.5H14V19.5ZM8 16.5C9.1 16.5 10 15.6 10 14.5C10 13.4 9.1 12.5 8 12.5C6.9 12.5 6 13.4 6 14.5C6 15.6 6.9 16.5 8 16.5Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="inp">
              <span className="iconx">
                <svg
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7.5H13V5.5C13 2.74 10.76 0.5 8 0.5C5.24 0.5 3 2.74 3 5.5V7.5H2C0.9 7.5 0 8.4 0 9.5V19.5C0 20.6 0.9 21.5 2 21.5H14C15.1 21.5 16 20.6 16 19.5V9.5C16 8.4 15.1 7.5 14 7.5ZM5 5.5C5 3.84 6.34 2.5 8 2.5C9.66 2.5 11 3.84 11 5.5V7.5H5V5.5ZM14 19.5H2V9.5H14V19.5ZM8 16.5C9.1 16.5 10 15.6 10 14.5C10 13.4 9.1 12.5 8 12.5C6.9 12.5 6 13.4 6 14.5C6 15.6 6.9 16.5 8 16.5Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm password"
              />
            </div>
            <label className="agreement">
              <input type="checkbox" name="agreement" id="agreement" /> I agree
              to the terms and conditions
            </label>
            <a href="/login" className="agreement">Already have an account? Login</a>
          </fieldset>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
