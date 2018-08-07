$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\cucumber\\salesforce\\login\\createlead.feature");
formatter.feature({
  "line": 1,
  "name": "Testing on Lead tab",
  "description": "\r\nIn Order to check the Lead tab in the Salesforce application\r\nand verify the options\r\nWhether it is creating the lead or not",
  "id": "testing-on-lead-tab",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Create lead in the sales force application",
  "description": "",
  "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createlead"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "\"leadtab\" element should be present",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"leadtab\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"newbutton\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 15,
      "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;;1"
    },
    {
      "cells": [
        "Mozilla"
      ],
      "line": 16,
      "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;;2"
    },
    {
      "cells": [
        "Mozilla"
      ],
      "line": 17,
      "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create lead in the sales force application",
  "description": "",
  "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createlead"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "\"leadtab\" element should be present",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"leadtab\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"newbutton\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 13
    }
  ],
  "location": "MenuTest.I_logged_in(String)"
});
formatter.result({
  "duration": 3877827500,
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
formatter.scenario({
  "line": 17,
  "name": "Create lead in the sales force application",
  "description": "",
  "id": "testing-on-lead-tab;create-lead-in-the-sales-force-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createlead"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "\"leadtab\" element should be present",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"leadtab\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"newbutton\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 13
    }
  ],
  "location": "MenuTest.I_logged_in(String)"
});
formatter.result({
  "duration": 255900,
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
formatter.uri("main\\resources\\com\\cucumber\\salesforce\\login\\login.feature");
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
  "duration": 16376729300,
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
formatter.uri("main\\resources\\com\\cucumber\\salesforce\\login\\menu.feature");
formatter.feature({
  "line": 1,
  "name": "To check the top menu options in the sales force application.",
  "description": "\r\nIn order to check the menu items\r\nAs a sales agent\r\nIn order to perform the actions correctly",
  "id": "to-check-the-top-menu-options-in-the-sales-force-application.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Testing top menu",
  "description": "",
  "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "All tabs should be present",
  "rows": [
    {
      "cells": [
        "hometab"
      ],
      "line": 11
    },
    {
      "cells": [
        "leadtab"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on \"\u003cHeaderLinks\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "\"VerifyObject\" element should be present",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;",
  "rows": [
    {
      "cells": [
        "Browser",
        "HeaderLinks",
        "VerifyObject"
      ],
      "line": 17,
      "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;;1"
    },
    {
      "cells": [
        "Mozilla",
        "hometab",
        "share"
      ],
      "line": 18,
      "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;;2"
    },
    {
      "cells": [
        "Mozilla",
        "leadtab",
        "reports"
      ],
      "line": 19,
      "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Testing top menu",
  "description": "",
  "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "All tabs should be present",
  "rows": [
    {
      "cells": [
        "hometab"
      ],
      "line": 11
    },
    {
      "cells": [
        "leadtab"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on \"hometab\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "\"VerifyObject\" element should be present",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 13
    }
  ],
  "location": "MenuTest.I_logged_in(String)"
});
formatter.result({
  "duration": 370800,
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
formatter.scenario({
  "line": 19,
  "name": "Testing top menu",
  "description": "",
  "id": "to-check-the-top-menu-options-in-the-sales-force-application.;testing-top-menu;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I logged in \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "All tabs should be present",
  "rows": [
    {
      "cells": [
        "hometab"
      ],
      "line": 11
    },
    {
      "cells": [
        "leadtab"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on \"leadtab\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "\"VerifyObject\" element should be present",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 13
    }
  ],
  "location": "MenuTest.I_logged_in(String)"
});
formatter.result({
  "duration": 415300,
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
});