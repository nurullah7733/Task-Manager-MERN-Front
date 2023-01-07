import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { getProfileInfo } from "../APIRequest/api";
import MasterLayout from "../components/masterLayout/masterLayout";
import { useSelector } from "react-redux";
const Profile = lazy(() => import("../components/profile/profile"));

const ProfilePage = () => {
  const profileInfo = useSelector((state) => state.profile.value);

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <MasterLayout>
        <Suspense>
          <Profile profile={profileInfo} />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProfilePage;
