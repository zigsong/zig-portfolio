import angelswingImg from 'assets/angelswing-large.png';
import dbdlabImg from 'assets/dbdlab.png';

export default [
  {
    id: 1,
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
      '디자이너와 협업하며 화면의 배율과 마우스 위치에 따른 지리 정보 데이터를 표시했습니다.',
      '3D 라이브러리를 이용하여 플랫폼이 상당히 무거웠습니다. 실제 타겟 사용자인 건설현장의 사양이 낮은 데스크탑에서도 무리없이 사용할 수 있도록 성능을 개선했습니다. React Profiler와 memo를 사용하여 컴포넌트가 불필요한 렌더링을 개선했습니다.',
      'grid 형태로 구현되어 있던 CSS를 flexbox로 수정하고, PC/태블릿/모바일 반응형 페이지를 제작했습니다. User-Agent를 detect하는 라이브러리를 사용하여 반응형을 구현했습니다.',
    ],
    site: '(건설업체별 계약형 플랫폼으로 서비스가 공개되지 않습니다.)',
  },
  {
    id: 2,
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
      '디자이너와 협업하여 UI 마크업과 기능을 개발했습니다.',
      '설문조사의 사용자 입력 데이터를 저장하고 결과를 보여주는 기능을 구현했습니다.',
      'mobile first의 웹앱을 개발했습니다.',
    ],
    site: 'https://whonicorn.dbdlab.io/',
  },
];
