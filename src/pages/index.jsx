import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>

      <h1 className="text-3xl font-bold">
        Application using{" "}
        <Link href="https://jsonplaceholder.typicode.com/">
          <a className="hover:text-blue-400">JSONPlaceholder</a>
        </Link>
      </h1>
    </div>
  );
};

export default Index;
