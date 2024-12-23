import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserInfo } from "../model/UserInfo";
import ChatNotification from "./chatnoti/ChatNotification";

function NavbarMenu() {
  let user: UserInfo = {
    userId: 0,
    userName: "",
    name: "",
    pid: "",
    email: "",
    phone: "",
    positionId: 0,
    positionName: "",
    roleId: 0,
    roleName: "",
    cwtCode: "",
    ampCode: "",
    tamCode: "",
    vilCode: "",
    cwtName: "",
    ampName: "",
    tamName: "",
    vilName: "",
  };

  const [cookies, setCookie, removeCookie] = useCookies();
  const [userInfo, setUserInfo] = useState<UserInfo>(user);

  useEffect(() => {
    const getUserInfo = async () => {
      if (cookies.token !== "") {
        let url_auth_validate: string = "";
        if (process.env.REACT_APP_AUTH_VALIDATE_API) {
          url_auth_validate = process.env.REACT_APP_AUTH_VALIDATE_API;

          await axios
            .get(url_auth_validate, {
              headers: { Authorization: "Bearer " + cookies.token },
            })
            .then((result) => {
              if (result.status === 200) {
                const { data } = result;
                setUserInfo(data);
              }
            })
            .catch((error) => {
              window.location.href = process.env.REACT_APP_PORTAL + "/logout";
            });
        }
      } else {
        window.location.href = process.env.REACT_APP_PORTAL + "/logout";
      }
    };
    getUserInfo();
  }, []);

  async function logout() {
    // removeCookie('filter');
    // removeCookie('trackSearch');
    window.location.href = process.env.REACT_APP_PORTAL + "/logout";
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-navbar-theme sticky-top"
        id="layout-navbar"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand text-primary fw-bold navbar-brand-1"
            href={process.env.REACT_APP_PORTAL + "/"}
          >
            <img
              src={
                process.env.REACT_APP_PORTAL + "/assets/img/logo/nso-logo.png"
              }
              className="w-px-70 h-auto "
            />
          </a>

          <span className="navbar-toggler">
            <ChatNotification></ChatNotification>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item nav1">
                <a className="nav-link active" aria-current="page" href={process.env.REACT_APP_PORTAL + "/"}>
                  <i className="bx bxs-home me-2"></i>
                  <span className="align-middle">หน้าหลัก</span>
                </a>
              </li> */}
              <li className="nav-item nav1">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={process.env.REACT_APP_PORTAL + "/main"}
                >
                  <i className="bx bxs-grid-alt me-2"></i>
                  <span className="align-middle">ระบบงาน</span>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="d-none d-lg-block nav-item nav1">
                <ChatNotification></ChatNotification>
              </li>
              <li className="nav-item nav1">
                <a className="nav-link fw-semibold" aria-current="page">
                  {userInfo.userName}
                </a>
              </li>
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/avatars/user.png"
                      }
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/avatars/user.png"
                              }
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">
                            {userInfo.name}
                          </span>
                          <small className="text-muted d-block">
                            {userInfo.roleName}
                          </small>
                          <small className="text-muted d-block">
                            {userInfo.cwtName !== ""
                              ? "จ." + userInfo.cwtName
                              : ""}
                          </small>
                          <small className="text-muted d-block">
                            {userInfo.ampName != ""
                              ? "อ." + userInfo.ampName
                              : ""}
                          </small>
                          <small className="text-muted d-block">
                            {userInfo.tamName != ""
                              ? "ต." + userInfo.tamName
                              : ""}
                          </small>
                          <small className="text-muted d-block">
                            {userInfo.vilName != ""
                              ? "หมู่บ้าน " + userInfo.vilName
                              : ""}
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={process.env.REACT_APP_PORTAL + "/profile"}
                    >
                      <i className="bx bx-user me-2"></i>
                      <span className="align-middle">ข้อมูลส่วนตัว</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={process.env.REACT_APP_PORTAL + "/changepassword"}
                    >
                      <i className="bx bx-lock me-2"></i>
                      <span className="align-middle">เปลี่ยนรหัสผ่าน</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        logout();
                      }}
                    >
                      <i className="bx bx-power-off me-2"></i>
                      <span className="align-middle">ออกจากระบบ</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarMenu;
