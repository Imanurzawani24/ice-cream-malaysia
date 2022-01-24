# I Scream Ice Cream
MOBILE APPLICATION INFO 4302
SECTION 1 21/22

a) Group Member Details (Name & Matric No).
1. Muhammad Afiq Bin Munir (1818931) - LEADER
2. Nurul Jannah Binti Hussain (1811252)
3. Nur Ain Binti Ishak (1810052) 
4. Nurul Ain Syamina Noorafandi (1814584)
5. Iman Nurzawani Binti Osman (1814246)

b) Title: I Scream Ice Cream.

c) Introduction
	For this group project we have chosen to create a mobile application store to sell ice cream Malaysia called ‘I Scream Ice Cream’. The mobile application platform 'I Scream Ice Cream' specializes in selling traditional Malaysian ice cream made and handled by IIUM students. The purpose of the project is to enhance the customer experience in buying ice cream Malaysia through mobile application. The user should be able to register and login to use this mobile application. There’s 6 flavors to choose from in the application. The ice cream can be ordered from wherever customers are, but only within IIUM. The order will be delivered once payment has been completed.

d) Objective of the proposed mobile application
- Opportunities for students to generate income by doing part time jobs.
- Promote Malaysia product to International student.
- Re-introduce Malaysia ice cream that nearly extinct 
- To provide the customers an easy format of ordering their desired deserts in an easy manner.
- To provide the easy billing and order format to the customers and workers in the store.

e) Features and functionalities of the proposed mobile application
- Signup and login
- Home page
- Ice Cream Menu
- Add to Cart page
- Delivery Location page
- Payment page 
- Logout button
- Map API

f) A sequence diagram to represent the interaction of the proposed mobile application

1.  ![signup and login](https://user-images.githubusercontent.com/55817657/150682884-bd36d045-6ae3-4d98-a047-436306ad2c57.png)

Figure 1: Sign Up & Log In Sequence Diagram

The user need to fill in all the required details before sign up. After the user fill in their details, they must click the Sign up button. After the user enters the details information, the system will verify it and create an account for them. Then, they will be redirected to their account login page. In this page user need to fill in the email and password as it will be validated through the database system. Once the database system finds the matching username and password,it will be verified. User will be directed to Homepage.

2.  ![add to cart](https://user-images.githubusercontent.com/55817657/150682981-54b725bd-142b-48b0-9aad-50836e1a11e7.png)

Figure 2 : Add to Cart Sequence Diagram

Users can select the ice cream flavor that they want and add their ice cream to cart. At the cart the user can select the quantity that they want then can go to the payment page. Users also can cancel their order in the add to cart page.

3.  ![delivery](https://user-images.githubusercontent.com/55817657/150683042-a2bddbf6-2d6e-4c55-8b34-d7cbf4ac7adb.png)

In the application, after the user selects their favorite ice cream to add to cart, users are prompted to click the Get Location Coordinates. The system will then request the user's location coordinates from the API Maps, and API Maps will send location coordinates back to the system to display to the user.

4.  ![payment](https://user-images.githubusercontent.com/55817657/150683121-553dd241-8249-4de4-9d60-01237a96fa70.png)

After users enter their delivery location, users will go to the payment page and enter the card details and the bank will verify their account. After the confirmation, users successfully pay for their order and wait untils it is delivered to their location.

g) Project system captured screen and explanation

![signupandlogin](https://user-images.githubusercontent.com/55817657/150683286-db03b6ae-fa35-43a7-8764-26e24c657a43.jpeg)

Figure 5: Signup and Login Page

![homepage](https://user-images.githubusercontent.com/55817657/150683319-b9a37472-70e1-47bd-846a-18c8512d3235.jpeg)

Figure 6: Home Page


	The above figures are the screenshots of the Signup Login page and the Home page. Figure 5 shows the page for Signup and Login where users can both register and login on the same page. The user only needs to register using their email and password. After clicking on the button "Register", their credentials are then safe in the database. To login, the user needs to login on the same page and click on the button "Login". Figure 6 shows the homepage of the mobile application. After logging in, the user will be directed to the homepage. This page consists of two buttons, namely "Menu Page" and "Sign Out". If the user clicks on the "Sign Out" button, they will be directed back to the Login page again. If they click on the "Menu Page" button, it will direct them to the menu page of the mobile application.
  
  ![menupage](https://user-images.githubusercontent.com/55817657/150683356-68dc701d-0941-4b38-9c90-01a8fde02eae.jpeg)

Figure 7: Menu Page

![productdetails](https://user-images.githubusercontent.com/55817657/150683371-6dc443ca-677f-4831-8024-66573f1d637e.jpeg)

Figure 8: Product Description Page


	Above is a diagram of the Menu page and Product Description page. Figure 7 shows the menu page where the page will display several ice cream menus along with prices. Users can scroll to see some of the ice cream menus available. When users click on one of the menus they want, they will be directed to the product description page in figure 8. In figure 8, when the user clicks on any menu they select, they will be able to display the product details of their choice. On the page, there is a picture of ice cream, the name of the ice cream, the price for one unit, and also a description. Then there is the "add to cart" button, where the user can click on the button to buy ice cream.

![mycart](https://user-images.githubusercontent.com/55817657/150683436-5f75eece-be08-4e8f-b542-4451fc942773.jpeg)

Figure 9: Cart Page

![deliverylocation](https://user-images.githubusercontent.com/55817657/150683476-bdb4f3a6-5bec-4f34-8647-9cf99ede291c.jpeg)

Figure 10: Location Page


	The above figures are the screenshots of the Signup Login page and the Home page. Figure 9 shows the Cart page where it will show the users' chosen menu and the total price they need to pay. After users click the delivery location, it will go to Figure 10. Users must click "Get Specific Coordinates" to get their current location's latitude and longitude. The "Go to Payment" button will direct users to the payment page.

![paymentpage](https://user-images.githubusercontent.com/55817657/150683506-1057aa51-0eae-475b-b7a7-fe59e6c274b7.jpeg)

Figure 11: Payment Page

![successpage](https://user-images.githubusercontent.com/55817657/150683537-ab6b80f9-1322-4514-a8e2-21115c38e408.jpeg)

Figure 12: Payment successful page


	Figure 11 and Figure 12 are, respectively, the Payment Page and the Payment Successful Page. On the Payment page, users need to put in their credit or debit card credentials to make a payment. After filling in their credentials, users need to click on the "Pay" button to confirm their payment. Then, the users will be directed to a page as a confirmation that their payment was successful.


h) What is the challenge/difficulties to develop the application

	There were several difficulties that we had to face while doing the project. Firstly, we were planning to put the ice cream menu in a real-time database in Firebase. However, there are several problems with the connection. In the end, we were unable to use data storage for the menu. But we did use Firebase for authentication at the signup and login stages. On the delivery location page, we supposedly use Google Places Autocomplete to make it easier for users to find and search for locations. However, when we develop this page, there are some errors and difficulties using the Google Places Autocomplete function, such as the search bar does not show the name of the place and a billing issue. Besides, the latitude and longitude coordinates cannot be displayed on the maps provided. The last challenge that we faced is for the payment. Initially, we built a payment gateway using Stripe Pay. However, we were stuck while making the connection from the cart page to the payment page. Hence, as an alternative, we only do a simple dummy form for the payment page.

