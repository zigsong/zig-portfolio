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

import streetcatImage01 from 'assets/modalImages/streetcat/01.jpg';
import streetcatImage02 from 'assets/modalImages/streetcat/02.jpg';
import streetcatImage03 from 'assets/modalImages/streetcat/03.jpg';
import streetcatImage04 from 'assets/modalImages/streetcat/04.jpg';
import streetcatImage05 from 'assets/modalImages/streetcat/05.jpg';

export const noltoModal = {
  id: 1,
  title: '🧸 놀토: 놀러오세요 토이프로젝트',
  period: '2021.07~',
  stacks: [
    'TypeScript',
    'React.js',
    'react-query',
    'react-testing-library',
    'express',
    'Java',
    'Springboot',
    'junit5',
    'mariaDB',
    'hibernate',
    'aws',
    'nginx',
    'jenkins',
    'sonarqube',
    'docker',
    'Redis',
  ],
  githubUrl: 'https://github.com/woowacourse-teams/2021-nolto',
  deployUrl: 'https://nolto.app/',
  intro: '모두의 작고 소중한 토이프로젝트를 한눈에,\n놀러오세요 토이프로젝트!',
  members: ['우아한테크코스 3기 BE 교육생 4인', '우아한테크코스 3기 FE 교육생 2인'],
  roles: [
    'UI 디자인 전체',
    '제목/태그 검색 기능',
    '태그 자동완성 기능',
    '마이페이지 구현 및 알림 기능',
    '카카오톡 공유 기능',
    '피드 업로드 시 마크다운 기능',
    '반응형 UI 구현',
    'hook 테스트 및 유닛 테스트',
    '번들 압축 및 webpack chunk를 통한 성능 최적화',
    '이미지 파일 최적화',
    'express 서버를 이용한 SSR 구현',
    'refreshToken을 사용한 로그인',
    'SEO 및 웹접근성 개선',
  ],
  learnings: [
    '디자인과 기획부터 모든 부분을 직접 만들었습니다. UI/UX 강의 수강 후 figma를 이용해서 서비스 UI를 그렸습니다. 자연스러운 transition과 animation들을 곳곳에 적용해보았습니다.',
    '작은 단위의 컴포넌트부터 bottom-up 방식으로 개발하였으며, composition 방식을 이용하여 컴포넌트 재사용성을 높였습니다. 컴포넌트별로 storybook을 작성하여 UI 테스트를 진행했습니다.',
    'react-testing-library로 컴포넌트 기능별 unit 테스트 및 react-hooks-testing-library와 msw를 이용하여 react-query hook 테스트를 작성했습니다.',
    'TypeScript를 사용했습니다. 관심사별로 interface를 분리하여 확장 가능성을 고민했으며, type guard를 통해 안전한 타이핑을 지향했습니다.',
    '서버의 통신이 많아 react-query를 사용하여 api 요청과 응답의 틀을 마련했습니다. custom error code를 매핑하여 http 에러 발생 시 CustomError 클래스에서 알맞는 에러 메시지를 전달할 수 있도록 했습니다.',
    'React의 Suspense와 Error Boundary를 결합한 AsyncBoundary를 만들어 http 통신에서의 로딩 및 에러 상황에 대응했습니다.',
    '에러 발생 시 사용자의 유연한 대처를 위해 ErrorFallback 페이지를 만들고, snackbar와 dialog를 제공하여 서비스 장애 상황에서 사용자가 문제를 인식하고 대처할 수 있게끔 구현했습니다.',
    '기술스택 자동완성을 위한 백엔드 api를 호출 시 http 요청 수를 조절하기 위해 custom hook으로 debounce를 구현했습니다.',
    '성능 개선을 위해 번들 파일 최적화 및 loadable components를 이용한 코드 스플리팅을 구현했습니다. 사용자가 업로드하는 gif 이미지의 확장자를 mp4로 변경하여 FCP를 최대 1/10 수준으로 개선했습니다.',
    '페이지 초기 진입 속도와 SEO 개선을 위해 SSR을 적용했습니다. 직접 express 서버를 구축하였으며, nginx를 사용하여 https 포트 포워딩을 해주었습니다.',
    '코드 스플리팅, 이미지 최적화, SSR 적용을 통해 성능 점수를 73 ➡️ 92점으로 개선하고, 번들 크기를 564kB에서 200kB로 줄였습니다. FCP는 1초대로 개선하였습니다.',
    '안전한 로그인을 위해 refreshToken을 cookie에 저장하고, 접속 중인 클라이언트 IP를 확인하여 express 프론트 서버와 백엔드 서버 사이 신뢰도 높은 통신을 구현했습니다.',
    'React Helmet을 이용해 각 페이지에 적절한 title과 meta 태그를 작성하여 SEO 지표 100점을 달성했습니다.',
  ],
  previews: [noltoImage01, noltoImage02, noltoImage03, noltoImage04, noltoImage05],
};

export const moariModal = {
  id: 2,
  title: '🌱 모아리: 모여라 동아리!',
  period: '2020.08 ~ 2020.12',
  stacks: ['TypeScript', 'React.js', 'express', 'redux', 'redux-saga', 'mongoDB'],
  githubUrl: 'https://github.com/h-yes-oo/moari',
  intro:
    '모여라, 동아리!\n각 대학의 동아리를 한 눈에 모아보고, 조건에 맞게 검색할 수 있습니다.\n동아리 담당자를 대신하여 홍보와 리크루팅까지 해주는 서비스입니다.',
  members: ['멋쟁이사자처럼 8기 운영진 2인'],
  roles: [
    '프론트엔드(react.js)/ 백엔드(express, mongoDB) 풀스택 ',
    '로그인/검색 결과 페이지/상세 페이지 UI 디자인',
    '메인 페이지 carousel 및 전체 마크업',
    '동아리 등록 페이지',
    '동아리 검색 및 필터링 기능',
    '동아리 좋아요 기능',
  ],
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
  previews: [tarotImage01, tarotImage02, tarotImage03, tarotImage04],
};

export const ahreallyModal = {
  id: 4,
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
    '스테이지 6  -주어진 이미지에 맞는 포즈 취하기',
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
  id: 5,
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

export const streetcatModal = {
  id: 6,
  title: '🐱 대동길냥여지도',
  period: '2019.09 ~ 2019.12',
  stacks: ['swift'],
  githubUrl: 'https://github.com/zigsong/ios-streetcat',
  intro:
    '추위에 떠는 전국의 길냥이들.\n인간들의 마음을 따뜻하게 녹여주는 길냥이들의 위치를 등록하고 내 길냥이를 찜해보세요!',
  members: ['디자인 1인/개발 4인'],
  roles: [
    'MapKit을 이용한 Google 지도 표시',
    'CLLocation 기반 길냥이 위치 표시',
    '길냥이 데이터를 json encoding하여 디바이스에 저장',
    '길냥이 색상 선택 및 이름 변경',
  ],
  previews: [
    streetcatImage01,
    streetcatImage02,
    streetcatImage03,
    streetcatImage04,
    streetcatImage05,
  ],
};
