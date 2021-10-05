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
  stacks: [
    'TypeScript',
    'React.js',
    'react-query',
    'react-testing-library',
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
  ],
  githubUrl: 'https://github.com/woowacourse-teams/2021-nolto',
  deployUrl: 'https://nolto.app/',
  intro: '모두의 작고 소중한 토이프로젝트를 한눈에,\n놀러오세요 토이프로젝트!',
  members: ['우아한테크코스 3기 BE 교육생 4인', '우아한테크코스 3기 FE 교육생 2인'],
  roles: [
    'UI 디자인 전체',
    '제목/태그 검색 기능',
    '피드 검색 필터링 기능',
    '인기 태그 리스팅',
    '태그 자동완성 기능',
    '마이페이지 구현 및 알림 기능',
    '카카오톡 공유 기능',
    '피드 업로드 시 마크다운 기능',
    'hook 테스트 및 컴포넌트 테스트 작성',
    '반응형 UI 구현',
    '번들 최적화, webpack chunk를 통한 성능 최적화',
    '이미지 파일 최적화',
  ],
  learnings: [
    '<b>디자인과 기획</b>부터 모든 부분을 직접 만들어나가야 했습니다. 인프런을 통해 UI/UX 강의를 수강하여 최신 UI/UX 트렌드에 대해 고민하고 figma로 하나하나 그려서 적용해 보았습니다. 입체감 있는 carousel 구현을 위해 관련 CSS 속성들에 대해서 공부했으며, 자연스러운 transition과 animation들을 곳곳에 적용해보았습니다.',
    'github과 google oauth 연동을 위해 백엔드와 협업하여 필요한 데이터를 받게끔 서버 응답을 만들었으며, 로그인한 유저의 세션 확인을 위해 <b>context api</b>를 사용하여 유저 정보에 대한 상태관리를 만들어주었습니다. 해당 상태를 사용하는 컴포넌트에서 편리하게 코드를 작성하기 위해 메서드의 네이밍에도 신경 썼습니다.',
    '서버와 지속적으로 통신하는 부분이 많은 만큼 react-query 라이브러리를 사용하여 api 요청에 대한 틀을 잡고, 백엔드와 협의한 error code를 매핑하여 http request에서 에러 발생 시 미리 정해 둔 CustomError 클래스에서 해당 에러를 처리하도록 했습니다.',
    '디버깅용 에러 메시지 노출 뿐 아니라 <b>사용자 입장을 고려</b>하여 custom error 페이지에 snackbar와 dialog 창 등을 표시하여 서비스 장애 상황에도 계속하여 취해야 할 행동을 제시하도록 구현했습니다. react-query 의 요청-응답 상태에 대해서는 react의 <b>Suspense</b>를 활용하였으며, <b>Error Boundary</b>를 통해 각종 에러 상태에 대응하도록 했습니다.',
    '피드 등록/검색 시 기술스택 자동완성을 위해 백엔드 api를 호출하였는데, 이때 너무 많은 http request가 발생하지 않도록 debounce를 custom hook으로 구현하여 사용자 input에 따른 api 요청 횟수를 조정했습니다.',
    '작은 단위의 컴포넌트부터 bottom-up 방식으로 개발하였으며, 컴포넌트의 유연성과 재사용성을 높이기 위해 고민했습니다. 모든 컴포넌트에 storybook을 작성하였으며, react-testing-library로 <b>컴포넌트 각 단위 내 기능별 unit 테스트<b> 및 react-hooks-testing-library와 msw를 이용하여 react-query hook 테스트를 작성했습니다. 향후 테스트 코드 커버리지를 높이기 위해 테스트 코드 작성에도 힘쓸 예정입니다.',
    '현재 <b>성능 개선</b>을 위한 추가 작업 중이며, React Profiler를 도입하여 렌더링을 최적화할 수 있는 방법을 고민중입니다.',
  ],
  previews: [noltoImage01, noltoImage02, noltoImage03, noltoImage04, noltoImage05],
};

export const moariModal = {
  id: 2,
  title: '🌱 모아리: 모여라 동아리!',
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
  stacks: ['TypeScript', 'React.js', 'RStudio'],
  githubUrl: 'https://github.com/zigsong/visualization-team-B',
  deployUrl: 'https://visualization-b.netlify.app/',
  intro: '공부해도 모르겠는 주식, 타로카드로 당신의 주식 금전운을 점쳐드립니다!',
  members: ['2021-1 비주얼라이제이션 강의 팀원 3인'],
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
  githubUrl: 'https://github.com/zigsong/Ah-Really',
  deployUrl: 'https://zigsong.github.io/Ah-Really/',
  intro:
    '인기 아이돌인 당신은 팬들을 향한 무성의한 인성논란에 휩싸이게 된다.\n마지막 기회인 팬사인회, 과연 당신은 팬들의 탈덕을 막고 인성 갑 아이돌로 거듭날 수 있을 것인가?',
  members: ['2020-1 정보문화기술입문 강의 팀원 5인'],
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
  stacks: ['python', 'JavaScript', 'RubyOnRails'],
  githubUrl: 'https://github.com/aeri206/web-programming-team7',
  intro:
    '진짜 주식 초보, 주린이를 위한 백과사전!\n주식 관련 용어부터 주식 대가들의 투자까지 한눈에 살펴보고, 직접 조건을 선택하여 알맞은 기업을 스크리닝해볼 수 있습니다.',
  members: ['2020-1 웹프로그래밍개론 강의 팀원 5인'],
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
  stacks: ['swift'],
  githubUrl: 'https://github.com/zigsong/ios-streetcat',
  intro:
    '추위에 떠는 전국의 길냥이들.\n인간들의 마음을 따뜻하게 녹여주는 길냥이들의 위치를 등록하고 내 길냥이를 찜해보세요!',
  members: ['2019-2 인터페이스프로그래밍 강의 팀원 5인'],
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
