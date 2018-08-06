$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\cucumber\\salesforce\\login\\login.feature");
formatter.feature({
  "id": "logging-into-saleforce",
  "description": "\r\nIn order to work\r\nAs a sales person\r\nI want to login",
  "name": "Logging into Saleforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "logging-into-saleforce;logging-in-salesforce",
  "description": "",
  "name": "Logging in salesforce",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"Login_URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I enter \"uname\" as \"vardhan.kg@gmail.com\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I enter \"pass\" as \"testing123\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \"login_button\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Login should be \"Success\"",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "arguments": [
    {
      "val": "Login_URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 24
    }
  ],
  "location": "LoginTest.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 9106133097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uname",
      "offset": 9
    },
    {
      "val": "vardhan.kg@gmail.com",
      "offset": 20
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 743454523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 9
    },
    {
      "val": "testing123",
      "offset": 19
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 689007014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login_button",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_Click_on(String)"
});
formatter.result({
  "duration": 70283412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "LoginTest.Login_Should_be(String)"
});
formatter.result({
  "duration": 11075345652,
  "status": "passed"
});
});