package com.cucumber.salesforce.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebConnector {
	Properties OR=null;
	FileInputStream ip;
	WebDriver driver=null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	static WebConnector w;
	public WebConnector(){
		if(OR==null){
		try{
			OR=new Properties();
			ip=new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/cucumber/salesforce/config/OR.properties");
			OR.load(ip);
		}catch(Throwable t){
			System.out.println("Error while loading the properties files");
		}
		}
	}
	
	public void OpenBrowser(String browser_type){
		if(browser_type.equals("Mozilla")){
			System.setProperty("webdriver.gecko.driver", "resources/geckodriver.exe");
			driver=new FirefoxDriver();
			//driver.manage().window().maximize();
			//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}else if(browser_type.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "resources/chromedriver.exe");
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}else{
			driver=new InternetExplorerDriver();
			/*driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);*/
		}
	}
	public void navigate(String url){
		driver.get(OR.getProperty("Login_URL"));
	}
	public void type(String object,String text){
		driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
	}
	public void select(String object,String text){
		driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
	}
	
	public void click(String object){
		driver.findElement(By.xpath(OR.getProperty(object))).click();
	}
	
	public boolean isElementPresent(String object){
		int count=driver.findElements(By.xpath(OR.getProperty(object))).size();
		if(count==0)
			return false;
		else
			return true;
	}
	
	public static WebConnector getInstance(){
		if(w==null){
			w=new WebConnector();
			return w;
		}else{
			return w;
		}			
	}
}
