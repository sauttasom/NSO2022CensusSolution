import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import EAnimal2 from "../components/EAnimal2";
import EAnimalHusbandry from "../components/EAnimalHusbandry";
import EAquaculture2 from "../components/EAquaculture2";
import EAquacultureAreas from "../components/EAquacultureAreas";
import EFarmPlants2 from "../components/EFarmPlants2";
import EFertilizer2 from "../components/EFertilizer2";
import EFloweringPlants from "../components/EFloweringPlants";
import EForest2 from "../components/EForest2";
import EHerb from "../components/EHerb";
import EIncomeExpenses2 from "../components/EIncomeExpenses2";
import ELand2 from "../components/ELand2";
import EMachinery2 from "../components/EMachinery2";
import EMachinery22 from "../components/EMachinery22";
import EMachinery23 from "../components/EMachinery23";
import EMembers2 from "../components/EMembers2";
import { EnumerateContext } from "../components/EnumerateContext";
import EOilPalm from "../components/EOilPalm";
import EOperation2 from "../components/EOperation2";
import EPerennialPlant from "../components/EPerennialPlant";
import EPlanting from "../components/EPlanting";
import EProblem from "../components/EProblem";
import ERice2 from "../components/ERice2";
import ERubber2 from "../components/ERubber2";
import ESeaSaltFarming2 from "../components/ESeaSaltFarming2";
import ESpecialX from "../components/ESpecialX";
import EVegetable2 from "../components/EVegetable2";
import NavbarMenu from "../components/NavbarMenu";
import { UserContext } from "../components/UserContext";
import { Enumerate } from "../model/Enumerate";
import { EnumerateSK2 } from "../model/EnumerateSK2";
import { UserInfo } from "../model/UserInfo";
import { APIService } from "../service/APIService";

