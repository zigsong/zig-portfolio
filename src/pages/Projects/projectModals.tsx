import React from 'react';

import noltoImage01 from 'assets/modalImages/nolto/01.png';
import noltoImage02 from 'assets/modalImages/nolto/02.png';
import noltoImage03 from 'assets/modalImages/nolto/03.png';
import noltoImage04 from 'assets/modalImages/nolto/04.png';
import noltoImage05 from 'assets/modalImages/nolto/05.png';

import moariImage01 from 'assets/modalImages/moari/01.png';
import moariImage02 from 'assets/modalImages/moari/02.png';
import moariImage03 from 'assets/modalImages/moari/03.png';
import moariImage04 from 'assets/modalImages/moari/04.png';

import tarotImage01 from 'assets/modalImages/tarot/01.png';
import tarotImage02 from 'assets/modalImages/tarot/02.png';
import tarotImage03 from 'assets/modalImages/tarot/03.png';
import tarotImage04 from 'assets/modalImages/tarot/04.png';

import ahreallyImage01 from 'assets/modalImages/ahreally/01.png';
import ahreallyImage02 from 'assets/modalImages/ahreally/02.png';
import ahreallyImage03 from 'assets/modalImages/ahreally/03.png';
import ahreallyImage04 from 'assets/modalImages/ahreally/04.png';
import ahreallyImage05 from 'assets/modalImages/ahreally/05.png';
import ahreallyImage06 from 'assets/modalImages/ahreally/06.png';

import jurineeImage01 from 'assets/modalImages/jurinee/01.jpg';
import jurineeImage02 from 'assets/modalImages/jurinee/02.jpg';
import jurineeImage03 from 'assets/modalImages/jurinee/03.jpg';
import jurineeImage04 from 'assets/modalImages/jurinee/04.jpg';
import jurineeImage05 from 'assets/modalImages/jurinee/05.png';
import jurineeImage06 from 'assets/modalImages/jurinee/06.png';

