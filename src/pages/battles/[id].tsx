import Head from "next/head";
import Link from "next/link";
import BattleFrame from "../../components/BattleFrame";
import { getBattle, getBattlePaths } from "../../lib/battles";

export async function getStaticPaths() {
  const paths = getBattlePaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const battle = getBattle(params.id);
  return {
    props: {
      battle,
    },
  };
}

export default function BattlePage({
  battle,
}: {
  battle: { id: string; contents: string };
}) {
  return (
    <>
      <Head>
        <title>CSS Battle #{battle.id}</title>
        <meta
          name="description"
          content={`CSS battle #${battle.id} solution`}
        />
      </Head>
      <main className="container mx-auto flex flex-col justify-center items-center mt-5">
        <Link href={"/"}>
          <button className="self-start ml-5 text-neutral-50 bg-neutral-500 hover:bg-neutral-700 py-4 px-6 rounded-md">
            Back
          </button>
        </Link>
        <h3 className="text-neutral-800 text-xl my-2">Battle: #{battle.id}</h3>
        <BattleFrame battle={battle.contents} />
        <textarea
          disabled
          className="w-full lg:w-8/12 h-[400px] p-3 m-2 mb-6 mt-3 whitespace-pre resize-none font-mono text-sm bg-neutral-100 text-neutral-700 border-2 rounded-md border-neutral-700/50"
          defaultValue={battle.contents}
        />
      </main>
    </>
  );
}
