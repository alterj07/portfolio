import NavBar from "../Components/NavBar";
export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-black text-white">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      </header>
      <NavBar />
    </div>
  );
}
