import { Footer, Sidebar, TopMenu } from '@/components';
import { auth } from '@/auth.config';

export default async function ShopLayout({ children }: {
  children: React.ReactNode;
}) {
  const session = await auth();

  /*   if (!session?.user) {
      // redirect('/auth/login?returnTo=/perfil');
      redirect("/");
    } */
  return (
    <main className="min-h-screen">

      <TopMenu session={session} />
      <Sidebar />

      <div className="px-0 sm:px-10">
        {children}

      </div>

      <Footer />
    </main>
  );
}