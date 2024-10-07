import React from 'react';

import { ModalContent } from 'types';
import Styled, { Stack } from './styles';

interface Props {
  content: ModalContent;
}

const ProjectModal = ({ content }: Props) => {
  return (
    <Styled.Root>
      <Styled.Container>
        <h1>{content.title}</h1>
        <Styled.Period>{content.period}</Styled.Period>
        <Styled.FlexContainer>
          <div className="content-wrapper">
            <Styled.Content>
              <Styled.CategoryTitle>🧩 프로젝트 개요</Styled.CategoryTitle>
              <div>{content.intro}</div>
            </Styled.Content>
            <Styled.Content>
              <Styled.CategoryTitle>🍦 팀원</Styled.CategoryTitle>
              <ul>
                {content.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </Styled.Content>
          </div>
          <Styled.Content>
            <Styled.CategoryTitle>👩‍💻 담당 역할</Styled.CategoryTitle>
            <Styled.CheckList>
              {content.roles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </Styled.CheckList>
          </Styled.Content>
        </Styled.FlexContainer>
        <Styled.Content>
          <Styled.CategoryTitle>⌨️ 사용 기술</Styled.CategoryTitle>
          <Styled.StacksContainer>
            {content.stacks.map((stack) => (
              <li key={stack}>
                <Stack text={stack} />
              </li>
            ))}
          </Styled.StacksContainer>
        </Styled.Content>
        <Styled.FlexContainer>
          <Styled.Content>
            <Styled.CategoryTitle className="project-url">🛠 Github URL</Styled.CategoryTitle>
            <a href={content.githubUrl} target="_blank">
              {content.githubUrl}
            </a>
          </Styled.Content>
          {content.deployUrl && (
            <Styled.Content>
              <Styled.CategoryTitle className="project-url">🖥 Service URL</Styled.CategoryTitle>
              <a href={content.deployUrl} target="_blank">
                {content.deployUrl}
              </a>
            </Styled.Content>
          )}
        </Styled.FlexContainer>

        {content.learnings && (
          <Styled.Content>
            <Styled.CategoryTitle>🤔 구현 세부</Styled.CategoryTitle>
            <Styled.CheckList className="learnings">
              {Object.entries(content.learnings).map(([title, content], idx) => (
                <li key={idx}>
                  <div className="title">{title}</div>
                  <div className="content">{content}</div>
                </li>
              ))}
            </Styled.CheckList>
          </Styled.Content>
        )}

        {content.etc && (
          <Styled.Content>
            <Styled.CategoryTitle>🎸 기타</Styled.CategoryTitle>
            <Styled.BulletList className="etc">
              {content.etc.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </Styled.BulletList>
          </Styled.Content>
        )}

        {content.previews && (
          <Styled.Content>
            <Styled.CategoryTitle className="preview">📺 미리보기</Styled.CategoryTitle>
            <Styled.PreviewWrapper>
              {content.previews.map((preview, idx) => (
                <li className="preview-image" key={idx}>
                  <img src={preview} alt={`${content.title}-${idx}`} />
                </li>
              ))}
            </Styled.PreviewWrapper>
          </Styled.Content>
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default ProjectModal;
