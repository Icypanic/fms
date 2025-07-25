import Header from '../components/Header';

export default function Training() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Training Page</h1>
        <p>This is the training section of the dashboard.</p>
      </main>
    </div>
  );
}