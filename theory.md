# Routing

1. instal react-dom-router
2. in app.jsx import BrowserRouter giving basePath => "/"
3. import Routes, Route


Creating children Route - 
    <BrowserRouter basename = "/">
        <Routes>
          <Route path = "/" element = {<Body />}>
            <Route path = "/" element = {<Feed />} />       // children component 
          </Route>
        </Routes>
    </BrowserRouter>


Inside the Body we have child component i.e Feed component but for feed component to render we have to import <Outlet> in body component and import <outlet> from react-router-dom => any children routes of body will render here 

import {outlet} from react-router-dom

const Body = () =>{
    return (
        <div>
            <NavBar />  //navbar will be remain at the Top else will be rendred below the navbar 
            <Outlet />      //children routes of body will render here
            <Footer />
        </div>
    );
};

export default Body;


- Install axios
- cors - install corsin backend => add middleware to with configuration : origin , credential: True
- whenever you are making API call (frontend) so pass => {with credential : true}


- Install react-redux +  @reduxjx/toolkit  - (see document) 
=> configure store => Provider to application => createSlice => add reducer to store 

Ques - How to add data to redux Store
ans -   hook (useDispatch) =>  dispatch an action 