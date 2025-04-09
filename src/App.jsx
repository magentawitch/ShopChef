import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Root from "./Components/Root/Root.jsx";
import RecipeForm from "./Components/RecipeForm/RecipeForm";
import RecipeList from "./Components/RecipeList/RecipeList.jsx";


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <RecipeForm /> } />
    <Route path="/recipes" element={ <RecipeList />} />  
  </Route>
));

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
