# Disbursements Test Plan

# Intro

We have acquired a testing team and want to start testing our production website that allows users to login into our site, fill in required details and purchase courses online.
These features have not being tested before and the test team will have a backlog out testing to go through. This test plan will outline the approach taken for testing.

# Assumptions

The test plan will be written using the information currently available and will need to be updated as more information and features become available.

All Testcases will initially be manual until such time that QE can pick up the automation for these. The QE should update the testcases if at any stage they change or become automated

An inhouse automation tool already exists and will be used for the Automated test cases

# Scope:

**In scope:**

- Testing of the sign in feature
- Testing of the logout feature
- Testing of the form submission features
- Testing of the purchase feature
- Browsers to be testing on
  - Chrome
  - Firefox

**Out of scope:**

- All other features not mentioned above
- Performance Testing
- Security testing


# Environments:

These tests will be executed against the production environment hosted at https://ultimateqa.com/

# Use Cases (Manual vs Automated)

| Use Case                  | Postive/Negative | Manual/Automated |
|---------------------------|------------------| --- |
| Login and logout          | Positive         | Automated |
| Fill our forms and submit | Positive         | Automated |
| Purchase a course         | Negative         | Automated |

# Team Allocation

There are 1 available resources from QE/QA who can pick this up. 

# Performance Testing

Performance Testing is not defined for this release and is currently out of scope.
Once SLA's have been agreed with the product team this test plan will be updated to reflect the agreed targets and the approach we shall take.

# Release Dates

The feautures are already live and Testing needs to be done before the 17th October 2023. 

# Test Reports

On final execution Test reports will be published on the QA release page regarding the outcome of the testing.
All bugs will be logged against the system and relevant stake holders will be communicated with

# Notes/Other
