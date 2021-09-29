import woowacourseImg from 'assets/woowacourse.jpeg';
import angelswingImg from 'assets/angelswing-large.png';
import dbdlabImg from 'assets/dbdlab.png';

export default [
  {
    id: 1,
    image: woowacourseImg,
    title: '우아한 테크코스(FE 3기)',
    period: '2021.02~',
    intro: '웹 개발자 교육 기관',
    stacks: ['react.js', 'typescript', 'redux'],
    mains: [
      '(작성중)',
      '페어 프로그래밍에서 배우는 함께 자라기',
      '팀 프로젝트와 협업',
      '상호 코드리뷰를 통한 성장',
    ],
    learnings: [
      '(작성중)',
      'JavaScript 기초 학습',
      'react.js를 이용한 웹사이트 개발',
      'redux 등 상태관리 툴에 대한 이해',
      '프론트엔드 성능 최적화',
    ],
    site: 'https://techcourse.woowahan.com/',
  },
  {
    id: 2,
    image: angelswingImg,
    title: '엔젤스윙(인턴)',
    period: '2020.07~2020.09',
    intro: '드론 촬영 데이터를 기반으로 건설업체에 공간 정보 데이터를 제공하는 플랫폼',
    stacks: ['react.js', 'typescript', 'rxjs'],
    mains: [
      'Cesium, Open Layers 기반 드론 촬영 지리 정보 플랫폼에 측정값 표시',
      'Zeplin 기반 프론트엔드 마크업',
      '반응형 웹 페이지 제작',
    ],
    learnings: [
      '기업 서비스의 기존 코드와 구조를 파악하고, RxJS 기초 문법을 다루는 데 익숙지 않아 많은 공부가 필요했습니다. 업무 시간 외에도 시간을 내어 기존 코드와 관련 도서를 읽어가며 Observable의 개념을 익혔습니다.',
      '디자이너와 협업하며 화면의 배율에 따라 마우스 위치에 따른 지리 정보 데이터를 표시하는 과정을 사용자가 자연스럽게 느낄 수 있도록 고민했습니다.',
      'Open Layers와 Cesium 등의 3D 관련 라이브러리를 이용함에 따라 서비스가 상당히 무거웠는데, 실제 타겟 사용자인 건설현장의 사양이 낮은 데스크탑에서도 무리없이 사용할 수 있도록 성능을 고려해야 했습니다. React Profiler 등의 툴을 사용하여 컴포넌트가 불필요하게 렌더링되는 부분들을 발견하고 개선할 수 있는 부분들을 함께 고민했습니다.',
      '기존에 만들어진 custom hook들을 적절하게 사용하고, 경우에 따라 custom hook을 직접 작성하여 각 컴포넌트에서 사용할 수 있게끔 했습니다.',
      'grid 형태로 구현되어 있던 CSS를 PC/태블릿/모바일 환경에서 확인할 수 있도록 반응형으로 바꾸는 과정이 까다로웠습니다. 사용자의 접속 환경(디바이스)을 detect하여 그에 맞게끔 UI를 조정했습니다.',
    ],
    site: '(건설업체별 계약형 플랫폼으로 서비스가 공개되지 않습니다.)',
  },
  {
    id: 3,
    image: dbdlabImg,
    title: 'dbdlab(외주)',
    period: '2020.04',
    intro: '기업 제품/서비스에 대한 고객 피드백 수집 및 리서치 데이터를 제공하는 플랫폼',
    stacks: ['react.js', 'javascript'],
    mains: [
      '기업 제품/서비스 솔루션 분석을 위한 모바일 사전 설문조사 페이지 제작',
      '분석 결과 데이터를 계산하여 제공',
    ],
    learnings: [
      'react.js를 이용한 서비스 개발',
      '페이지 간 사용자가 입력한 데이터의 전달',
      'mobile-first의 웹앱 개발',
    ],
    site: 'https://whonicorn.dbdlab.io/',
  },
];
