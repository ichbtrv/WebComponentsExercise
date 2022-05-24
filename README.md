# Web components exercise

I wanted to learn more about web components so I used a take home exercise as an opportunity to do so. These were the instructions laid out. I would have written this in typescript but the instructions were pretty explicit about using vanilla js. 
<img src="https://i.imgur.com/5f4EtB3.jpg" width="1200" alt="example" /> 
<img src="https://i.imgur.com/jg7dSbF.jpg" width="1200" alt="example" /> 
<img src="https://i.imgur.com/9WSrBRx.jpg" width="1200" alt="example" /> 
<img src="https://i.imgur.com/b0HJu1G.jpg" width="1200" alt="example" /> 

## The instructions

Landing page
The​ ​first​ ​page​ ​the​ ​user​ ​will​ ​see​ ​is​ ​the​ ​"Book​ ​a​ ​Demo"​ ​page.​ ​​​This​ ​page​ ​renders​ ​a​ ​form​ ​that requires the user to submit three pieces of information:
Their business email address
The size of their business
Their business’ most important need from a database solution. <br/>
​​​All​ ​three​ ​fields​ ​are​ ​required, the user should not be able to proceed until each field is populated with a valid value.

Email Address field
The​ ​first​ ​field​ ​(email)​ ​is​ ​a​ ​text​ input ​that​ ​should​ ​validate​ the ​user​ input, checking for ​a​ ​valid​ ​business email.​ The validation should be handled using ​JavaScript​ ​regex.
The form should refuse email addresses from the domains of the most common email providers. We consider the following domains to be invalid: <br/> <br/>
Gmail <br/>
Outlook <br/>
Hotmail <br/>
Yahoo <br/> <br/>
Business Size dropdown <br/> 
The​ ​second​ ​field​ ​(business​ ​size)​ ​is​ ​a​ dropdown​ ​that​ ​contains​ ​the​ ​following​ ​options: <br/><br/>
​1-10 <br/>
11-50 <br/>
51-100 <br/>
101-250 <br/>
250-1000 <br/> 
1000+ <br/> <br/>
The field should have the following behavior and interactions:
Clicking the dropdown trigger should display a menu of clickable options
The menu should float above the page content, not push it down
Clicking an option should set its value as the field’s value and close the menu
The currently selected option should be displayed in the dropdown trigger
Clicking outside of the menu should close it and not reset the field’s value
The design of this dropdown is different from the browser default. Your implementation should match the custom design.
<br/> <br/>
Importance Indicator radio buttons
The​ ​third​ ​field​ ​(importance​ ​indicator)​ ​is​ ​a​ ​radio-button​ ​set​ that contains​ ​8​ ​options.​ ​​​ Only one radio can be active at a time. When a radio is activated, the previously active radio should now be inactive.
The design of these radio buttons is different from the browser default. Your implementation should match the custom design.
Form validation
When the user submits the form, its fields’ values should be checked for validity. ​​
If​ the given email address is invalid, or if any form fields are empty:
The user should not be redirected to a new page
An​ ​appropriate error​ message ​should​ ​be​ displayed ​under​ each invalid field <br/> <br/>
Form submission <br/> <br/>
Submitting a valid form ​will redirect the user to either a qualified or unqualified page.
A user is considered unqualified, and should be redirected to the unqualified page, if any of the following options are submitted: <br/> <br/>
Business​ ​Size​ ​→​ ​1-10
Importance​ ​Indicator​ ​→​ ​Document​ ​Storage,​ ​Full​-Text​ ​Search,​ ​Price
A user is considered qualified, and should be redirected to the qualified page, if they do NOT submit any of the previously mentioned options.

Mobile​ ​Optimization​ ​&​ ​Scaling <br/>
The design is intended for use in a web browser on a desktop device only and the centered main content container should be a fixed width (not a percentage of or relative to the window size in any way).
This means the UI and content do not need to scale down on smaller window sizes (mobile/tablet). If the window width is smaller than the content width, the user should be able to scroll horizontally to view the overflowing content.
