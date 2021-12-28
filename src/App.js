import Nav from "./component/Nav/Nav";
import background from './assets/bg-banner.png'
import Ilus from './assets/ilus-bner.png'
import WhatIsCrypto from "./component/WhatIsCrypto";
import WhyChooseAs from "./component/WhyChooseAs";
import Chart from "./component/Charts/Chart";
import Newest from "./component/Newest";
import RoadMap from "./component/RoadMap";
import ReadWhitePapar from "./component/ReadWhitePapar";
import Team from "./component/Team";
import FAQ from "./component/FAQ";



function App() {

  const socials = [
    {
        src: '/icon-fb.png',
        url: 'https://www.facebook.com/ardmoney/'
    },
    {
        src: '/icon-ig.png',
        url: 'https://www.instagram.com/ard.money/'
    },
    {
        src: '/icon-telegram.png',
        url: 'https://t.me/ardmoneyofficial'
    },
    {
        src: '/icon-twitter.png',
        url: 'https://twitter.com/ard_money'
    },
]

  return (
    <div className="overflow-x-hidden">
        <Nav />
        <div className="bg-Mont-blue-100 pb-10 lg:pb-10 pt-20" style={{ backgroundImage: `url(${background})` }}>
          <div className="container mx-auto">
            <div className="flex">
              <div className="flex px-5 lg:px-0 lg:flex items-center justify-center w-full">
                <div className="">
                  <h1 className="text-white italic text-5xl font-semibold">Virtual money becomes easier</h1>
                  <h1 className="font-bold text-white py-10 text-2xl italic">More simple, more reliable</h1>
                  <h1 className="text-white w-3/5 text-2xl">Opportunity to participate in the crypto market without any borders.</h1>
                </div>
                <div className="pt-10">
                  <img src={Ilus} alt="Banner" />
                </div>
              </div>
              {/* <div className="w-2/4">
                <h1 className="text-red-500 text-5xl">Гоё зураг</h1>
              </div> */}
            </div>
          </div>
        </div>
        <WhatIsCrypto />
        <WhyChooseAs />
        <Chart />
        <Newest />
        <RoadMap />
        <ReadWhitePapar />
        <Team />
        <FAQ />
        <div className='bg-ardmBlack py-10 w-screen bg-Mont-blue-150'>
          <div className='container mx-auto text-center lg:text-left'>
              <div className="flex justify-between items-center">
                <a href='https://www.dsolutions.mn/' className='text-lg text-white font-medium cursor-pointer hover:text-ardmYellow'>
                    © Diverse Solutions
                </a>
                <div className='flex flex-wrap items-center justify-center'>
                  {
                      socials.map((social, index) => (
                          <a key={index} href={social.url} target='_blank'>
                              <div key={index} className='w-14 mx-2 hover:opacity-90 lg:mx-8 rounded-full h-14 p-3 flex justify-center items-center cursor-pointer bg-Mont-Gray-100'>
                                  <img className='' src={social.src} alt="social" />
                              </div>
                          </a>
                      ))
                  }
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
