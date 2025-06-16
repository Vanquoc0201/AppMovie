"use client"
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  taiKhoan: string;
  login: (accessToken: string, taiKhoan: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [taiKhoan, setTaiKhoan] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const savedAccount = localStorage.getItem("taiKhoan");

    if (token && savedAccount) {
      setIsLoggedIn(true);
      setTaiKhoan(savedAccount);
    }
  }, []);

  const login = (accessToken: string, taiKhoan: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("taiKhoan", taiKhoan);
    setIsLoggedIn(true);
    setTaiKhoan(taiKhoan);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("taiKhoan");
    setIsLoggedIn(false);
    setTaiKhoan("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        taiKhoan,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};