import axios from "axios";
import React, {useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "../components/NavbarMenu";
import { UserInfo } from "../model/UserInfo";

export default function Main() {

  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  let userinfo:UserInfo;

  useEffect(() => {
    const getUserInfo = async () => {
      if (cookies.token !== "" && cookies.token !== undefined) {
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
                userinfo = data;
                // setUserInfo(data);

               
                if(userinfo.roleId===10){
                  ////ผู้ตอบข้อมูลเอง
                  setCookie("AH_CODE", userinfo.aH_CODE, {
                    path: "/"
                  });
                }
                


              } else {
                navigate("/");
              }
            });
        }
      } else {
        navigate("/");
      }
    };
    getUserInfo();
    //removeCookie('filter');
    //removeCookie('trackSearch');
  }, [cookies.token,navigate]);

  return (
    <div>
      <NavbarMenu />
      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={4}>
            <a href={process.env.PUBLIC_URL + "/appendix"}>
              <Card className="icon-card cursor-pointer text-center mb-4 mx-2">
                <Card.Body className="card-menu">
                  <i className="bx bx-md bxs-file"></i>
                  <p className="icon-name text-capitalize text-truncate mb-0">
                    แบบสอบถามสำหรับสำมะโนการเกษตร
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col md={4}>
            <a href={process.env.PUBLIC_URL + "/list"}>
              <Card className="icon-card cursor-pointer text-center mb-4 mx-2">
                <Card.Body className="card-menu">
                  <i className="bx bx-md bxs-file"></i>
                  <p className="icon-name text-capitalize text-truncate mb-0">
                    แบบสอบถามสำหรับสำมะโนการเกษตรทั้งหมด
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
