export interface UserContextType {
  userName: string;
  theme: string;
  toggleTheme: (color: string) => void;
}
