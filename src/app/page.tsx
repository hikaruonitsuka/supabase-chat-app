"use client";

import LogoutButton from "@/app/components/LogoutButton";
import useAuth from "@/hooks/useAuth";
import SignInGithub from "./components/SignInGithub";

type Props = {
  children: React.ReactNode;
};

const Home = ({ children }: Props) => {
  const { session: isLogin } = useAuth();

  return (
    <>
      <header>
        {isLogin && <LogoutButton />}
        {!isLogin && <SignInGithub />}
        <p>This is the header area</p>
        <hr />
      </header>
      <main>{children}</main>
      <footer>
        <hr />
        <p>This is the footer area</p>
      </footer>
    </>
  );
};

export default Home;
