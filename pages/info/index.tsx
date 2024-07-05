import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: powderblue;
`;

export const Title = styled.h1`
  font-size: 24;
  font-weight: bold;
  color: cadetblue;
`;

export const Email = styled.h3`
  font-size: 16;
  font-weight: bold;
  color: cadetblue;
`;
export default function InfoPage() {
  return (
    <Wrapper>
      <Title>if get any issue on app please contact me below</Title>
      <div>
        <Email>email: cw3598rt@gmail.com</Email>
      </div>
    </Wrapper>
  );
}
