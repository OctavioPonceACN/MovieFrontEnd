import { useState } from "react";
import type { UseUserResult } from "../types/useUserResult";

function useUser(): UseUserResult {
  const [userName, setUserName] = useState<string | null>("Octavio Ponce");

  return {
    userName,
  };
}

export default useUser;
