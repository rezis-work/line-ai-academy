"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    const createNewUser = async () => {
      const response = await axios.post("/api/user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        age: 0,
        subscriptionId: null,
      });
      setUserDetail(response.data);
    };
    if (user) {
      createNewUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default Provider;