export default function EnumerateDetail() {
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  let ah_code = location.state;

  const [enumeratesk2, setEnumerateSK2] = useState<EnumerateSK2 | null>(null);
  const [userInfo, setUser] = useState<UserInfo | null>(null);

  const [cookies] = useCookies(["token"]);
  const [cookieAH_CODE, setCookieAH_CODE] = useCookies(["AH_CODE"]);
  const navigate = useNavigate();

  let user:UserInfo | undefined;

  //pageload
  useEffect(() => {    

    async function getUser() {
      if (cookies.token !== "" && cookies.token !== undefined) {
        let url_auth_validate: string = "";
        if (process.env.REACT_APP_AUTH_VALIDATE_API) {
          url_auth_validate = process.env.REACT_APP_AUTH_VALIDATE_API;

          const result = await axios
            .get(url_auth_validate, {
              headers: { Authorization: "Bearer " + cookies.token },
            })
            .then((res) => {
              if (res.status === 200) {
                setUser(res.data);
                    
                //เก็บข้อมูล user ไว้ 
                user = res.data;  
                //console.log("userinfo",userinfo) 
                //ถ้าเป็น ผู้ตอบข้อมูลเอง roleId = 10 ให้ใช้ AH_CODE ในการทำ สก.2   
                //console.log("userinfo?.roleId", userinfo?.roleId)
                if (user?.roleId === 10) {
                  if (cookieAH_CODE.AH_CODE !== "" && cookieAH_CODE.AH_CODE !== undefined) {
                    console.log("cookieAH_CODE.AH_CODE", cookieAH_CODE.AH_CODE);
                    ah_code = cookieAH_CODE.AH_CODE
                  }
                }

                return true;


              } else {
                navigate("/");
              }
            });

          // ตรวจสอบข้อมูล user เรียบร้อยแล้ว
          if (result) {
            const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
            if (api.authToken) {
              let auth: string = api.authToken;
              api.setHeaders([
                {
                  key: "Authorization",
                  value: "Basic " + auth,
                },
              ]);

              try {
                let url_enumerate_api: string = "";
                if (process.env.REACT_APP_ENUMERATE_API) {
                  url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getEnumerateSK2/" + ah_code;
                  //console.log(url_enumerate_api);

                }

                await axios
                  .get(url_enumerate_api, {
                    headers: api.headers,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      //setEnumerate(res.data[0]);
                      setEnumerateSK2(
                        JSON.parse(JSON.stringify(res.data[0]), (key, value) =>
                          value === null ? "" : value === "b" ? "" : value
                        )
                      );
                    }
                  })
                  .catch((err) => {
                    console.log("AXIOS ERROR: ", err);

                    //ไม่พบข้อมูล , ah_code อาจเป็นค่าว่าง

                  });
              } catch (err) {
                console.error("ERROR (checkSubreocrd): ", err);
              }
            }
          }


        }
      }
    }

    /* async function getDetail() {

  
    } */

    getUser();
    //getDetail();
  }, [ah_code]);

  return (
    <div>
      <NavbarMenu />
      <UserContext.Provider value={{ userInfo, setUser }}>
        <EnumerateContext.Provider
          value={{ enumeratesk2, setEnumerateSK2, page, setPage }}
        >
          <div style={{ display: page === 1 ? "" : "none" }}>
            {enumeratesk2 && page === 1 && <EOperation2 />}
          </div>

          <div style={{ display: page === 2 ? "" : "none" }}>
            {enumeratesk2 && page === 2 && <ELand2 />}
          </div>

           <div style={{ display: page === 3 ? "" : "none" }}>
            {enumeratesk2 && page === 3 && <EPlanting />}
          </div>

          <div style={{ display: page === 4 ? "" : "none" }}>
            {enumeratesk2 && page === 4 && <ERice2 />}
          </div>

          <div style={{ display: page === 5 ? "" : "none" }}>
            {enumeratesk2 && page === 5 && <ERubber2 />}
          </div>

          <div style={{ display: page === 6 ? "" : "none" }}>
            {enumeratesk2 && page === 6 && <EOilPalm />}
          </div>

          <div style={{ display: page === 7 ? "" : "none" }}>
            {enumeratesk2 && page === 7 && <EPerennialPlant />}
          </div>

          <div style={{ display: page === 8 ? "" : "none" }}>
            {enumeratesk2 && page === 8 && <EForest2 />}
          </div>

          <div style={{ display: page === 9 ? "" : "none" }}>
            {enumeratesk2 && page === 9 && <EFarmPlants2 />}
          </div>

          <div style={{ display: page === 10 ? "" : "none" }}>
            {enumeratesk2 && page === 10 && <EVegetable2 />}
          </div>

          <div style={{ display: page === 11 ? "" : "none" }}>
            {enumeratesk2 && page === 11 && <EHerb />}
          </div>

          <div style={{ display: page === 12 ? "" : "none" }}>
            {enumeratesk2 && page === 12 && <EFloweringPlants />}
          </div>

          <div style={{ display: page === 13 ? "" : "none" }}>
            {enumeratesk2 && page === 13 && <EAnimalHusbandry />}
          </div>

          <div style={{ display: page === 14 ? "" : "none" }}>
            {enumeratesk2 && page === 14 && <EAnimal2 />}
          </div>

          <div style={{ display: page === 15 ? "" : "none" }}>
            {enumeratesk2 && page === 15 && <EAquacultureAreas />}
          </div>

          <div style={{ display: page === 16 ? "" : "none" }}>
            {enumeratesk2 && page === 16 && <EAquaculture2 />}
          </div>

          <div style={{ display: page === 17 ? "" : "none" }}>
            {enumeratesk2 && page === 17 && <ESeaSaltFarming2 />}
          </div>

          <div style={{ display: page === 18 ? "" : "none" }}>
            {enumeratesk2 && page === 18 && <EMachinery2 />}
          </div>

          <div style={{ display: page === 19 ? "" : "none" }}>
            {enumeratesk2 && page === 19 && <EMachinery22 />}
          </div>

          <div style={{ display: page === 20 ? "" : "none" }}>
            {enumeratesk2 && page === 20 && <EMachinery23 />}
          </div>

          <div style={{ display: page === 21 ? "" : "none" }}>
            {enumeratesk2 && page === 21 && <EFertilizer2 />}
          </div>

          <div style={{ display: page === 22 ? "" : "none" }}>
            {enumeratesk2 && page === 22 && <EIncomeExpenses2 />}
          </div>

          <div style={{ display: page === 23 ? "" : "none" }}>
            {enumeratesk2 && page === 23 && <EMembers2/>}
          </div>

          <div style={{ display: page === 24 ? "" : "none" }}>
            {enumeratesk2 && page === 24 && <EProblem/>}
          </div>

          <div style={{ display: page === 25 ? "" : "none" }}>
            {enumeratesk2 && page === 25 && <ESpecialX/>}
          </div> 
          

        </EnumerateContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
