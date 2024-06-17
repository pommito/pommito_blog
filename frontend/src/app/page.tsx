import PostGrid from '@/components/layout/PostGrid';
import Hero from '@/components/modules/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PostGrid />
    </main>
  );
}
