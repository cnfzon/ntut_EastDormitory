import Navbar from '../components/Navbar';
import Event from '../components/Event';

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Event />
      </main>
    </div>
  );
} 