export const insidegramModal = {
  id: 6,
  title: '🔮 인사이드그램',
  period: '2024.06~2024.08',
  stacks: ['Supabase', 'flutter'],
  githubUrl: 'https://github.com/zigsong/insidegram',
  deployUrl: 'https://insidegram.vercel.app/',
  intro: '나만의 감정이들과 대화하자, 인사이드그램',
  members: ['2024 우아한스터디 - 프롬프트 엔지니어링 참여자 3인'],
  roles: ['플러터 앱 개발', '감정이 학습 데이터셋 구축'],
  learnings: {
    '하이퍼클로바를 사용한 프롬프트 엔지니어링':
      '하이퍼클로바X를 사용하여 감정 분석 모델을 학습시키고, 사용자의 입력에 적절한 답변을 생성하는 프롬프트 엔지니어링을 경험했습니다.',
    'Flutter를 사용한 모바일 앱 개발':
      '플러터를 사용하여 모바일 앱을 개발하였으며, 각 화면의 UI/UX를 디자인하고 네트워크 통신을 구현했습니다.',
  },
  etc: [
    <a href="https://www.youtube.com/shorts/rA7Ip4IUl5w">시연 동영상</a>,
    <a href="https://sunnyhada.notion.site/e39748e978f64cb5b3b2bd8f0610f932">프로젝트 제출물</a>,
    <a href="https://zigsong.github.io/retrospective/insidegram-retrospective/">프로젝트 회고록</a>,
  ],
};
export const noltoModal = {
  id: 5,
  title: '🧸 놀토: 놀러오세요 토이프로젝트',
  period: '2021.07~2021.11',
  stacks: ['TypeScript', 'React.js', 'react-query', 'react-testing-library', 'express', 'jenkins'],
  githubUrl: 'https://github.com/woowacourse-teams/2021-nolto',
  deployUrl: 'https://nolto.app/',
  intro: '모두의 작고 소중한 토이프로젝트를 한눈에,\n놀러오세요 토이프로젝트!',
  members: ['우아한테크코스 3기 BE 교육생 4인', '우아한테크코스 3기 FE 교육생 2인'],
  roles: [
    'UI 디자인',
    '제목/태그 검색 기능',
    '태그 자동완성 기능',
    '마이페이지 구현 및 알림 기능',
    '카카오톡 공유 기능',
    '반응형 UI',
    'hook 테스트 및 유닛 테스트',
    '번들 압축 및 webpack chunk를 통한 성능 최적화',
    'express 서버를 이용한 SSR 구현',
    'refreshToken을 사용한 로그인',
    'SEO 및 웹접근성 개선',
  ],
  learnings: {
    '디자인 및 기획':
      'UI디자인과 기획부터 모든 부분을 직접 만들었습니다. UI/UX 강의 수강 후 figma를 이용해서 서비스 UI를 그렸습니다. 자연스러운 transition과 animation들을 곳곳에 적용해보았습니다.',
    '재사용 가능한 컴포넌트':
      '작은 단위의 컴포넌트부터 bottom-up 방식으로 개발하였으며, 컴포넌트를 조합하여 재사용성을 높였습니다. 컴포넌트별로 storybook을 작성하여 UI 테스트를 진행했습니다.',
    'webpack 설정':
      'webpack config를 dev와 prod로 분리하였으며, 필요에 따라 Bundle analyze와 optimization을 수행하도록 작성했습니다.',
    'TypeScript 사용':
      '관심사별로 interface를 분리하고 확장이 용이하도록 구현하였으며, 에러 발생 시 에러의 형태를 분리해주기 위해 type guard를 해주었습니다.',
    'react-query 사용':
      '서버 상태 관리 및 api 요청과 응답의 틀을 마련하기 위해 react-query를 사용했습니다. query를 hook으로 만들었으며, errorBoundary와 suspense 옵션을 사용하여 비동기 요청에 대한 응답을 AsyncBoundary로 관리했습니다.',
    'ErrorBoundary를 통한 에러 핸들링':
      'React의 Suspense와 Error Boundary를 결합한 AsyncBoundary를 만들어 http 통신에서의 로딩 및 에러 상황에 대응했습니다. 미처 대응하지 못한 에러는 Sentry 로깅 툴을 사용했습니다.',
    'snackbar 및 dialog로 유저에게 상황 안내':
      '에러 발생 시 사용자의 유연한 대처를 위해 ErrorFallback 페이지를 만들고, snackbar와 dialog를 제공하여 서비스 장애 상황에서 사용자가 문제를 인식하고 대처할 수 있게끔 구현했습니다.',
    'input debounce':
      '기술스택 자동완성을 위한 백엔드 api 호출 시 http 요청 수를 조절하여 성능과 유저 경험을 개선하기 위해 debounce를 구현했습니다.',
    '피드 인피니티 스크롤':
      'IntersectionObserver를 이용하여 인피니티 스크롤을 구현했으며, 스크롤 도중에 새 피드가 추가되거나 삭제되더라도 정상적으로 피드의 로드가 가능하도록 현재 피드 기준으로 다음 피드의 id부터 불러오게끔 API를 설계했습니다.',
    '성능 최적화 - 코드 스플리팅 및 이미지 용량 단축':
      '성능 개선을 위해 번들 파일 최적화 및 loadable components를 이용한 코드 스플리팅을 구현했습니다. 또 사용자가 업로드하는 gif 이미지의 확장자를 mp4로 변경하여 용량을 최대 1/10 수준으로 개선했습니다.',
    '성능 최적화 - 지표':
      '코드 스플리팅, 이미지 최적화, SSR 적용을 통해 성능 점수를 73 ➡️ 92점으로 개선하고, 번들 크기를 564kB에서 200kB로 줄였습니다. FCP는 4.7초에서 1.7초로 개선하였습니다.',
    'SSR 서버 구현과 nginx':
      '페이지 초기 진입 속도 향상과 SEO 개선을 위해 SSR을 적용했습니다. 직접 express 서버를 구축하였으며, nginx를 사용하여 https 포트 포워딩을 해주었습니다. SSR과 Suspense를 함께 사용하기 위해 React 18을 도입했으며, React의 hydrate을 이용하였습니다.',
    'refreshToken을 이용한 로그인':
      '안전한 로그인을 위해 만료일이 긴 refreshToken을 cookie에 저장하고, accessToken으로 서버와의 통신을 하도록 했습니다. 접속 중인 클라이언트 IP를 확인하여 express 프론트 서버와 백엔드 서버 사이 신뢰 가능한 통신을 구현했습니다.',
    '웹접근성 및 SEO 개선':
      '시멘틱 태그 사용과 보조 텍스트 표시, headingsTop 등의 도구를 이용하여 웹접근성을 개선하였으며, React Helmet을 이용해 각 페이지에 적절한 title과 meta 태그를 작성하여 SEO 지표 100점을 달성했습니다.',
  },
  previews: [noltoImage01, noltoImage02, noltoImage03, noltoImage04, noltoImage05],
};

