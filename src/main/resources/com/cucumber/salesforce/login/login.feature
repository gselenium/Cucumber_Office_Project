Feature: Logging into Saleforce

In order to work
As a sales person
I want to login

@login
Scenario Outline: Logging in salesforce
Given I go to "Login_URL" on "<Browser>"
And I enter "uname" as "<UserName>"
And I enter "pass" as "<Password>"
And I click on "login_button"
Then Login should be "<ExpectedResult>"

 Examples:
| Browser	| UserName							| Password		| ExpectedResult|
|chrome	|govardhan.selenium@gmail.com		|test@1234		|Success		|








