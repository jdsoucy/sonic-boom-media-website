// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, FAQ } from '../components';
import { MdCall } from 'react-icons/md';
import Logo from '../assets/sbm_logo.png';
import faqs from '../data/faqs.json';

export function App() {
  const email = 'hello@sonicboom.media';
  return (
    <div className="bg-light">
      <section className="bg-dark flex w-full flex-col justify-center items-center pt-8 pb-16 px-8 text-lighter bg-noise">
        <div className="pt-6 pb-16">
          <img src={Logo} alt="Sonic Boom Media logo" className="h-full max-h-20" />
        </div>
        <h1 className="text-6xl font-bold pb-4 max-w-[720px] text-center pb-8">A video editing service for Realtor</h1>
        <Button href="#pricing">See Pricing</Button> 
        <div className="text-sm pt-4">Video you’ll ♥, guaranteed</div>
      </section>
      <section className="bg-lighter text-lg font-bold text-dark text-center py-16 px-8 bg-noise">
        <h3 className="text-4xl pb-4">Full HD Videos for all platforms</h3>
        <p>Landscape for the web</p>
        <p>Square and portrait for social media</p>
        <div className="flex flex-col md:flex-row md:h-[200px] max-w-lg m-auto space-y-4 md:space-y-0 md:space-x-4 my-8 items-center justify-center text-sm md:text-lg">
          <div className="relative md:mr-6">
            <div className="aspect-video bg-dark text-light h-[75px] md:h-[200px]"></div>
            <div className="absolute text-light top-0 md:top-0 left-0 w-full h-full flex items-center justify-center">16:9</div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-dark text-light h-[75px] md:h-[200px]"></div>
            <div className="absolute text-light top-0 left-0 w-full h-full flex items-center justify-center">1:1</div>
          </div>
          <div className="relative w-[75px]  md:w-[200px]">
            <div className="aspect-video mt-4 md:mt-0 rotate-90 bg-dark text-light w-[75px] md:w-[200px]"></div>
            <div className="absolute text-light top-2 md:top-0 left-0 w-full h-full flex items-center justify-center">9:16</div>
          </div>
        </div>
      </section>
      <section className="bg-lighter text-lg font-bold text-dark pt-8 pb-16 px-8 bg-noise text-center">
        <h3 className="text-4xl pb-4">Recent work</h3>
        <iframe className="m-auto w-[320px] h-[180px] sm:w-[420px] sm:h-[236px] md:w-[560px] md:h-[315px] lg:w-[760px] lg:h-[426px]" src="https://www.youtube.com/embed/8L-BGYIq2Xw?si=kRUqKKdibp3DX8aH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </section>
      <section className="bg-dark text-lg font-bold text-lighter text-center py-16 px-8 bg-noise">
        <h3 id="pricing" className="text-5xl">Pricing</h3>
        <div className="flex flex-col md:flex-row max-w-4xl m-auto space-y-4 md:space-y-0 md:space-x-4 my-8">
          <Card
            title="50$"
            className="w-full md:w-1/3"
          >
            <Button href={`mailto:${email}`}>Make an order</Button> 
            <div className='pt-2'>
              <a 
                href="https://calendly.com/sonicboommedia/30min"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline hover:no-underline"
              >
                Book a call
              </a>
            </div>
            <div className="text-sm text-left mt-6">
            <div className="font-bold pb-4">What's included:</div>
              <ul className="list-disc pl-6 font-normal">
                {[
                  '1 video',
                  '1 format',
                  'Average 72 hour delivery',
                  'Easy credit-card payments',
                ]?.map(item => {
                  return (
                    <li>{item}</li>
                  )
                })}
              </ul>
            </div>
          </Card>
          <Card
            title="75$"
            className="w-full md:w-1/3"
          >
            <Button href={`mailto:${email}`}>Make an order</Button> 
            <div className='pt-2'>
              <a
                href="https://calendly.com/sonicboommedia/30min"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline hover:no-underline"
              >
                Book a call
              </a>
            </div>
            <div className="text-sm text-left mt-6">
            <div className="font-bold pb-4">What's included:</div>
              <ul className="list-disc pl-6  font-normal">
                {[
                '1 video',
                '3 formats',
                'Average 72 hour delivery',
                'Easy credit-card payments',
                ].map(item => {
                  return (
                    <li>{item}</li>
                  )
                })}
              </ul>
            </div>
          </Card>
          <Card
            title="More?"
            className="w-full md:w-1/3"
          >
            <div className='flex items-center justify-center text-dark text-4xl pb-6 pt-4'>
              <MdCall />
            </div>
            <Button href="https://calendly.com/sonicboommedia/30min">Book a call</Button> 
            <div className='pt-8'>
              <div className='text-sm font-normal'>Learn more about how DesignJoy works and how it can help you.</div>
            </div>
          </Card>
        </div>
      </section>
      <section className="bg-lighter text-lg font-bold text-dark text-left py-16 px-8 bg-noise">
        <div className="max-w-4xl m-auto">
          <h3 className="pb-4 text-5xl text-center">FAQs</h3>
          <div className="flex flex-col divide-y divide-solid divide-dark">
            {faqs.map((faq: any, index: number) => {
              return (
                <div key={index} className='py-4'>
                  <FAQ {...faq} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='bg-dark py-4 text-light text-sm bg-noise px-8'>
        <div className='max-w-4xl m-auto flex justify-between items-center '>
          <div className='flex space-x-8 items-center '>
            <img src={Logo} alt="Sonic Boom Media logo" className="h-8" />
            <div>Sonic Boom Media is headquartered in Montréal, Canada.</div>
          </div>
          <div className='space-x-4 hidden md:flex'>
            <a href={`mailto:${email}`}>Contact</a>
            <a href="#pricing">Get started</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
