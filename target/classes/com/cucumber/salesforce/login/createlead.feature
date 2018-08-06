Feature: Testing on Lead tab

In Order to check the Lead tab in the Salesforce application
and verify the options
Whether it is creating the lead or not

@createlead
Scenario Outline: Create lead in the sales force application
Given I logged in "<Browser>"
Then "leadtab" element should be present
And I click on "leadtab"
And I click on "newbutton"

 Examples:
|Browser	|
|Mozilla	|
|Mozilla	|