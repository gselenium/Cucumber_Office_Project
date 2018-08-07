$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\cucumber\\salesforce\\login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into Saleforce",
  "description": "\r\nIn order to work\r\nAs a sales person\r\nI want to login",
  "id": "logging-into-saleforce",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Logging in salesforce",
  "description": "",
  "id": "logging-into-saleforce;logging-in-salesforce",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I go to \"Login_URL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"uname\" as \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"pass\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"login_button\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Login should be \"\u003cExpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "logging-into-saleforce;logging-in-salesforce;",
  "rows": [
    {
      "cells": [
        "Browser",
        "UserName",
        "Password",
        "ExpectedResult"
      ],
      "line": 16,
      "id": "logging-into-saleforce;logging-in-salesforce;;1"
    },
    {
      "cells": [
        "chrome",
        "govardhan.selenium@gmail.com",
        "test@1234",
        "Success"
      ],
      "line": 17,
      "id": "logging-into-saleforce;logging-in-salesforce;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Logging in salesforce",
  "description": "",
  "id": "logging-into-saleforce;logging-in-salesforce;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I go to \"Login_URL\" on \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"uname\" as \"govardhan.selenium@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"pass\" as \"test@1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"login_button\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Login should be \"Success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Login_URL",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 24
    }
  ],
  "location": "LoginTest.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 19262759500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});