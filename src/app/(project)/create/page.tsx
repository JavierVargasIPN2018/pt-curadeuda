
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';
import { RegisterForm } from './ui/form';
import { titleFont } from '@/config/fonts';


export default async function Create() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }
    return (
        <div className="flex flex-col items-center  h-[600px]">
        <h1 className={`${titleFont.className} text-4xl mt-7`}>Registrar deuda</h1>
        <RegisterForm />
    </div>
    

    );
}
