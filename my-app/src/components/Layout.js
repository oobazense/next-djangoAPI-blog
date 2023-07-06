import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono bg-gray-700">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen p-8">
          <div className="flex items-center pl-8 h-14 space-x-4">
            <Link
              href="/blog"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            >
              <h1 class="m-4 text-3xl font-extrabold text-gray-400 dark:text-white md:text-5xl lg:text-6xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  技術の動向と
                </span>{" "}
                その他もろもろ.
              </h1>
            </Link>

            <div className="block items-center justify-center">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://twitter.com/zense_ooba"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by zense_ooba
        </a>
      </footer>
    </div>
  );
}
