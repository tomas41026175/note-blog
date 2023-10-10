# Styled Components
-----------------------
1. standard
```
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  color: red;
`;

function MyComponent() {
  return <Title>Hello World</Title>;
}
```

2. style 接收 props
```
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
`;

function MyComponent() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}
```