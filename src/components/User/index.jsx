import Head from "next/head";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <h2 className="text-lg font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>email: {data.email}</li>
        <li>username: {data.username}</li>
        <li>address: {data.address.city}</li>
        <li>phone: {data.phone}</li>
        <li>website: {data.website}</li>
        <li>company name: {data.company.name}</li>
      </ul>

      <h2 className="text-lg font-bold mt-10">投稿した記事一覧</h2>
      <div className="mb-8 mt-4">
        <PostsByUserId id={data.id} />
      </div>
    </div>
  );
};
