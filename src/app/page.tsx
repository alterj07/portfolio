import NavigationBar from '@/Components/NavBar.js';
import './MainPage.css';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-black text-white">
      <div>
        <NavigationBar />
      </div>
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Jayden Portfolio</h1>
      </div>
    </div>
  )
}



