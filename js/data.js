export const questions = [
  {
    number: '01',
    question: 'ABC 부트캠프 첫 날, <br> 내 속마음은?',
    choices: [
      { text: '어색해 ㅠㅠ <br>(그래도 점차 친해지겠지?)', value: 'i' },
      { text: '재밌겠다!<br> 열심히 해야징!', value: 'e' }
    ]
  },
  {
    number: '02',
    question: 'ABC 부트캠프 수료 하루 전,<br>잠들기 전 나는?',
    choices: [
      { text: '내일이면 40일 챌린지가 끝나다니!<br>뿌듯하다 ㅎㅎ', value: 's' },
      { text: '아쉽다...<br> (ABC 부트캠프 첫 날부터 오늘까지 회상한다)', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '같이 공부하는 친구가 <br> 힘들어한다면?',
    choices: [
      { text: 'OO아 같이 옥상가서 바람 쐴까? <br> 많이 힘들어?', value: 'f' },
      { text: '어떻게 왜 힘든데? <br> 강의 추천해줄게 이 강의 좋더라', value: 't' }
    ]
  },
  {
    number: '04',
    question: '방학이다! <br> 방학 시작하자마자 처음 시작한 건?',
    choices: [
      { text: '이번 방학에는 돈도 벌고, 스펙도 쌓아야지!<br> 계획을 짜볼까?', value: 'j' },
      { text: '당장 우선 좀 쉬고 <br> 차근차근 생각하자!', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '속상한 오늘<br>기분이 안 좋아 ㅠㅠ',
    choices: [
      { text: '운동으로 머릿속 생각을 비우자!', value: '' },
      { text: '덕질하면서 기분 끌어올려! >0< ', value: '' }
    ]
  },
  {
    number: '06',
    question: '함박눈이 내린다 휴대폰을 들어서<br>내가 한 일은?',
    choices: [
      { text: '날씨부터 <br> 검색한다', value: '' },
      { text: '눈 예쁘다 >< 사진 찍어야징!', value: '' }
    ]
  },
  {
    number: '07',
    question: '졸업 직전, 전공이랑 안 맞는 것 같다<br> 이때 나는?',
    choices: [
      { text: '자퇴 or 편입 or 가즈아~!~!', value: '' },
      { text: '전공을 살려야 할 거 같은데 ㅠㅠ? <br> 다른 길을 찾아보자!', value: '' }
    ]
  },
  {
    number: '08',
    question: '공부하는데 너무 어려워ㅠㅠ<br>어떻게 해결하지?',
    choices: [
      { text: '시간을 더 끌 순 없지.<br>교수님한테 당장 물어봐야지!', value: '' },
      { text: '어떡하지.. 남아서라도<br>방법을 더 찾아봐야겠다. ', value: '' }
    ]
  },
  {
    number: '09',
    question: '심심하다 <br> 뭘 할까?',
    choices: [
      { text: '휴대폰 하면서<br> 포근한 이불 속에 파뭍혀야지 @_@', value: '' },
      { text: 'oo이는 뭐하지?<br>연락해봐야겠다!', value: '' }
    ]
  },
  {
    number: '10',
    question: '내가 최연소 팀장이 되었다.<br>나의 마음은?',
    choices: [
      { text: '드디어 팀원들이 날 알아주는구나!<br>더 열심히 해야지!', value: '' },
      { text: '우리 팀은<br>무조건 1등, 1등, 1등을 위해 달려간다!', value: '' }
    ]
  },
]
export const results = [
  {/*entp, entj, estp*/
    title: '내 길은 <br>내가 정해!', 
    character: '/images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br> 양질의 데이터를 찾는 거라면 야근도 행복해요!',
      '누구보다 스스로 시간 관리가 철저해요!<br>우리 팀은 기한 내에 꼭 결과물을 제출하게 만들 거예요.:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['타임키퍼 <br> PM', '추진왕'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  },
  {
    title: '프로직진러!<br>진행력 갑',
    character: '/images/result_character2.png',
    results: [
      '나는야 팀원들의 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!<br>팀의 분위기 메이커!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 데이터 수집부터 분석, 기획안 작성까지 여러 업무를 해결할 수 있어요.',
      '우리 팀의 이벤트부터,<br>팀원들의 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['따뜻한<br>조력자', '기획서<br>작성왕'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  },
  {
    title: '우리 무기는<br>상상력!',
    character: '/images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>머리에서 데이터 활용 주제가 샘솟아요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ 이렇게 다 성장하는거죠 (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 저희 기술 포트폴리오 결과물은 완벽하죠!'
    ],
    jobs: ['분석적인<br>마케터', '섬세한<br>기획자'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  },
  {
    title: '인생은<br>한방!',
    character: '/images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.<br>데이터를 활용해서 알아보고 싶은 것도 너무 많아요',
      '꿈이 커요!<br>최우수 수료생과 최우수 팀프로젝트 상은 다 내 거예요!',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['프로젝트<br>리더', '프로젝트<br>매니저'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    character: '/images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서도 잘해요.<br>데이터 다 나한테 맡겨!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>데이터 분석에 빠지면 1인자가 될 자신 있어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  },
  {
    title: '인생 욜로지~<br>일단 놀자 ><',
    character: '/images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '데이터 활용?<br>너무 재밌을 거 같아요!',
      '새로운 사람들과 함께 40일 챌린지! 너무나 기대돼요!',
      '챌린지 성공하고, 갓생살자!!'
    ],
    jobs: ['발표는<br>내 것!', 'ppt/영상<br>제작왕'],
    lectureImg: '/images/result.jpg',
    lectureUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScTSKu5J20ZgZTl6iUrZcGlj-eQYpFT1V7VO91tE-ISCflhGg/viewform'
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}