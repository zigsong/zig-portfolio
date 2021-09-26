import React from 'react';

import ROUTES from 'constants/routes';
import LinkedTitle from 'components/LinkedTitle';
import CareerCard from 'components/CareerCard';
import Card from 'components/Card';
import wtcImg from 'assets/wtc.png';
import angelswingImg from 'assets/angelswing.png';
import likelionImg from 'assets/likelion.png';
import vonvonImg from 'assets/vonvon.png';
import snuImg from 'assets/snu.png';
import Styled from './styles';

const Career = () => {
  return (
    <Styled.Root>
      <LinkedTitle text={'Career'} link={`/${ROUTES.CAREER}`} />
      <Card>
        <Styled.Container>
          <Styled.Tree />
          <CareerCard
            position="right"
            title="우아한테크코스 FE 3기"
            period="2021.02 ~ 현재"
            image={wtcImg}
          />
          <CareerCard
            position="left"
            title="엔젤스윙 프론트엔드 인턴"
            period="2020.07~2020.09"
            image={angelswingImg}
          />
          <CareerCard position="right" title="정보문화학 연합전공 시작" period="2020.02" />
          <CareerCard
            position="left"
            title="멋쟁이사자처럼 8기 운영진"
            period="2019.09~2020.08"
            image={likelionImg}
          />
          <CareerCard
            position="right"
            title="vonvon 기획 인턴"
            period="2019.06~2019.08"
            image={vonvonImg}
          />
          <CareerCard
            position="left"
            title="서울대학교 멋쟁이사자처럼 7기"
            period="2019.03~2019.08"
            image={likelionImg}
          />

          <CareerCard
            position="right"
            title="서울대학교 인류학과 입학"
            period="2016.03"
            image={snuImg}
          />
          <CareerCard position="left" title="이화여자외국어고 프랑스어과 졸업" period="2016.02" />
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Career;