export const moariModal = {
  id: 4,
  title: '🌱 모아리: 모여라 동아리!',
  period: '2020.08 ~ 2020.12',
  stacks: ['TypeScript', 'React.js', 'express', 'redux', 'redux-saga', 'mongoDB'],
  githubUrl: 'https://github.com/h-yes-oo/moari',
  intro:
    '모여라, 동아리!\n각 대학의 동아리를 한 눈에 모아보고, 조건에 맞게 검색할 수 있습니다.\n동아리 담당자를 대신하여 홍보와 리크루팅까지 해주는 서비스입니다.',
  members: ['멋쟁이사자처럼 8기 운영진 2인'],
  roles: [
    '프론트엔드(react.js)/ 백엔드(express, mongoDB) 풀스택',
    'mongoose를 이용한 DB Schema 설계',
    '로그인/검색 결과 페이지 및 상세 페이지 UI 디자인',
    '메인 페이지 carousel 및 전체 마크업',
    '동아리 등록 지면',
    '동아리 검색 및 필터링 기능',
    '동아리 좋아요 기능',
  ],
  learnings: {
    'mongoDB 데이터베이스 구현':
      'mongoDB로 NoSQL 기반의 데이터베이스를 구축했으며, mongoose를 사용하여 express 앱과의 연동 및 Schema를 설계했습니다. 서로 의존성을 가지는 모델을 연결하기 위해 기획 단계에서부터 꼼꼼한 모델 설계가 필요하다는 사실을 배웠습니다.',
    'express 서버 개발':
      'Node.js 기반의 express 서버를 구현했습니다. 관심사의 분리를 위해 상위 router에 따라 각각 별도의 모듈로 관리했으며, 클라이언트와의 통신을 위해 http-proxy-middleware를 사용했습니다.',
    '이미지 전송 및 저장': 'multer를 사용하여 post 요청으로 전송된 파일을 서버에 저장했습니다.',
    'redux를 사용한 상태관리':
      '앱 전역의 상태를 관리하기 위해 redux를 사용했습니다. 각 도메인별로 타입 정의/액션 정의/액션 생성자 함수/리듀서/saga를 같은 디렉토리에 작성하여 참조하기 쉽도록 구성했습니다.',
    'redux-saga를 사용한 비동기 요청 처리':
      '비동기 요청 처리를 위해 redux-saga를 사용했습니다. generator를 사용한 비동기 미들웨어 함수의 처리 로직을 배웠으며, typesafe-actions를 사용하여 요청/성공/실패 로직을 일관성 있게 작성했습니다.',
  },
  previews: [moariImage01, moariImage02, moariImage03, moariImage04],
};

