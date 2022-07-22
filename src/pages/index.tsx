import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import BattleFrame from "../components/BattleFrame";
import { getAllBattles } from "../lib/battles";
import React, { useState } from "react";

export async function getStaticProps() {
  const battles = getAllBattles();
  return {
    props: {
      battles,
    },
  };
}

const Battles: NextPage<{
  battles: Array<{ id: string; contents: string }>;
}> = ({ battles }) => {
  const [selectedBattle, setSelectedBattle] = useState<string | null>(null);
  const handleClick = (id: string) => {
    if (selectedBattle === id) {
      setSelectedBattle(null);
    } else {
      setSelectedBattle(id);
    }
  };
  return (
    <>
      <Head>
        <title>CSS Battles Solutions</title>
        <meta name="description" content="css battles" />
      </Head>
      <main className="mx-auto w-[400px] md:w-[800px] lg:w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 grid-flow-dense place-content-center place-items-center  py-5">
        {battles.map((value, index) => (
          <React.Fragment key={index}>
            <div
              className={`relative w-[400px] h-[300px] transition-transform md:hover:scale-[1.08] md:hover:z-10  hover:shadow-sm hover:shadow-slate-400/50 overflow-hidden ${
                selectedBattle === value.id ? "scale-105 z-[5]" : ""
              }`}
            >
              <BattleFrame battle={value.contents} />
              <button
                className="w-[400px] h-[300px] z-20 absolute top-0 left-0 cursor-pointer"
                onClick={() => handleClick(value.id)}
              ></button>
            </div>

            <div
              className={`relative w-full bg-white ${
                selectedBattle === value.id
                  ? "block h-[400px]"
                  : "h-0 invisible"
              } col-span-full flex  transition-all`}
            >
              <Link href={`/battles/${value.id}`}>
                <a
                  className={`text-neutral-50 bg-neutral-500 hover:bg-neutral-700 whitespace-nowrap p-8 flex items-center justify-center my-auto mx-3 rounded-md ${
                    selectedBattle === value.id ? "" : "invisible"
                  }`}
                >
                  Go To #{value.id}
                </a>
              </Link>
              <textarea
                disabled
                className="w-full p-3 m-2 mt-3 whitespace-pre resize-none font-mono text-sm bg-neutral-100 text-neutral-700 border-2 rounded-md border-neutral-700/50"
                defaultValue={value.contents}
              />
            </div>
          </React.Fragment>
        ))}
      </main>
    </>
  );
};
export default Battles;
