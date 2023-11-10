# Akshar siksha project 

This is an website intended to support and promote our initiatives of Aakshar. With attractive visuals, we've tried to allure users to visit our website. Here, we've tried to explain our objectives and the areas we are focusing on as well. The hidden talents of the children of economically weaker sections are showcased here. This also works as a crowdfunding platform. 

## Table of Contents

- [Akshar siksha project](#akshar-siksha-project)
  - [Table of Contents](#table-of-contents)
  - [Images](#images)
  - [Working Directory](#working-directory)
  - [Working with the code](#working-with-the-code)
  - [Dependencies](#dependencies)
  - [Application Structure](#application-structure)
  - [Features](#features)

## Images

Home Page :
![image](https://github.com/Rajarshi12321/Akshar-Website/assets/94736350/71050c88-b25f-4156-a668-b45ebb9ce602)


## Working Directory

```
📦Akshar-Website
 ┣ 📂model_web
 ┃ ┣ 📜donate-razorpay.js
 ┃ ┣ 📜donate.js
 ┃ ┣ 📜login.js
 ┃ ┣ 📜registration.js
 ┃ ┗ 📜start-fundraiser.js
 ┣ 📂public
 ┃ ┣ 📂css_web
 ┃ ┣ 📂img_fund
 ┃ ┣ 📂img_web
 ┃ ┗ 📂js_web
 ┃ ┃ ┣ 📜fundraiser-login-signup.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜start-fundraiser.js
 ┣ 📂routes_web
 ┃ ┣ 📜fund-raiser.js
 ┃ ┣ 📜login.js
 ┃ ┣ 📜passport-facebook.js
 ┃ ┣ 📜passport-google.js
 ┃ ┗ 📜passport-twitter.js
 ┣ 📂views_web
 ┃ ┣ 📜about us.ejs
 ┃ ┣ 📜about-us-post-login.ejs
 ┃ ┣ 📜blog-post-login.ejs
 ┃ ┣ 📜blog.ejs
 ┃ ┣ 📜contact-post-login.ejs
 ┃ ┣ 📜contact.ejs
 ┃ ┣ 📜create-blog.ejs
 ┃ ┣ 📜donate-pay.ejs
 ┃ ┣ 📜donate-post-login.ejs
 ┃ ┣ 📜donate.ejs
 ┃ ┣ 📜fundraiser-home-post-login.ejs
 ┃ ┣ 📜fundraiser-home.ejs
 ┃ ┣ 📜fundraiser-login-signup.ejs
 ┃ ┣ 📜index.ejs
 ┃ ┣ 📜landing-home-post-login.ejs
 ┃ ┣ 📜login-landing.ejs
 ┃ ┣ 📜razorpay-demo.ejs
 ┃ ┣ 📜razorpay-pay-option.ejs
 ┃ ┣ 📜razorpay-payment.ejs
 ┃ ┣ 📜registration.ejs
 ┃ ┗ 📜start-fundraiser.ejs
 ┣ 📜.DS_Store
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜emailSender.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vercel.json 
 ```


## Working with the code




To run this project locally, please follow these steps:-

1. Clone the repository:

   ```shell
   git clone https://github.com/Rajarshi12321/Akshar-Website.git
   ```



2. Install the required dependencies by running:
   ```shell
   npm install
   ``` 
   To install all required dependencies.<br />
   Once the dependencies are installed, you're ready to use the project.



4. Run the Website server: Execute the following code in your terminal.
   ```shell  
   npm run web
   ```
   

5. Access the Website: Open your web browser and navigate to `http://localhost:3000/` to see the Website.




## Dependencies

- "body-parser": "^1.20.0"
- "cookie-parser": "^1.4.6"
- "cookie-session": "^2.0.0"
- "cors": "^2.8.5"
- "crypto-js": "^4.1.1"
- "dotenv": "^16.3.1"
- "ejs": "^3.1.8"
- "express": "^4.18.1"
- "express-session": "^1.17.3"
- "form-data": "^4.0.0"
- "formidable": "^2.0.1"
- "fs": "^0.0.1-security"
- "http": "^0.0.1-security"
- "joi": "^17.6.0"
- "jsonwebtoken": "^8.5.1"
- "mongoose": "^6.5.1"
- "multer": "^1.4.5-lts.1"
- "nodemailer": "^6.7.7"
- "nodemailer-express-handlebars": "^5.0.0"
- "nodemon": "^2.0.19"
- "passport": "^0.5.3"
- "passport-facebook": "^3.0.0"
- "passport-google-oauth2": "^0.2.0"
- "passport-google-oauth20": "^2.0.0"
- "passport-twitter": "^1.0.4"
- "razorpay": "^2.8.3"
- "react-native-email": "^2.1.0"
- "readme": "^0.7.0"
- "stripe": "^10.3.0"
- "twilio": "^3.80.0"

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `public/` - This folder contains all the required image files.
- `routes_web/` - This folder contains the route definitions for our API.
- `model_web/` - This folder contains the schema definitions for our Mongoose models.



## Features 

1. Attractive visuals. 
2. Platform to showcase talents. 
3. Blogs and promotions. 
4. Users can donate towards a cause. 
5. One can start a fundraiser for free as well.
