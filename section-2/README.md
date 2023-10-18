# Section 2

## Executing the tests

### Pre-reqs

- Ensure you have npm installed
- Ensure you have node installed (I am using v18.18.0)

### Mac/Linux

- Clone the repo
- Navigate to the correct directory
- Open a terminal
- Run `npm install`
- To run the tests in headed mode and individually you can run : `npx playwright test login.spec.ts --headed`
- To run all tests and in headless mode you can run `npx playwright test`
- Reports should be auto generated for you

### Windows

- Download git bash for windows
- Clone the repo
- Navigate to the correct directory
- Run `npm install`
- To run the tests in headed mode and individually you can run : `npx playwright test login.spec.ts --headed`
- To run all tests and in headless mode you can run `npx playwright test`

```
Please note I have not worked on a Windows machine for the last 5 years nor do I have one so I was unable to test that these steps work successfully on windows
```

## Thought process and follow up questions

### Important takeaways

- I did not automate the captcha, *so you will see me manually clicking the captcha during the screen recording.* 
- If I had to automate the catpcha I would use 2Captcha(which is a paid tool) for recaptcha v3 whereby id provide the sitekey and the website url along with my api key to get the captcha id and then send that in a follow up request, polling until it resolves. I spent time investigating other ways to automate the captcha but this proved the easiest and the fastest.
- I chose to go with Playwright for this assessment and one of the limitations currently is that you cannot maximize the browser window mid-test, hence ive set pre-conditions to ensure the browser is maximized at the start of the test
- The fake pricing test fails as theres a step coded in there to assert that the url isnt the url thats actually there. This is because the purchase buttons simply take you to the top of the page and thats a bug. Hence I assert on that and the test fails intentionally
- I coded in the username and password here for ease of setup but that would not happen in a real world scenario

### Follow up Questions

1. How could you reduce the time to execute some or all of these test cases or if you
   had several sites to test?
   - Execute tests in parallel
   - Split out tests that tests different websites into another suite and run suites in parallel as they arent dependant on each other
2. Briefly (a few sentences is fine) describe how you would set up a pipeline on your
   preferred source control management platform to perform continuous integration
   testing of a simple front end web-based application. It could be anything you like eg a
   calculator that outputs the correct results from numbers you input..
   - Currently using github actions. So I would set up a workflow to:
     - Build the image
     - Checkout the repo
     - Download dependencies
     - Run the tests
     - Store the report summary
     - Publish the results
3. Describe briefly how you would run performance testing against a web-based
   application.
    - Determine the calls that browsers are making to the back-end server
    - Duplicate calls and send them as requests from a performance testing tool to stimulate multiple users on the web app
    - Using those calls perform load, stress, and spike testing and monitor back end health(cpu, network latency, ram)
4. Describe briefly what kind of security testing you might perform against a web-based
   application.
    - I have no experience in security testing, but in a real world scenario, I would go do a course on security testing learn the best practises and execute those against a the said webapp
5. Describe how you might build in exception and error handling to your application.
    - Use try and catch to catch failures, take screenshots on fail, throw more intuitive errors, or perform other automation steps on failure