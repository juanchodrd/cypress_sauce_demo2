import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { wikipediaExampleTestsActions } from "../actions/wikipediaExampleTestsActions.js";
import { globalActions } from "../actions/globalActions.js";


Given("User is in Wikipedia Home Page", () => {
    wikipediaExampleTestsActions.visitHomePage()
    wikipediaExampleTestsActions.confirmHomePage()
});

When("User searches by {string} text", (searchText) => {
    wikipediaExampleTestsActions.searchByText(searchText)
});

When("User goes to login page", () => {
    wikipediaExampleTestsActions.clickOnAcceder() 
    wikipediaExampleTestsActions.confirmAccederPageTitle() 
});

When("User fill in login form with valid information", () => {
    wikipediaExampleTestsActions.loginWithValidUser()    
});

When("User fill in login form with no valid information", () => {
    wikipediaExampleTestsActions.loginWithNoValidUser()    
});


Then("User is in {string} information page", (url) => {
    wikipediaExampleTestsActions.confirmInformationURL(url)
});


Then("User is logged correctly", () => {
    wikipediaExampleTestsActions.checkUserLogged()
});


Then("Login error message is displayed", () => {
    wikipediaExampleTestsActions.checkLoginError()
});



