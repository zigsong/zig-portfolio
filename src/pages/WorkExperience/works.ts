import woowacourseImg from 'assets/woowacourse.jpeg';
import angelswingImg from 'assets/angelswing-large.png';
import dbdlabImg from 'assets/dbdlab.png';

export default [
  {
    id: 1,
    image: woowacourseImg,
    title: '우아한 테크코스(FE 3기)',
    period: '2021.02~',
    intro: '웹 개발자 교육 프로그램',
    stacks: ['react.js', 'javascript', 'typescript', 'redux'],
    mains: [
      '미션 기반의 코드리뷰와 상호 코드리뷰를 통한 성장',
      '페어 프로그래밍에서 배우는 함께 자라기',
      '팀 프로젝트를 통한 서비스 운영 경험',
    ],
    learnings: [
      'JavaScript 기본기를 다지고 심화된 내용을 함께 토론하며 실제 코드에 적용시켜보았습니다.',
      'React.js를 이용하여 서비스를 개발하고, 백엔드와 협업하여 서비스의 기획부터 배포 및 유지보수 단계까지 경험했습니다.',
      'redux 등 상태관리 툴의 필요성을 이해하고 직접 활용해보았습니다.',
      '성능 최적화, 웹접근성, SEO 개선 등의 프론트엔드 역량을 키웠습니다.',
      '프레임워크를 사용하지 않고 SSR을 구현하여 서비스의 사용성을 높였습니다.',
    ],
    site: 'https://woowacourse.github.io/',
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
      '디자이너와 협업하며 화면의 배율에 따라 마우스 위치에 따른 지리 정보 데이터가 표시되는 자연스러운 경험을 제공할 수 있도록 고민했습니다.',
      '3D 라이브러리를 이용하여 서비스가 상당히 무거웠는데, 실제 타겟 사용자인 건설현장의 사양이 낮은 데스크탑에서도 무리없이 사용할 수 있도록 성능을 개선했습니다. React Profiler를 사용하여 컴포넌트가 불필요한 렌더링을 개선했습니다.',
      '여러 컴포넌트에서 사용하는 로직을 custom hook으로 분리하여 재사용성을 높였습니다.',
      'grid 형태로 구현되어 있던 CSS를 PC/태블릿/모바일 환경에서 확인할 수 있도록 반응형 페이지를 제작했습니다. 사용자의 접속 환경(디바이스)을 detect하여 그에 맞게끔 UI를 만들었습니다.',
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
      'React.js로 마크업과 기능을 개발했습니다.',
      '사용자 입력 데이터를 저장하여 설문조사 결과를 보여주었습니다.',
      'mobile first의 웹앱을 개발했습니다.',
    ],
    site: 'https://whonicorn.dbdlab.io/',
  },
];