export const tarotModal = {
  id: 3,
  title: '🃏 주식 타로',
  period: '2021.03 ~ 2021.06',
  stacks: ['TypeScript', 'React.js', 'RStudio'],
  githubUrl: 'https://github.com/zigsong/visualization-team-B',
  deployUrl: 'https://visualization-b.netlify.app/',
  intro: '공부해도 모르겠는 주식, 타로카드로 당신의 주식 금전운을 점쳐드립니다!',
  members: ['기획 1인/데이터 분석 1인/프론트엔드 개발 1인'],
  roles: [
    '프론트엔드 전체',
    '30개의 기업 카드 랜덤 분배',
    '선택한 3장의 카드에 맞는 기업 차트 데이터 제공',
    '페이지 슬라이드 구현',
  ],
  learnings: {
    'useMemo를 사용한 카드 shuffle 구현':
      '카드 목록 shuffle 후 카드를 뒤집을 때 리렌더링이 발생하는데, 이때 기존에 선택한 카드의 목록이 재정렬되지 않도록 useMemo를 사용했습니다.',
    '자동 스크롤을 통한 유저 경험 개선':
      '모든 카드 선택 시 자동으로 다음 단계로 갈 수 있도록 UX를 구현했으며, 선택 결과의 각 섹션으로 쉽게 이동할 수 있도록 스크롤 버튼을 만들었습니다.',
    'Portal을 이용한 Modal 구현':
      'Portal을 이용하여 기본적인 Modal 컴포넌트를 구현했으며, children prop으로 원하는 Modal의 컨텐츠를 받도록 만들어 재사용성을 높였습니다.',
  },
  previews: [tarotImage01, tarotImage02, tarotImage03, tarotImage04],
};

export const ahreallyModal = {
  id: 2,
  title: '🙄 아진짜요?',
  stacks: ['p5js', 'ml5js'],
  period: '2020.03 ~ 2020.06',
  githubUrl: 'https://github.com/zigsong/Ah-Really',
  deployUrl: 'https://zigsong.github.io/Ah-Really/',
  intro:
    '인기 아이돌인 당신은 팬들을 향한 무성의한 인성논란에 휩싸이게 된다.\n마지막 기회인 팬사인회, 과연 당신은 팬들의 탈덕을 막고 인성 갑 아이돌로 거듭날 수 있을 것인가?',
  members: ['기획 1인/디자인 1인/p5js 개발 3인'],
  roles: [
    '프론트엔드 전반, 팀장',
    '팬사인회 참여 팬 캐릭터 랜덤 등장',
    'ml5js를 활용한 신체 움직임 데이터 정보 사전 입력',
    '스테이지 5 - 팬이 준 선물 기억하기',
    '스테이지 6 - 주어진 이미지에 맞는 포즈 취하기',
    '전체 스테이지 합치기',
    '타이머 구현',
    '배경음 삽입',
  ],
  previews: [
    ahreallyImage01,
    ahreallyImage02,
    ahreallyImage03,
    ahreallyImage04,
    ahreallyImage05,
    ahreallyImage06,
  ],
};

export const jurineeModal = {
  id: 1,
  title: '💸 주린이를 위한 안내서',
  period: '2020.03 ~ 2020.6',
  stacks: ['python', 'JavaScript', 'Ruby-on-Rails'],
  githubUrl: 'https://github.com/aeri206/web-programming-team7',
  intro:
    '진짜 주식 초보, 주린이를 위한 백과사전!\n주식 관련 용어부터 주식 대가들의 투자까지 한눈에 살펴보고, 직접 조건을 선택하여 알맞은 기업을 스크리닝해볼 수 있습니다.',
  members: ['데이터 작성 2인/마크업 1인/풀스택 개발 2인'],
  roles: [
    '프론트엔드(react.js)/ 백엔드(ruby on rails) 풀스택',
    '기업 찜하기(좋아요) 기능',
    '페이지 메모 기능',
    '마이페이지, 찜한 기업 모아보기 기능',
    '기업 스크리닝 기능',
  ],
  previews: [
    jurineeImage01,
    jurineeImage02,
    jurineeImage03,
    jurineeImage04,
    jurineeImage05,
    jurineeImage06,
  ],
};
