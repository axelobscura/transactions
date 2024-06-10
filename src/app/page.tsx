import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center align-items-center p-24">
      <div className="flex flex-col">
        <h2 className="font-Teko mb-3 text-4xl font-semibold text-center">TRANSACTIONS DASHBOARD</h2>
        <Link 
          href={"/transactions"}
          className="font-Teko bg-blue-td text-2xl hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-blue-td-border hover:border-transparent rounded text-center pt-3"
        >
            SIGN IN
        </Link>
      </div>
    </main>
  );
}
