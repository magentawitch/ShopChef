import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Root from "./Components/Root/Root.jsx";
import RecipeForm from "./Components/RecipeForm/RecipeForm";
import RecipeList from "./Components/RecipeList/RecipeList.jsx";
import Home from './Components/Home/Home.jsx';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> } />
    <Route path="new-recipe" element={ <RecipeForm /> } />
    <Route path="/recipes" element={ <RecipeList />} />  
  </Route>
));

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
