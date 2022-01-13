import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null
  );
  console.log(data);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created By {data.name}</div>;
};
