import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function Saved() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }
    return (
        <div className="flex justify-center items-center h-[800px]">

           


        </div>
    );
}