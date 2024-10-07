import React from 'react';

import angelswingImg from 'assets/angelswing-large.png';
import woowabrosImg from 'assets/woowabros.jpg';
import spectrumImg from 'assets/spectrum.png';

export default [
  {
    id: 1,
    works: [
      {
        image: woowabrosImg,
        title: '우아한형제들\n- 셀러셀프서비스팀',
        period: '2022.01~',
        intro: '배달의민족 사장님을 위한 가게관리 서비스',
        stacks: ['react.js', 'typescript', 'mobx'],
        mains: [
          '입점 후 가게관리/ 광고관리/ 정산관리 등 배민가게운영을 위한 기능 제공',
          '사장님이 스스로 장사를 잘 할 수 있는 환경 조성',
        ],
        learnings: [
          {
            title: '단순 코딩이 아닌 사용자 경험을 개선하기 위한 한끗 디테일',
            desc: (
              <>
                <div>
                  리뷰 사장님 댓글 자주쓰는문구 기능에 순서를 부여하여 사장님들이 문구를 보다 편리할
                  수 있도록 UX를 개선했습니다.
                </div>
                <div>
                  배민셀프서비스 챗봇 개발 과제를 진행하며 HTTP 통신 채팅의 한계를 극복하기 위해
                  응답의 반응성을 고민하여 개발했습니다.
                  <br />
                  <a href="https://techblog.woowahan.com/16021/" target="_blank">
                    (관련 포스팅: 우아한 기술블로그 - 셀프서비스, 챗봇에게 물어보세요)
                  </a>
                </div>
              </>
            ),
          },
          {
            title: '개발 생산성 개선 및 업무 자동화',
            desc: (
              <>
                <div>
                  webpack cache 최적화 및 babel 설정을 통해 개발 환경 빌드 속도를 50초에서 5초로
                  줄였습니다.
                </div>
                <div>
                  테스트 실행 단위를 분리하여 CI 테스트 수행 속도를 180s에서 140s로 개선했습니다.
                  또한 테스트 코드를 구현 세부사항과 분리시키고, enzyme 테스트 코드를
                  react-testing-library로 마이그레이션하여 편리하고 유의미한 테스트 코드를 작성하기
                  위한 기반을 구축했습니다.
                </div>
                <div>
                  gitlab API를 이용한 CI 스크립트를 통해 Deploy MR(Merge Request) 본문 작성을
                  자동화하여 스프린트 배포에 포함되는 작업을 정리하는 시간을 대폭 줄였습니다.
                </div>
                <div>
                  구글 스프레드시트의 Apps Script를 작성하여 프론트 로그 정보를 일일이 코드로 옮기던
                  이전의 방식에서 벗어나 한 번의 명령어를 통해 로그 데이터를 받아올 수 있도록
                  개선했습니다.
                </div>
                <div>
                  디자인시스템 마이그레이션 과정에서 webpack custom loader로 '디자인 하이라이터'를
                  개발하여 개발자와 디자이너의 QA 시간을 1분 미만으로 단축시켰습니다.
                </div>
              </>
            ),
          },
          {
            title: '리소스 낭비를 줄이는 운영 생산성 개선',
            desc: (
              <>
                <div>
                  서비스 진입 시 노출되는 팝업을 제어할 수 있는 어드민 개발에 참여하여 신규 팝업
                  개발에 소요되는 시간을 일주일에서 약 6시간으로 단축했습니다.
                </div>
                <div>
                  사내 해커톤(우아톤)에 참여하여 AI를 활용한 가게 콘텐츠보드 검수 자동화 프로덕트
                  개발의 프로토타입을 만들었습니다. 이후 실제 과제로 진행되어 모니터링 정확도가
                  31.5%p 개선되었으며, 개인정보 차단 콘텐츠의 79%를 사전에 검출할 수 있게
                  되었습니다.
                </div>
              </>
            ),
          },
        ],
        site: (
          <a href="https://self.baemin.com/" target="_blank">
            https://self.baemin.com/
          </a>
        ),
      },
      {
        title: '우아한형제들\n- 우아한스펙트럼\n(워킹그룹 겸업)',
        period: '2022.05~',
        intro: '배달의민족 웹프론트엔드 개발자들의 기술 공유 플랫폼',
        stacks: ['react.js', 'typescript', 'react-query', 'nest.js'],
        mains: ['웹프론트테크트리 리딩', '사내 프론트엔드 개발자들을 위한 서비스 제공'],
        learnings: [
          {
            title: '웹프론트테크트리 리딩',
            desc: (
              <>
                <div>
                  약 2년 간 사내 웹프론트테크트리 워킹그룹의 리더를 맡아 5명의 팀원들과 함께
                  서비스의 기획 및 개발을 이끌어나갔습니다.
                </div>
                <div>
                  (이후 '우아한웤플로'에 편입되었으나 직접 서비스 고도화 및 유지보수를 지속해나가고
                  있습니다.)
                </div>
              </>
            ),
          },
          {
            title: '프로덕트 기획/프론트/서버 개발 총괄',
            desc: (
              <>
                <div>
                  프로덕트의 단계별 목표 수립 및 세부 과제들을 정의하고, 피그마를 이용하여 직접
                  프로덕트의 디자인을 만들었습니다.
                </div>
                <div>
                  react 프론트 개발 환경 뿐 아니라, nest.js로 서버 API 개발 및 batch job 개발을
                  풀스택으로 진행했습니다.
                </div>
              </>
            ),
          },
          {
            title: '서버 개발 및 batch job 개발',
            desc: (
              <>
                <div>
                  Nest.js의 Cron job을 통해 사내 프론트엔드 레포지토리 정보 및 사용중인 라이브러리
                  정보를 매일 최신화할 수 있도록 구현했습니다.
                </div>
                <div>
                  Nest.js와 TypeORM을 이용하여 사내 프론트엔드 레포지토리 정보 및 사용중인
                  라이브러리 정보의 매핑 테이블을 구현하여 사내 다양하게 흩어져 있는 기술 정보들을
                  한눈에 볼 수 있도록 구현했습니다.
                </div>
              </>
            ),
          },
          {
            title: '우아콘2023 발표',
            desc: (
              <>
                <div>
                  사내 워킹그룹에서 프로젝트를 수행하며 모노레포와 프론트 빌드 방식, 서버 batch
                  job에서의 실수 경험 등의 내용을 담아 우아콘2023에서 세션 발표를 했습니다.
                  <br />
                  <a
                    href="https://www.woowacon.com/presentations?presentationId=610"
                    target="_blank"
                  >
                    우아콘2023: 웹프론트 개발자들을 위한 '우아한스펙트럼' 서비스 제작기
                  </a>
                </div>
              </>
            ),
          },
        ],
        site: '(사내 서비스로 외부에 공개되지 않습니다.)',
      },
    ],
  },
  {
    id: 2,
    works: [
      {
        image: angelswingImg,
        title: '엔젤스윙(인턴)',
        period: '2020.07~2020.09',
        intro: '드론 촬영 데이터를 기반으로 건설업체에 공간 정보 데이터를 제공하는 플랫폼',
        stacks: ['react.js', 'typescript', 'rxjs'],
        mains: ['Cesium, Open Layers 기반 드론 촬영 지리 정보 플랫폼 구현'],
        learnings: [
          {
            title: '지리 정보 데이터 마크업',
            desc: (
              <div>
                디자이너와의 긴밀한 협업을 통해 화면의 배율과 마우스 위치에 따른 지리 정보 데이터를
                표시하도록 구현했습니다.
              </div>
            ),
          },
          {
            title: '컴포넌트 렌더링 성능 개선',
            desc: (
              <div>
                3D 라이브러리를 이용한 무거운 플랫폼이 실제 타겟 사용자인 건설현장의 사양이 낮은
                데스크탑에서도 무리없이 구동될 수 있도록 React Profiler와 memo를 효과적으로 사용하여
                성능을 개선했습니다.
              </div>
            ),
          },
          {
            title: '반응형 웹 구현',
            desc: <div>User-Agent를 사용한 반응형 웹을 구현했습니다.</div>,
          },
        ],
        site: '(건설업체별 계약형 플랫폼으로 서비스가 공개되지 않습니다.)',
      },
    ],
  },
];
