package com.cucumber.salesforce.login;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = { "pretty", "html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json" })
public class TestRunner {	
}
