import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';

export const BottleAnimation = (): ReactElement => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5490);
  }, [ ]);

  return (
    <div className="max-w-full h-screen m-auto flex flex-col items-center justify-center">
      <div className={classNames(isLoading ? '' : 'absolute mb-18', 'flex flex-col items-center animate-bounce')}>
        <div className="flex flex-col items-center absolute">
          <div className="bg-[#86b1c2] w-32 h-36 rounded-t-3xl z-0 flex flex-col justify-end drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]">
            <div className="bg-[#86b1c2] w-16 h-2 rounded-full z-0 ml-6 mb-4" />
            <div className="bg-[#86b1c2] w-16 h-2 rounded-full z-0 ml-6 mb-4" />
          </div>
          <div className="bg-[#86b1c2] w-36 h-8 rounded-3xl z-0 -translate-y-1 drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
          <div className="bg-[#86b1c2] w-32 h-12 rounded-full z-0 -translate-y-6 drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
          <div className="bg-[#86b1c2] w-9 h-12 rounded-full z-0 -translate-y-11 drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
        </div>
        <div className="bg-[#e8dcd8] w-32 h-36 rounded-t-3xl z-10 flex flex-col justify-end">
          <div className="bg-[#cdd3d8] w-16 h-2 rounded-full z-20 ml-6 mb-4" />
          <div className="bg-[#cdd3d8] w-16 h-2 rounded-full z-20 ml-6 mb-4" />
        </div>
        <div className="bg-[#f4ce9f] w-36 h-8 rounded-3xl z-20 -translate-y-1" />
        <div className="bg-[#f1b980] w-32 h-12 rounded-full z-10 -translate-y-6" />
        <div className="bg-[#f1b980] w-9 h-12 rounded-full z-10 -translate-y-11" />
        {/* Milk Drop */}
        <div>
          <div className="-translate-y-[3.9rem] z-0">
            <div className="animate-scaleUpTop border-solid border-b-[#e0e1e17c] border-b-8 border-x-transparent border-x-8 border-t-0" />
          </div>
          <div className="-translate-y-[4.3rem]">
            <div className="animate-scaleUpTop bg-[#e0e1e1] h-5 w-5 rounded-full -translate-y-1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start translate-y-10">
        <div className="bg-[#e0e1e1] w-2 h-2 rounded-full absolute delay-1000 animate-explosion [--x-distance:25px] [--y-distance:-20px] drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
        <div className="bg-[#e0e1e1] w-2 h-2 rounded-full absolute delay-1000 animate-explosion [--x-distance:15px] [--y-distance:-35px] drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
        <div className="bg-[#e0e1e1] w-2 h-2 rounded-full absolute delay-1000 animate-explosion [--x-distance:0px] [--y-distance:-40px] drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
        <div className="bg-[#e0e1e1] w-2 h-2 rounded-full absolute delay-1000 animate-explosion [--x-distance:-15px] [--y-distance:-35px] drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
        <div className="bg-[#e0e1e1] w-2 h-2 rounded-full absolute delay-1000 animate-explosion [--x-distance:-25px] [--y-distance:-20px] drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]" />
      </div>
      <div className={classNames([ isLoading ? '' : 'mt-96 animate-scaleOut', 'bg-[#cdd3d8] w-32 h-2 absolute rounded-full mt-96 drop-shadow-[-10px_-5px_5px_rgba(0,0,0,0.21)]' ])} />
    </div>
  );
};
