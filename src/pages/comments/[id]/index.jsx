import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));
  return {
    paths, // ここでStatic Generationするpathを定める。
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentId = (props) => {
  const { fallback } = props;

  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentId;
