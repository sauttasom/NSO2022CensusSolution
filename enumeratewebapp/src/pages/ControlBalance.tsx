import { useState, useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import CAgricultural from "../components/CAgricultural";
import CFarming from "../components/CFarming";
import CVerify from "../components/CVerify";
import CStatus from "../components/CStatus";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Listing } from "../model/Listing";
import { ListingContext } from "../components/ListingContext";
import { UserInfo } from "../model/UserInfo";
import { useCookies } from "react-cookie";
import { UserContext } from "../components/UserContext";

export default function ControlBalance() {
  const location = useLocation();
  const listingKey = location.state;
  const [listing, setListing] = useState<Listing | null>(null);

  const [userInfo, setUser] = useState<UserInfo | null>(null);

  const [cookies] = useCookies(["token"]);
  const [cookiesKey] = useCookies(["key"]);
  const navigate = useNavigate();
  const parameter = useParams();

  useEffect(() => {
    async function getUser() {
      if (cookies.token !== "" && cookies.token !== undefined) {
        let url_auth_validate: string = "";
        if (process.env.REACT_APP_AUTH_VALIDATE_API) {
          url_auth_validate = process.env.REACT_APP_AUTH_VALIDATE_API;

          await axios
            .get(url_auth_validate, {
              headers: { Authorization: "Bearer " + cookies.token },
            })
            .then((res) => {
              if (res.status === 200) {
                setUser(res.data);
              } else {
                navigate("/");
              }
            });
        }
      }
    }

    async function getDetail() {
      let url_enumerate_api: string = "";

      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      let key: any =
        listingKey === null ? base64.decode(cookiesKey.key) : listingKey;

      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing/getDetail/" + key;
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      await axios
        .get(url_enumerate_api, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            setListing(res.data);
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    }
    getUser();
    if (parameter.type === "new") {
    } else {
      getDetail();
    }
  }, [listingKey, cookies.token, navigate, parameter]);

  const [page, setPage] = useState<number>(1);
  const [noFarmer, setNoFarmer] = useState<boolean>(false);

  return (
    <div>
      <NavbarMenu />
      <UserContext.Provider value={{ userInfo, setUser }}>
        <ListingContext.Provider
          value={{ listing, setListing, noFarmer, setNoFarmer, page, setPage }}
        >
          <div style={{ display: page === 1 ? "" : "none" }}>
            {listing && <CAgricultural />}
          </div>

          <div style={{ display: page === 2 ? "" : "none" }}>
            {listing && <CFarming />}
          </div>

          <div style={{ display: page === 3 ? "" : "none" }}>
            {listing && <CVerify />}
          </div>

          <div style={{ display: page === 4 ? "" : "none" }}>
            {listing && <CStatus />}
          </div>
        </ListingContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
