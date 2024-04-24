export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-black p-4 text-white font-sans tracking-wide'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-blue lg:static lg:size-auto lg:bg-none'></div>
      </div>
      <p className='text-4xl m-7'>BERLIN UNLEASHED.</p>
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
          text='Discover local events'
          imageURL='/images/vektor.png'
          subtext={`Personalized suggestions according to your interests on the days you are visiting`}
        />

        <Option
          text='ART exhibitions'
          imageURL='/images/art.png'
          subtext={`Find out what's going on in the city`}
        />
        <Option
          text='Restaurants, bars'
          imageURL='/images/map1.png'
          subtext={`Get a list of all our restaurant and bar recommendations in berlin along
        with our favorite highlights`}
        />
        <Option
          text='Find underground events'
          imageURL='/images/kraftwerk.png'
          subtext={`Find out what's going on in the city`}
        />
        <Option
          text='Book a tour'
          imageURL='/images/market.png'
          subtext={`Get personalised tips or book a tour to see Berlin with your own eyes. We'll talk about your interests and create the perfect tour for you`}
        />
        <Option
          text='Join the newsletter'
          imageURL='/images/newsletter.png'
          subtext={`join the newsletter and discover weekly events in the city`}
        />
        <Option
          text='Get the list of resources'
          imageURL='/images/resources.png'
          subtext={`Get a list of resources and discover for your self`}
        />
        <Option
          text='Cinema recommendations'
          imageURL='/images/kino.png'
          subtext={`Get a list of the best cinemas in Berlin and which movies they are playing`}
        />
        <Option
          text='Buy local art'
          imageURL='/images/local_art.png'
          subtext={`Get a list of the best cinemas in Berlin and which movies they are playing`}
        />
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
      <span className='text-2xl m-4'>{text}</span>
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
