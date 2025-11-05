import { useState, type JSX, type ReactNode } from "react";
import UserContext from "../context/UserContext";

function UserProvider({ children }: { children: ReactNode }): JSX.Element {
  const [userName] = useState<string>("Octavio Ponce");
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = (color: string) => {
    setTheme(color);
  };

  return (
    <UserContext.Provider value={{ userName, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
