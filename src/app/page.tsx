export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-black p-4 text-gray-200 font-sans-serif  tracking-wide'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-blue lg:static lg:size-auto lg:bg-none'></div>
      </div>
      <p className='text-4xl m-7  text-center'>BERLIN UNLEASHED </p>
      <p
        className='text-xl mb-5  text-center'
        style={{ fontFamily: 'cursive' }}
      >
        your underground guide for Berlin 💥
      </p>
      {/* <p className='text-xl mb-5'>---------</p>
      <p className='text-xl mb-5'>| W I P |</p>
      <p className='text-xl mb-5'>---------</p> */}
      <p className='text-xl mb-5 font-mono text-center'>
        110100 / W I P / 101010
      </p>
      <div
        className='my-30 h-1 w-80p border-t border-gray-300 dark:border-gray-100'
        style={{
          margin: 10,
          height: 1,
          width: '80%',
          backgroundColor: 'white',
          opacity: 0.1,
        }}
      ></div>

      <div
        // className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left '
        className='mb-32 grid text-center grid lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2'
      >
        <Option
          text=' 4 u'
          imageURL='/images/kraftwerk.png'
          subtext={`Find out what's going on (the FOMO IS real)`}
        />
        <Option
          text='ART exhibitions'
          imageURL='/images/art.png'
          subtext={`Openings / performances`}
        />
        <Option
          text='Restaurants, bars'
          imageURL='/images/map1.png'
          subtext={`Get a list the best restaurant and bars`}
        />
        <Option
          text='Find underground events'
          imageURL='/images/vektor.png'
          subtext={`Events / audiovisual installations / dj sets`}
        />

        {/* <Option
          text='Personal recommendations'
          imageURL='/images/newsletter.png'
          subtext={`Let's talk and see what's good for you`}
        />
        <Option
          text='Get a tour'
          imageURL='/images/market.png'
          subtext={`Get purposely lost`}
        /> */}

        {/* <Option
          text='Join the newsletter'
          imageURL='/images/newsletter.png'
          subtext={`join the newsletter and discover weekly events in the city`}
        /> */}
        <Option
          text='LINKS'
          imageURL='/images/resources.png'
          subtext={`Get a list of resources and discover for yourself`}
        />
        {/* <Option
          text='Cinema recommendations'
          imageURL='/images/kino.png'
          subtext={`Get a list of the best cinemas in Berlin and which movies they are playing`}
        /> */}
        <Option
          text='Buy local art'
          imageURL='/images/local_art.png'
          subtext={`Coming soon...`}
        />
      </div>
      <p className='text-lg m-10 items-center text-center max-w-2xl'>
        Berlin is a vibrant city with tens of things going on every day. When
        visiting for a few days it may be hard to find the things running below
        the surface wether you’re traveling, or you’ve lived here for a while.
      </p>
      <div
        className='justify-center text-center text-pink-500  text-xl pb-3         
'
      >
        Get in touch! 💥
        <br />
      </div>
      <a href='https://www.instagram.com/berlin.unleashed/'>
        <div
          className='justify-center text-center text-pink-500  text-lg          
        '
        >
          @berlin.unleashed <br />
        </div>
      </a>
      <div
        className='justify-center text-center text-pink-500  text-lg          
        '
      >
        berlin.unleashed@gmail.com <br />
      </div>
      <div
        className='justify-center text-center text-pink-400  text-lg          
'
      >
        {/* <p className='text-2xl underline'>
          <a href='https://docs.google.com/forms/d/1ErBtkNQa3cH7jqcFPDNYzDkdQWbid_QSA3Ss-tqZT40/viewform?edit_requested=true'>
            google form
          </a>
        </p> */}
      </div>
      <div className='justify-center text-center my-10'>
        <p>Impressium</p>
        <p>Contact</p>
      </div>
    </main>
  )
}
type OptionProps = {
  text?: string
  imageURL?: any //fix this
  subtext?: string
}
const Option = ({ text = 'text', imageURL, subtext }: OptionProps) => {
  return (
    <div className='m-5 align-center '>
      <span className='text-2xl ' style={{ textTransform: 'uppercase' }}>
        {text}
      </span>
      <div className='m-5 w-full h-[500px] mx-auto overflow-hidden flex items-center justify-center'>
        <img
          src={imageURL}
          className='h-auto w-full '
          alt={text.replace(' ', '_')}
          style={{ objectPosition: ' 50% 50%' }}
        />
      </div>
      <p className='m-6 text-lg'>{subtext}</p>
    </div>
  )
}
