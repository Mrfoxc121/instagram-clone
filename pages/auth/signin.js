import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header"
export default function signin({ providers }) {
  return (
    <>
       <Header />
       <div className="flex justify-center space-x-7 mt-2">
        <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src="https://addevice.io/wp-content/uploads/2022/03/Choose-Instagram-Monetization-Strategy-removebg-preview.png" alt="instagram image" />
        <div className="">
            {Object.values(providers).map((provider)=>(
                <div key={provider.name} className="flex flex-col items-center">
                    <img className="w-32 object-cover" src="https://www.careeractivate.com/wp-content/uploads/2019/04/Instagram-1.png" alt="instagram image" />
                    <p className="text-sm text-center italic my-10">This app is created for training purposes only</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 text-white rounded-lg p-3 hover:bg-red-500">Sign in with {provider.name}</button>
                </div>
                
            ))}
        </div>
       </div>
    </>
    
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}