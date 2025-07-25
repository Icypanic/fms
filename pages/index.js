import Head from 'next/head';
import Header from '../components/Header';
import UnitStatusCard from '../components/UnitStatusCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>JYFMS Dashboard</title>
      </Head>
      <div className="bg-primary min-h-screen text-white">
        <Header />
        <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <UnitStatusCard unit="FIRE 101" status="Available" />
          <UnitStatusCard unit="FIRE 102" status="On Scene" />
          <UnitStatusCard unit="FIRE 103" status="Responding" />
        </main>
      </div>
    </>
  );
}