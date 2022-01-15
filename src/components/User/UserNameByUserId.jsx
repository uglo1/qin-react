import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserNameByUserId = (props) => {
  const { data, error, Loading } = useFetch(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (Loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created By {data?.name}</div>;
};
