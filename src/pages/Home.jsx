import Timer from '../components/Timer'
import MeditationQuotes from '../components/MeditationQuotes'
import BackgroundImage from '../components/BackgroundImage'
import '../styles/home-media.css';

export default function Home() {
  return (
    <div>
      <BackgroundImage />
      <MeditationQuotes />
      <Timer />
    </div>
  )
}
