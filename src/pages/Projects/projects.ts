import ahreallyImg from 'assets/pj-ahreally.png';
import moariImg from 'assets/pj-moari.png';
import noltoImg from 'assets/pj-nolto.png';
import stockImg from 'assets/pj-stock.jpeg';
import streetcatsImg from 'assets/pj-streetcats.jpeg';
import tarotImg from 'assets/pj-tarot.png';
import {
  noltoModal,
  moariModal,
  tarotModal,
  ahreallyModal,
  jurineeModal,
  streetcatModal,
} from './projectModals';

export default [
  {
    id: 1,
    image: noltoImg,
    title: '놀토: 놀러오세요 토이프로젝트',
    description: '모두의 작고 소중한 토이프로젝트를 한눈에,\n놀러오세요 토이프로젝트!',
    stacks: ['TypeScript', 'React.js', 'react-query'],
    modalContent: noltoModal,
  },
  {
    id: 2,
    image: moariImg,
    title: '모아리: 모여라 동아리!',
    description: '각 대학의 동아리를 한 눈에 모아보고, 조건에 맞게 검색할 수 있습니다.',
    stacks: ['TypeScrpit', 'React.js', 'redux', 'redux-saga', 'express', 'mongoDB'],
    modalContent: moariModal,
  },
  {
    id: 3,
    image: tarotImg,
    title: '주식 타로',
    description: '공부해도 모르겠는 주식,\n타로카드로 당신의 주식 금전운을 점쳐드립니다!',
    stacks: ['TypeScript', 'React.js'],
    modalContent: tarotModal,
  },
  {
    id: 4,
    image: ahreallyImg,
    title: '아진짜요?',
    description: '인기 아이돌인 당신은 팬들을 향한 무성의한 인성논란에 휩싸이게 된다...',
    stacks: ['p5js', 'ml5js'],
    modalContent: ahreallyModal,
  },
  {
    id: 5,
    image: stockImg,
    title: '주린이를 위한 안내서',
    description:
      '주식 용어부터 대가들의 투자까지 한눈에 살펴보고, 조건을 선택하여 기업을 스크리닝해볼 수 있습니다.',
    stacks: ['python', 'javascript', 'ruby-on-rails'],
    modalContent: jurineeModal,
  },
  {
    id: 6,
    image: streetcatsImg,
    title: '대동길냥여지도',
    description:
      '인간들의 마음을 따뜻하게 녹여주는 길냥이들의 위치를 등록하고 내 길냥이를 찜해보세요!',
    stacks: ['swift'],
    modalContent: streetcatModal,
  },
];
