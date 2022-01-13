import Head from "next/head";
import Link from "next/link";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

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
