import { createContext, useContext } from "react"
import { UserInfo } from "../model/UserInfo";

let user:UserInfo = {
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
  };

  export type GlobalContent = {
    userInfo: UserInfo | null
    setUser:(c: UserInfo) => void
  }

  export const UserContext = createContext<GlobalContent>({
    userInfo: user, // set a default value
    setUser: () => {}
})

export const useGlobalUserContext = () => useContext(UserContext)