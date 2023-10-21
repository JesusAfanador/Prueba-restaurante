
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState( window.localStorage.getItem("token") || null);
  const x = process.env.REACT_APP_CLAVE_DOS
  const login = useCallback(function (newToken) {
    if (newToken) {
      window.localStorage.setItem("token", newToken);
      setToken(newToken);
    }
  }, []);
  const logout = useCallback(function () {
    window.localStorage.removeItem( "token");  setToken(null);
  }, []);
  const value = useMemo(
    () => ({
      login,
      logout,
      token,
      x,
    }),
    [ x ,token, login, logout]
    
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}