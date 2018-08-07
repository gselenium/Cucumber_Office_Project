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
  "duration": 16123516500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uname",
      "offset": 9
    },
    {
      "val": "govardhan.selenium@gmail.com",
      "offset": 20
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 113894700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d68.0.3440.75)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 72 milliseconds\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027DESKTOP-SM0PVNB\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\gkarnati\\AppData\\Local\\Temp\\scoped_dir25200_26423}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.75, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c81c06d63da7286759ecff8dbb81b031\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:89)\r\n\tat com.cucumber.salesforce.util.WebConnector.type(WebConnector.java:60)\r\n\tat com.cucumber.salesforce.login.LoginTest.I_enter(LoginTest.java:19)\r\n\tat ✽.And I enter \"uname\" as \"govardhan.selenium@gmail.com\"(main\\resources\\com\\cucumber\\salesforce\\login\\login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 9
    },
    {
      "val": "test@1234",
      "offset": 19
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 308100,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.All_tabs_should_be_present(DataTable)"
});
formatter.result({
  "duration": 100164200,
  "error_message": "java.lang.AssertionError: Element is not presenethometab\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.cucumber.salesforce.login.MenuTest.All_tabs_should_be_present(MenuTest.java:28)\r\n\tat ✽.Then All tabs should be present(main\\resources\\com\\cucumber\\salesforce\\login\\menu.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "hometab",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_Click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VerifyObject",
      "offset": 1
    }
  ],
  "location": "MenuTest.element_should_be_present(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 237900,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.All_tabs_should_be_present(DataTable)"
});
formatter.result({
  "duration": 22405400,
  "error_message": "java.lang.AssertionError: Element is not presenethometab\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.cucumber.salesforce.login.MenuTest.All_tabs_should_be_present(MenuTest.java:28)\r\n\tat ✽.Then All tabs should be present(main\\resources\\com\\cucumber\\salesforce\\login\\menu.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadtab",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_Click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VerifyObject",
      "offset": 1
    }
  ],
  "location": "MenuTest.element_should_be_present(String)"
});
formatter.result({
  "status": "skipped"
});
});