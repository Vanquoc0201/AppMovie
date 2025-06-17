"use client";

import { useUserInfo } from "@/hooks/auth/useGetUserInfo";
import React from "react";
import AvatarHeader from "@/components/profile/AvatarHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ContactInfo from "@/components/profile/ContactInfo";

const Profile = () => {
  const { data: user, isLoading, isError } = useUserInfo();

  if (isLoading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Đang tải thông tin người dùng...
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="text-center mt-10 text-red-500">
        Không thể tải thông tin người dùng.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-18 px-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AvatarHeader name={user.hoTen} />
        <ProfileInfo hoTen={user.hoTen} taiKhoan={user.taiKhoan} />
        <ContactInfo email={user.email} soDt={user.soDt} />
      </div>
    </div>
  );
};

export default Profile;
