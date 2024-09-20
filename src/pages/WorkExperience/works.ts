import angelswingImg from 'assets/angelswing-large.png';
import woowabrosImg from 'assets/woowabros.jpg';

export default [
  {
    id: 1,
    image: woowabrosImg,
    title: '우아한형제들 프론트엔드 개발',
    period: '2022.01~',
    intro: '배달의민족 사장님을 위한 가게관리 서비스',
    stacks: ['react.js', 'typescript'],
    mains: ['셀러셀프서비스팀 업무...', '사장님이 더 장사를 잘 하실 수 있도록...'],
    learnings: ['사용자 중심의...', '광고신청의 복잡한 API 로직 처리...', '디자인 시스템 적용...'],
    site: 'https://www.woowahan.com/',
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
      '디자이너와 협업하며 화면의 배율과 마우스 위치에 따른 지리 정보 데이터를 표시했습니다.',
      '3D 라이브러리를 이용하여 플랫폼이 상당히 무거웠습니다. 실제 타겟 사용자인 건설현장의 사양이 낮은 데스크탑에서도 무리없이 사용할 수 있도록 성능을 개선했습니다. React Profiler와 memo를 사용하여 컴포넌트가 불필요한 렌더링을 개선했습니다.',
      'grid 형태로 구현되어 있던 CSS를 flexbox로 수정하고, PC/태블릿/모바일 반응형 페이지를 제작했습니다. User-Agent를 detect하는 라이브러리를 사용하여 반응형을 구현했습니다.',
    ],
    site: '(건설업체별 계약형 플랫폼으로 서비스가 공개되지 않습니다.)',
  },
];
