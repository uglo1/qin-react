import Head from "next/head";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.name}</h1>
      <p>email: {data?.email}</p>
      <p>phone: {data?.phone}</p>

      <h2>投稿した記事一覧</h2>
      <PostsByUserId id={data.id} />
      <h2>投稿したコメント一覧</h2>
    </div>
  );
};
