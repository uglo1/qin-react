import Head from "next/head";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      <p>email: {user?.email}</p>
      <p>phone: {user?.phone}</p>

      <h1>投稿した記事一覧</h1>
      <PostsByUserId id={user.id} />
    </div>
  );
};
