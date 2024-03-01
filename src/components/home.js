import Hero from './hero';

const Home = ()=>{
    return(
      <>
      <Hero text="Welcome to react 201"/>
      <div className='col-lg-8 offset-lg-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
              Hi, I am Dinesh Chandra, as of now working at varaisys
              as an software engineer, mainly working on profile as python 
              developer, having consider best logical skill to  solve problem.
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from the HTML.

              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running `npm run build`.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

export default Home