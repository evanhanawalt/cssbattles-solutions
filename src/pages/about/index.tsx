import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about page for css battles" />
      </Head>
      <main className="mx-auto  flex flex-col gap-5 p-10">
        <p className="w-">
          <a href="https://cssbattle.dev/" className="text-blue-600">
            CSSBattle.dev
          </a>{" "}
          is a coding game that challenges players to visually match a target
          image using HTML and CSS.
        </p>
        <p>
          Points are awarded based on exactly matching the target image, as well
          as minimizing the number of characters used to solve each problem.
        </p>
        <p>
          <b>My solutions disregard minimizing character count.</b> I enjoyed
          matching the HTML/CSS, but wasnt interested in the competative
          challenge of smallest solution.
        </p>

        <p>
          This site was written to because I thought it would look cool to stack
          them all together.
        </p>
      </main>
    </>
  );
};
export default About;
