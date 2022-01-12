import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const {data: comment, error: commentError} = useSWR(
    router.query.id 
    ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}` 
    : null,
    fetcher
  )
  const {data: post, error: postError} = useSWR(
    comment?.postId
    ? `https://jsonplaceholder.typicode.com/posts/${comment.postId}` 
    : null,
    fetcher  
  )

  return {
    comment, 
    post,
    error: commentError || postError,
    isLoading: !post && !postError,
  }
}