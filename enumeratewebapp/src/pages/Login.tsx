import axios from "axios";
import React , { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputUsername = (event: any) => {
    setUsername(event.currentTarget.value);
  };

  const inputPassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  let token: string = "";
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  async function doLogin() {
    console.log("do login");
    console.log(username, password);

    setLoading(true);

    let url_auth_login: string = "";
    if (process.env.REACT_APP_AUTH_LOGIN_API) {
      url_auth_login = process.env.REACT_APP_AUTH_LOGIN_API;

      await axios
        .post(url_auth_login, {
          "username": username,
          "password": password,
          "ipaddress": "",
          "city": "",                    
          "region": "",
          "latitude": "",
          "longitude": "",
          "org": ""
        })
        .then((result) => {
          const { data } = result;
          token = data;
        });
    }

    setLoading(false);

    //console.log(token);
    if (token !== "") {
      console.log("save token cookie", token);
      setCookie("token", token, {
        path: "/",
      });
      navigate("/main");
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="#" className="text-center gap-2">
                    <span className="app-brand-logo demo"></span>
                    <br/>
                    <span className="app-brand-text demo text-body fw-bolder">
                      ระบบสำมะโนเกษตร
                    </span>
                    <br/><br/>
                    <span className="app-brand-text demo text-body fw-bolder">
                      ปี พ.ศ.2566
                    </span>
                  </a>
                </div>

                <h4 className="mb-2 text-center">ลงชื่อเข้าใช้งานระบบ</h4>
                <p className="mb-4 text-center fs-4">สก.1 - สก.2</p>

                <form id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                    <label className="form-label">ชื่อผู้ใช้งาน</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      onChange={inputUsername}
                      value={username}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">รหัสผ่าน</label>
                      <a href="/forgotPassword">
                        <small>ลืมรหัสผ่าน?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={inputPassword}
                        value={password}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      className="btn btn-primary w-100"
                      type="button" 
                      onClick={doLogin} 
                    
                    >
                      เข้าใช้งานระบบ { loading && <LoadingSpinner />}
                    </button>
                  </div>
                </form>

                <p className="text-center">
                  <span>ไม่มีบัญชีสำหรับเข้าใช้งานระบบ? </span>
                  <a href="/contact">
                    <span>ติดต่อผู้ดูแลระบบ</span>
                  </a>
                </p>

                <p className="text-center">
                  <a href="/">
                    <span>กลับหน้า Portal</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
