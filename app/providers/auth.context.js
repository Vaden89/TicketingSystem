import { useContext, useState, createContext } from "react";

//idg
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    //idg
    <AuthContext.Provider value={{ setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

//idg
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
