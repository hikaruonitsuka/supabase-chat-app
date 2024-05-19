"use client";

import Layout from "@/app/components/Layout";
import ChatApp from "@/app/components/ChatApp";
import useAuth from "@/hooks/useAuth";
import SignInGithub from "@/app/components/SignInGithub";

const Home = () => {
  const { session: isLogin } = useAuth();

  // ログインしている場合のみチャットページを表示
  return isLogin ? (
    <Layout>
      <h2>チャットアプリ</h2>
      <ChatApp />
    </Layout>
  ) : (
    <Layout>
      <h2>Githubでサインイン</h2>
      <SignInGithub />
    </Layout>
  );
};

export default Home;
