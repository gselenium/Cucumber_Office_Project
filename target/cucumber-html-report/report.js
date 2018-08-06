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
        "Mozilla",
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
  "name": "I go to \"Login_URL\" on \"Mozilla\"",
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
      "val": "Mozilla",
      "offset": 24
    }
  ],
  "location": "LoginTest.I_go_to_on(String,String)"
});
formatter.result({
  "duration": 88287668046,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \npi-utils\tDEBUG\tSuccessfully read XPI database\r\n1533571025425\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025426\tDeferredSave.webext.sc.lz4\tDEBUG\tStarting timer\r\n1533571025833\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025838\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025843\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025846\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025851\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025861\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025868\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025870\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025875\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025878\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025882\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025884\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025887\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025891\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025895\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025897\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025901\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025903\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025905\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025907\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025917\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025919\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025923\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025925\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025928\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025929\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025955\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025957\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025960\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025962\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025970\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025973\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025978\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025982\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025985\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025987\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025989\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025991\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026002\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026010\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026014\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026018\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026020\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026025\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026031\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026033\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026035\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026048\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026213\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026318\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026625\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571030658\tDeferredSave.webext.sc.lz4\tDEBUG\tStarting write\r\n1533571030814\taddons.productaddons\tINFO\tsending request to: https://aus5.mozilla.org/update/3/GMP/56.0.1/20171002220106/WINNT_x86-msvc-x64/en-US/release/Windows_NT%206.1.1.0%20(x64)/default/default/update.xml\r\n1533571030834\tDeferredSave.webext.sc.lz4\tDEBUG\tWrite succeeded\r\n1533571032171\taddons.productaddons\tINFO\tCompleted downloading document\r\n1533571034444\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1533571034452\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\GOVARD~1\\AppData\\Local\\Temp\\tmpaddon\r\n1533571044746\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1533571044754\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\GOVARD~1\\AppData\\Local\\Temp\\tmpaddon-7b711c\r\n\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Govardhan-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.cucumber.salesforce.util.WebConnector.OpenBrowser(WebConnector.java:35)\r\n\tat com.cucumber.salesforce.login.LoginTest.I_go_to_on(LoginTest.java:12)\r\n\tat ✽.Given I go to \"Login_URL\" on \"Mozilla\"(main\\resources\\com\\cucumber\\salesforce\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\npi-utils\tDEBUG\tSuccessfully read XPI database\r\n1533571025425\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025426\tDeferredSave.webext.sc.lz4\tDEBUG\tStarting timer\r\n1533571025833\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025838\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025843\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025846\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025851\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025861\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025868\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025870\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025875\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025878\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025882\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025884\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025887\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025891\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025895\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025897\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025901\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025903\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025905\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025907\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025917\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025919\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025923\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025925\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025928\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025929\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025955\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025957\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025960\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025962\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025970\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025973\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025978\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025982\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025985\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025987\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025989\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571025991\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026002\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026010\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026014\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026018\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026020\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026025\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026031\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026033\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026035\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026048\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026213\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026318\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571026625\tDeferredSave.webext.sc.lz4\tDEBUG\tSave changes\r\n1533571030658\tDeferredSave.webext.sc.lz4\tDEBUG\tStarting write\r\n1533571030814\taddons.productaddons\tINFO\tsending request to: https://aus5.mozilla.org/update/3/GMP/56.0.1/20171002220106/WINNT_x86-msvc-x64/en-US/release/Windows_NT%206.1.1.0%20(x64)/default/default/update.xml\r\n1533571030834\tDeferredSave.webext.sc.lz4\tDEBUG\tWrite succeeded\r\n1533571032171\taddons.productaddons\tINFO\tCompleted downloading document\r\n1533571034444\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1533571034452\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\GOVARD~1\\AppData\\Local\\Temp\\tmpaddon\r\n1533571044746\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1533571044754\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\GOVARD~1\\AppData\\Local\\Temp\\tmpaddon-7b711c\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.cucumber.salesforce.util.WebConnector.OpenBrowser(WebConnector.java:35)\r\n\tat com.cucumber.salesforce.login.LoginTest.I_go_to_on(LoginTest.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:45)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 1027619,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.All_tabs_should_be_present(DataTable)"
});
formatter.result({
  "duration": 40250568,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.salesforce.util.WebConnector.isElementPresent(WebConnector.java:63)\r\n\tat com.cucumber.salesforce.login.MenuTest.All_tabs_should_be_present(MenuTest.java:28)\r\n\tat ✽.Then All tabs should be present(main\\resources\\com\\cucumber\\salesforce\\login\\menu.feature:10)\r\n",
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
  "duration": 1916250,
  "status": "passed"
});
formatter.match({
  "location": "MenuTest.All_tabs_should_be_present(DataTable)"
});
formatter.result({
  "duration": 1176737,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.salesforce.util.WebConnector.isElementPresent(WebConnector.java:63)\r\n\tat com.cucumber.salesforce.login.MenuTest.All_tabs_should_be_present(MenuTest.java:28)\r\n\tat ✽.Then All tabs should be present(main\\resources\\com\\cucumber\\salesforce\\login\\menu.feature:10)\r\n",
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