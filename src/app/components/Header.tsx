"use client";

import LogoutButton from "@/app/components/LogoutButton";
import useAuth from "@/hooks/useAuth";
import SignInGithub from "@/app/components/SignInGithub";

const Header = () => {
  const { session: isLogin } = useAuth();
  return (
    <header>
      {isLogin && <LogoutButton />}
      {!isLogin && <SignInGithub />}
      <p>This is the header area</p>
      <hr />
    </header>
  );
};

export default Header;
