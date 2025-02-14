
import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52 ">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>
      <LoginForm />
      <Image width="150" height="60" src="/imgs/logo.png" alt='logo' className='mt-5'/>
    </div>
  );
}