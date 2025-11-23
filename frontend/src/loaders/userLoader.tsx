import axios from "axios";
import { useEffect, useState } from "react";

export function useUserLoader() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get("http://localhost:3000/api/v1/user/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("user s id is:",response.data?.user._id);
      setUserId(response.data?.user._id);
    }

    fetchUser();
  }, []);

  return { userId};  
}

