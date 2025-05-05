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








# Adding a custom domain name

- purchased the domain name form goDaddy
- signUp on cloudflare & add a new domain name 
- chnage the name servers on goDaddy and point it to the clooudflare
- wait for sometime till your name servers are updated 

- DNS record : A devTinder.in 43.204.96.49
- adding the public IPv address to the cloudflare for the project 


# How to add SSL certificate (secured)
- on ssl tab choose for flexible (its not full ssl)
- now edge certifcate => Automatic https Rewrites ON (it will automatically redirect http to https )

//TODO: enable full ssl where you have to upload the ssl certificate on the server also and configure nginx also 

whenever you purchase a domain name there is Domain Ragistrar(= the place form where you are taking domain name) which can be hostinger, goDaddy 


- The DNS record are managed by the nameServer (like cloudflare in this case) 






# RazorPay

- WebHook =>  whenever you do succesfull payment the razorpay needs a way to inform the payment that is known as webhook.

the user can do succesfull payment any time 
configure the razorpay webhooks and we will give the the live API to be called whenever the payment is captured or failed  