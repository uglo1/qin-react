import Head from "next/head";
import Link from "next/link";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, post, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>

      <h1>{comment?.name}</h1>
      <p>{comment?.body}</p>

      <h5>コメントした記事</h5>
      <Link href={`/posts/${post.id}`}>
        <a>「{post.title}」</a>
      </Link>
    </div>
  );
};
