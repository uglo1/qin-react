import Head from "next/head";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const {user, error, isLoading} = useUser();

  if(isLoading){
    return <div>ローディング中</div>
  }
  if(error){
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      <p>email: {user?.email}</p>
      <p>phone: {user?.phone}</p>
    </div>
  );
}
