'use client';
//
// Built with BentoGrid.dev
// Component by Aaron Besson
// https://x.com/aaronbesson
// https://bentogrid.dev/store
/////

import BitCoinChart from './subcomponents/BitCoinChart';
import DoughnutChart from './subcomponents/DoughnutChart';
import BarChartDemo from './subcomponents/BarChartDemo';
import EthChart from './subcomponents/EthChart';
import { ChartBarIcon, ChartBarSquareIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';


export default function FourColTrader() {


  return (<div>
    <div className='gradient-background max-w-7xl w-full mx-auto p-12 rounded-xl my-12 bg-black  text-gray-500'>

      <div className='flex gap-2 mb-8 w-full justify-between'>
        <h1 className="text-xl md:text-3xl font-bold col-span-4 flex text-white items-center gap-2  transition-all duration-300">
          <ChartBarSquareIcon className="w-8 h-8 " />
          Four Column Trader</h1>

        {GitHubButton()}
      </div>

      <div className='max-w-7xl w-full flex gap-2 mb-8 mt-2 text-white'>
        Tags:
        <span className={tagsClass()}>Web 3</span>
        <span className={tagsClass()}>DeFi</span>
        <span className={tagsClass()}>Trading</span>
        <span className={tagsClass()}>Investing</span>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-flow-dense rounded-md">

        <div className="group gradient-background relative min-h-56 rounded-md flex flex-col shadow-2xl w-full justify-center items-center" style={{ gridColumnEnd: "span 2", gridRowEnd: "span 2", border: '#222 1px solid' }}>

          <div className='relative z-10 w-full'>
            <BitCoinChart />
          </div>
          <div className='absolute blur-xl w-full opacity-30'>
            <BitCoinChart />
          </div>
          <div className='grid md:grid-cols-4 gap-2 pb-4 md:pt-4 px-6 w-full'>
            <div className='text-xs col-span-3 line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            <div className='flex w-auto'>
              {Button()}

            </div>
          </div>
        </div>
        <div className="gradient-background relative m
                in-h-36 rounded-md  shadow-2xl" style={{ gridColumnEnd: "span 1", gridRowEnd: "span 1", border: '#222 1px solid', }}>
          <div className='p-4 flex flex-col'>
            <div className='relative -mt-12 -mb-8 z-10 -ml-6 md:ml-0'>
              <DoughnutChart />
            </div>
            <div className='absolute -mt-12 -mb-8 blur-xl -ml-6 md:ml-0'>
              <DoughnutChart />
            </div>
            <div>
              <div className="font-semibold text-xs">Marketing</div>
              <div className="opacity-90 text-xl font-bold text-blue-500">Pie Chart</div>
              <p className='text-xs mb-4'>Lorem ipsum dolor sit amet. Eiusmod tempor incididunt ut labore et dolore</p>
              <div className='flex'>
                {Button()}
              </div>
            </div>
          </div>

        </div>
        <div className="gradient-background relative min-h-56 rounded-md shadow-2xl" style={{ gridColumnEnd: "span 1", gridRowEnd: "span 1", border: '#222 1px solid' }}>
          <div className='px-4 pt-2 flex flex-col'>
            <div className="font-semibold text-xs">Marketing</div>
            <div className="opacity-90 text-xl font-bold text-blue-500 mb-4">Info Block</div>
            <BarChartDemo />
            <p className='text-xs mb-4'>Lorem ipsum dolor sit amet. Eiusmod tempor incididunt ut labore et dolore</p>
          </div>

        </div>
        <div className="gradient-background relative min-h-56 rounded-md shadow-2xl" style={{ gridColumnEnd: "span 1", gridRowEnd: "span 1", border: '#222 1px solid' }}>
          <div className="w-full justify-end items-end">
            <div className="p-4 rounded-lg m-2 flex-1 justify-center items-center" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
              <ChartBarIcon className="w-8 h-8 text-blue-500" />
              <span className="font-semibold text-xs">Marketing</span><br />
              <span className="opacity-90 text-xl font-bold text-blue-500">Bar Chart</span><br />
              <span className="opacity-90 text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</span>
              <div className='mt-4'>
                {Button()}
              </div>
            </div>

          </div>
        </div>
        <div className="gradient-background relative min-h-56 rounded-md shadow-2xl overflow-hidden" style={{ gridColumnEnd: "span 1", gridRowEnd: "span 1", border: '#222 1px solid' }}>
          <div className="p-4 rounded-lg m-2 w-full h-full justify-center items-center" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
            <span className="opacity-90 text-xl font-bold text-blue-500">Line Chart</span><br />
            <div className='text-xs md:w-1/2 md:absolute'>Lorem ipsum dolor sit amet.</div>
            <div className='w-full px-4'>
              <EthChart />
            </div>
            <div className='md:flex w-full md:justify-end pr-2'>
              {Button()}
            </div>
          </div>
        </div>
        {BuiltWithBento()}
      </div>


      <div className='flex gap-6 mt-20'>
        <Image alt="Built with NextJS" src="/nextjs.svg" width={390} height={75} className='w-14' />
        <Image alt="Built with Tailwind" src="/tailwind.svg" width={600} height={75} className='w-24' />
        <Image alt="Built with Chart.js" src="/chartjs.svg" width={300} height={75} className='w-12' />
        <Image alt="Built with Hero Icons" src="/hero.svg" width={300} height={75} className='w-24' />
      </div>
    </div>
  </div>)


  ///// TAGS
  function tagsClass() {
    return 'text-xs gradient-background px-2 rounded-full items-center flex border border-gray-800 opacity-50 hover:opacity-90 transition-all duration-300 cursor-pointer';
  }


  ///// BUTTON
  function Button() {
    return <button className='h-6 text-white p-1 rounded-full text-xs px-3 opacity-80 hover:opacity-100 transition-all duration-300 col-span-1 hover:-mt-0.5 active:mt-0.5 active:-mb-0.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-0'>Learn More</button>;
  }

  ///// GITHUB BUTTON
  function GitHubButton() {
    return <button className="py-2 px-4 gap-3 rounded-lg text-white  text-sm cursor-pointer flex x-2 items-center justify-center self-center gradient-background transition-all duration-200 hover:border-black shadow-md opacity-85 hover:opacity-100">
      <Image alt="Google Logo" src="/git.svg" width={21} height={21} className='' />
      <span className='hidden md:flex  transition-all duration-300'>Get it on GitHub</span>
    </button>;
  }
  ///// BUILT WITH BENTO GRID
  function BuiltWithBento() {
    return <a href="https://bentogrid.dev" className="text-xs text-gray-500 fixed bottom-1 z-50 left-2 flex items-center gap-1 bg-white rounded-lg py-0.5 px-2 shadow" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>Built with BentoGrid</a>;
  }



}