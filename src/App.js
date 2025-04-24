/////1

// import React from 'react';
// import Hello from './Component/Hello';
// import withLogger from './Component/withLogger';


// const HelloWithLogger = withLogger(Hello);
// function App() {
//   return (
//     <div >
//       <h1>React HOC Example</h1>
//       <HelloWithLogger />
//     </div>
//   );
// }
// export default App;


/////2

// import React from 'react';
// import Hello from './Component1/Hello';
// import withLogger from './Component1/withLogger';

// const HelloWithLogger = withLogger(Hello);

// function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>HOC Props Forwarding Example</h1>
//       <HelloWithLogger name="Mani" />
//     </div>
//   );
// }

// export default App;


////3

// import React from 'react';
// import Message from './Component2/Message';
// import withStyle from './Component2/withStyle';

// const StyledMessage = withStyle(Message);

// function App() {
//   return (
//     <div>
//       <h1>Styled HOC Example</h1>
//       <StyledMessage text="Hello with custom styles!" />
//     </div>
//   );
// }

// export default App;


////4

// import React, { useState } from 'react';
// import Message from './Component3/Message';
// import withConditionalRender from './Component3/withConditionalRender';

// const ConditionalMessage = withConditionalRender(Message);

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Conditional Rendering HOC</h1>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Message
//       </button>
//       <ConditionalMessage isVisible={show} text="This is a visible message!" />
//     </div>
//   );
// }

// export default App;

///5

// import React, { useState } from 'react';
// import Message from './Component4/Message';
// import withConditionalRender from './Component4/withConditionalRender';

// const ConditionalMessage = withConditionalRender(Message);

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <h1>Conditional Rendering HOC</h1>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Message
//       </button>

//       <ConditionalMessage show={show} text="This is a simple message!" />
//     </div>
//   );
// }

// export default App;

////6

// import React, { useState } from 'react';
// import Dashboard from './Component5/Dashboard';
// import withAuth from './Component5/withAuth';

// const ProtectedDashboard = withAuth(Dashboard);

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div >
//       <h1>Authentication HOC Example</h1>
//       <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
//         {isAuthenticated ? 'Logout' : 'Login'}
//       </button>

//       <ProtectedDashboard isAuthenticated={isAuthenticated} />
//     </div>
//   );
// }
// export default App;


///7

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import UserList from './Component6/UserList';
// import withLoader from './Component6/withLoader';

// const UserListWithLoader = withLoader(UserList);

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => {
//         setUsers(res.data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <UserListWithLoader loading={loading} users={users} />
//     </div>
//   );
// }
// export default App;

////8

// import React, { useState } from 'react';
// import Hello from './Component7/Hello';
// import withLogger from './Component7/withLogger';

// const HelloWithLogger = withLogger(Hello);

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <h1>Logging HOC Example</h1>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Component
//       </button>

//       {show && <HelloWithLogger />}
//     </div>
//   );
// }

// export default App;

///9

// import React from 'react';
// import Users from './Component8/Users';
// import withData from './Component8/withData';

// const UsersWithData = withData(Users, 'https://jsonplaceholder.typicode.com/users');

// function App() {
//   return (
//     <div>
//       <h2>Simple Data Fetching HOC</h2>
//       <UsersWithData />
//     </div>
//   );
// }

// export default App;


///10

// import React from 'react';
// import ShowCoordinates from './Component9/ShowCoordinates';
// import withMouseHover from './Component9/withMouseHover';

// const EnhancedComponent = withMouseHover(ShowCoordinates);

// function App() {
//   return (
//     <div>
//       <EnhancedComponent />
//     </div>
//   );
// }

// export default App;

 ///11

//  import React from 'react';
// import Hello from './Component10/Hello';
// import withTitle from './Component10/withTitle';

// const HelloWithTitle = withTitle(Hello);

// function App() {
//   return (
//     <div>
//       <h1>Title HOC Example</h1>
//       <HelloWithTitle />
//     </div>
//   );
// }

// export default App;

//12

// import React from 'react';
// import Hello from './Component11/Hello';
// import withTitle from './Component11/withTitle';
// import withLogger from './Component11/withLogger';


// const EnhancedHello = withLogger(withTitle(Hello));

// function App() {
//   return (
//     <div>
//       <h1>Multiple HOCs Example</h1>
//       <EnhancedHello />
//     </div>
//   );
// }

// export default App;

///13

// import React from 'react';
// import Dashboard from './Component12/Dashboard';
// import withAuth from './Component12/withAuth';

// const ProtectedDashboard = withAuth(Dashboard);

// function App() {
//   const isLoggedIn = false;

//   return (
//     <div>
//       <h1>Auth HOC Example</h1>
//       <ProtectedDashboard isAuthenticated={isLoggedIn} />
//     </div>
//   );
// }

// export default App;

//14

// import React from 'react';
// import UserList from './Component13/UserList';
// import withFetch from './Component13/withFetch';

// const URL = 'https://jsonplaceholder.typicode.com/users';
// const UserListWithFetch = withFetch(URL)(UserList);

// function App() {
//   return (
//     <div>
//       <h2>Simple HOC Fetch Example</h2>
//       <UserListWithFetch />
//     </div>
//   );
// }

// export default App;

///15

import React from 'react';
import Button from './Component14/Button';
import withClickCounter from './Component14/withClickCounter';

const ButtonWithClickCounter = withClickCounter(Button);

function App() {
  return (
    <div>
      <h1>Button Click Tracker</h1>
      <ButtonWithClickCounter />
    </div>
  );
}

export default App;