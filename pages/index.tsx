import { Heart, Watch } from 'react-feather';
import { CustomerForm } from '@/components';

export const Home = () => (
  <>
    <div className="flex flex-col">
      <div className="flex justify-between mx-4 mt-6 mb-10">
        <button type="button" className="w-36">Buy Momma Logo</button>
        <button type="button" className="py-2 px-4 bg-black/10 rounded">Login</button>
      </div>
      <h1 className="max-w-sm m-auto text-center shadow-sm text-3xl font-light">Get started on Buy Momma</h1>
    </div>
    <div className="flex flex-col text-center pt-10 bg-black/10 m-5 mb-10 rounded-lg shadow-lg">
      <div className="px-10">
        <div>
          <div className="flex items-center mb-4">
            <Heart className="mr-4" />
            <h2 className="text-2xl">What we do</h2>
          </div>
          <p className="text-left text-sm mb-8">
            Trust us to make the perfect baby registry.
            <br />
            We&apos;ve hand picked moms most wanted items for you.
          </p>
          <div className="flex-grow border-t border-white/40 mx-4 my-2 shadow-lg" />
        </div>
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <Watch className="mr-4" />
            <h2 className="text-2xl">Focus on you</h2>
          </div>
          <p className="text-left text-sm mb-8">
            Save hours and have your specialzed registry ready in minutes.
          </p>
          <div className="flex-grow border-t border-white/40 mx-4 my-2 shadow-lg" />
        </div>
      </div>
      <div className="my-8 mx-4 bg-white/80 h-96 rounded-lg p-8">
        <CustomerForm />
      </div>
    </div>
  </>
);

export default Home;
