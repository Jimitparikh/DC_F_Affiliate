import {  RouterProvider } from 'react-router-dom'
import { router } from './configs/route.config';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
