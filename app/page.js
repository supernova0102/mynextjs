import Image from 'next/image'
import styles from './page.module.css'

////a태그 = 하이퍼링크 생성 버튼태그 = 버튼을 만듬

export default function Home() {
  return (
    <body>
      <div style={{ textAlign: 'center', marginTop: '100px'}}>
       <h1>
        이정현과 슈퍼노바0102
       </h1>
       <h3>
        마인크래프트 모드팩과 게임을 만듭니다.
       </h3>
       <h3>
        국민대학교 인공지능학부 재학중.
       </h3>
       <div>
        사용 가능 언어
        C++
        Python
        ZenScript
       </div>
       <div>
        자체 제작 모드팩 Create : Creativism 을 소개합니다.
        git:
        <button><a href="https://github.com/supernova0102/Creativism">github</a></button>
       </div>
      </div>
    </body>
  )
}
