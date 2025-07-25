import Header from '../components/Header';

export default function MDT() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">MDT Page</h1>
        <p>This is the mdt section of the dashboard.</p>
      </main>
    </div>
  );
}