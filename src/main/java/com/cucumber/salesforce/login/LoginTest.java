package com.cucumber.salesforce.login;
import org.junit.Assert;

import com.cucumber.salesforce.util.WebConnector;
import cucumber.api.java.en.*;
public class LoginTest {
	WebConnector cucumber=WebConnector.getInstance();
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void  I_go_to_on(String Login_URL, String browser){
		System.out.println("I go to "+Login_URL+" on "+browser);
		cucumber.OpenBrowser(browser);
		cucumber.navigate(Login_URL);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text){
		System.out.println("I enter "+object+" as "+text);
		cucumber.type(object, text);
	}
	
	@When("^I click on \"([^\"]*)\"$")
	public void I_Click_on(String object){
		System.out.println("I click on "+object);
		cucumber.click(object);
	}
	
	@Then("^Login should be \"([^\"]*)\"$")
	public void Login_Should_be(String expectedResult){
		System.out.println("Login should be "+expectedResult);
		boolean result=cucumber.isElementPresent("searchText");
		String actualResult=null;
		if(result)
			actualResult="Success";
		else
			actualResult="Failure";
		//Assert.assertEquals(expectedResult,actualResult);
	}
}
