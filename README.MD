This is my attempt to write the productStore website from scratch: not relying on tutorial. But I am using documentation/articles/chatgpt. 

Backend is express/nodeJS. Packages are: dotenv, mongoose, express.

Frontend is done with Vite ReactJS. It also uses Chakra. 

First, we build the backend API that lets us access/modify the database that stores the products.

We change the configuration of the package.json to enable ES module imports. 

.env file is created to store mongoDB connection string and the PORT number. 

Once we set up the basic structure of the server.js, we add the rest of the backend API elements:
    routes, models, controllers.

I have set up the router with get, delete, patch and post method handlers. And i have successfully used 
mongoose documentation to work with its methods. In documentation for findByIdAndUpdate() one of the parameters was [options] and to do what I wanted to I had to [options.returnDocument='after']. I couldn't figure out what the [options] object meant. Do I pass it like (id, req.body, options.returnDocument='after')? Eventually I realized that options represents the object that we pass and wrote {returnDocument='after'}. Now I feel powerfull because I can read mongoose documentation better. 



Now it is time to start working on the frontend part of the project.

First, I removed the unnecessary css files and cleaned the App.jsx. 

Then I will install the node_modules. Then I install chakra ui. 

Added the necessary folders: components and pages. There will be two pages: homepage with products displayed, and the create page for adding new products with a form. 

Routing will be done with react-router-dom. I will wrap the app in BrowserRouter and then set up the Routes component. # productStoreFromScratch


I'm gonna get the ChakraProvider and wrap the application with it in main.jsx.

I recently made a mistake by using ChakraBaseProvider instead of ChakraProvider. The former is a lighter version that requires more manual styling. 

Not gonna lie, this seems like the hard part. I don't really understand which chakra component to use with what to achieve the result that I want. 

I will admit that now I will watch the tutorial to see how things are done and repeat them until I can do on my own. 