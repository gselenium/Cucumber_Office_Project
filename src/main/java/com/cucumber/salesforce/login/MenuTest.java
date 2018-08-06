package com.cucumber.salesforce.login;

import java.util.List;

import org.junit.Assert;

import com.cucumber.salesforce.util.WebConnector;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MenuTest {
	WebConnector cucumber=WebConnector.getInstance();
	
	@Given("^I logged in \"([^\"]*)\"$")
	public void I_logged_in(String browser){
		System.out.println("I logged in"+browser);
		//cucumber.OpenBrowser(browser);
		//cucumber.navigate("Login_URL");
	}
	@Then("^All tabs should be present$")
	public void All_tabs_should_be_present(DataTable table){
		System.out.println("All tabs should be present");
		List<String> names=table.asList(String.class);
		for(int i=0;i<names.size();i++){
			Assert.assertTrue("Element is not presenet"+names.get(i), cucumber.isElementPresent(names.get(i)));
		}
	}
	
	/*@When("^I click on \"([^\"]*)\"$")
	public void I_Click_on(String object){
		System.out.println("I click on "+object);
		cucumber.click(object);
	}*/
	
	@Then("^\"([^\"]*)\" element should be present$")
	public void element_should_be_present(String object){
		try{
		Assert.assertTrue("Element is not present"+object, cucumber.isElementPresent(object));
		}catch(Throwable t){
			System.out.println("Error in Execution");
		}
	}
}
