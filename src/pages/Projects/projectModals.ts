import noltoImage01 from 'assets/modalImages/nolto/01.png';
import noltoImage02 from 'assets/modalImages/nolto/02.png';
import noltoImage03 from 'assets/modalImages/nolto/03.png';
import noltoImage04 from 'assets/modalImages/nolto/04.png';
import noltoImage05 from 'assets/modalImages/nolto/05.png';

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
