import { useEffect, useState } from 'react'
import { Idli, Dosa, Paratha, Hanger } from './Foods.jsx'

// Timings in ms (medium speed)
const SHOW_FOR = 3000 // time before the screen starts lifting
const LIFT_TIME = 1300 // time for the food + curtain to lift away

export default function Preloader({ onReveal }) {
  const [phase, setPhase] = useState('in') // in -> out -> done

  useEffect(() => {
    // Always start at the top of the page on load / refresh
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const show = reduce ? 500 : SHOW_FOR
    const lift = reduce ? 300 : LIFT_TIME

    const t1 = setTimeout(() => setPhase('out'), show)
    const t2 = setTimeout(() => onReveal(), show + lift * 0.5)
    const t3 = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, show + lift)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [onReveal])

  if (phase === 'done') return null

  return (
    <div className={`preloader ${phase === 'out' ? 'leaving' : ''}`} aria-label="Loading">
      <div className="preloader-hangers">
        <Hanger Food={Idli} size={96} left="7%" length={120} delay={0.1} swing={3} />
        <Hanger Food={Dosa} size={82} left="23%" length={230} delay={0.45} swing={3.6} />
        <Hanger Food={Paratha} size={110} right="21%" length={170} delay={0.75} swing={3.3} />
        <Hanger Food={Idli} size={80} right="6%" length={270} delay={1.0} swing={2.8} />
      </div>

      <div className="preloader-center">
        <img src="/images/logo-icon.jpg" alt="" className="preloader-logo" />
        <h1>
          <span className="script green">Southern</span>{' '}
          <span className="script red">Nutri</span>
          <span className="kitchen">Kitchen</span>
        </h1>
        <div className="loading-bar"><span></span></div>
        <p className="loading-text">Cooking something healthy for you…</p>
      </div>
    </div>
  )
}
