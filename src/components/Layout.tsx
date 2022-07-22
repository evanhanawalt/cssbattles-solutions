import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <nav className="bg-neutral-100 border-gray-200 py-5 rounded">
        <ul className="pl-8 container flex flex-wrap gap-10 items-center mx-auto justify-start">
          <li>
            <Link href="/">
              <a
                className={`text-lg text-neutral-700 hover:text-blue-700 underline underline-offset-4 ${
                  !router.pathname.startsWith("/about")
                    ? "decoration-[3px]"
                    : ""
                }`}
              >
                CSS Battles
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`text-lg text-neutral-700 hover:text-blue-700 underline underline-offset-4 ${
                  router.pathname.startsWith("/about") ? "decoration-[3px]" : ""
                }`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <a
              className="text-lg text-neutral-700 hover:text-blue-700 underline underline-offset-4 "
              href="https://github.com/evanhanawalt/cssbattles-solutions"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};
export default Layout;
