import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const {comment, post, error, isLoading} = useComment();

  if(isLoading){
    return <div>ローディング中</div>
  }
  if(error){
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      {post?.title ? <div>「{post?.title}」の投稿にコメントしました。</div> : null}
      <h1>{comment?.name}</h1>
      <p>{comment?.body}</p>
    </div>
  );
}
