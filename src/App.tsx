import './App.css';

import { useState } from 'react';

import LoginScreen from './modules/login';

function App() {
  const [count, setCount] = useState(0);

  return <LoginScreen texto="Valor" />;
}

// interface PStyledLink {
//   isBlue?: boolean;
// }

// const StyledLink = styled.div<PStyledLink>`
//   color: ${(props) => (props.isBlue ? 'blue' : 'pink')};
//   font-weight: bold;
// `;

export default App;
