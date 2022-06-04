import React ,{useEffect,useState} from 'react'
import Theme from '../styles/theme'
import Navbar from "../components/navbar";
import { Wrapper } from "../styles/globalStyles";
import Footer from '../components/footer';
import NewsLetter from '../components/newsletter';
import LoadingBar from 'react-top-loading-bar'
export default function Layout({children}) {
  const [progress, setProgress] = useState(30)
  useEffect(() => {
    const timer = setTimeout(()=>setProgress(100),"250")
    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    <main>
      <Theme>
        <Wrapper>
        <LoadingBar
        color="black"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
          {children}
          <NewsLetter/>
          <Footer/>
        </Wrapper>
      </Theme>
    </main>
  )
}
