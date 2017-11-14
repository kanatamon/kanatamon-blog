import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 12px 24px;
  border-bottom: 1px solid #ccc;
  z-index: 100;
  width: 100%;
  position: fixed;
`;

const Brand = styled.a`
  color: #555;
  font-size: 24pt;
`;

function Navigator() {
  return (
    <Container>
      <Brand>Kanamon</Brand>
    </Container>
  );
}

export default Navigator;
