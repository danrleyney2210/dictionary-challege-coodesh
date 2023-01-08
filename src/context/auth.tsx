import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


type Props = {
  children: ReactNode
}

type AuthContextData = {
  auth: boolean,
  setAuth: any,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState(false)

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,


    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}