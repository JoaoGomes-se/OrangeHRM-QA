# Introduction

This document presents the Test Strategy developed by João Gomes and Jônatas Pereira to validate the OrangeHRM OS Demo platform (version 5.8). The primary objective is to evaluate the core functionalities of the modules within the defined scope, ensuring that each feature behaves as expected from an end-user perspective.

To achieve this, a Manual Black Box Testing approach was adopted, focusing exclusively on the User Interface (UI) without requiring access to the application's internal code or database layers. This document outlines the test environment infrastructure, applied test design techniques, our collaborative cross-execution process, and the guidelines established for defect reporting and management using Zephyr Scale.

---

# Test Objectives and Levels

## Objectives

* The primary objective was to validate the core functionalities of the OrangeHRM modules within the defined scope, ensuring that each feature behaves as expected from an end-user perspective.
* Throughout the process, any defects identified in the UI workflows were carefully documented in sufficient detail to enable accurate reproduction and prioritization. The main idea is to proportion the execution of the steps and make every HLTC and LLTC as readable as possible to every stakeholder of the product.
* All test cases were uniformly structured and maintained in Zephyr to ensure full traceability between execution results and reported defects, providing a clear and auditable record of the entire testing effort.

## Levels

### Integration Tests

At the integration level, the PIM module served as a critical dependency for the overall test cycle. An employee account was created through the Add Employee functionality using admin credentials, and the resulting record was subsequently used across other modules to validate interconnected workflows — ensuring that data entered in one part of the system was correctly reflected and accessible in others.

This approach allowed the team to verify not only the isolated behavior of each module, but also the consistency of information flowing between them.

### System Tests

At the system level, all tested modules — Login, Dashboard, Directory, PIM, My Info, Claims, and Recruitment — were evaluated as a unified whole, simulating real end-user interactions entirely through the user interface.

Test cases covering both valid and invalid scenarios were executed across different environments, with all results tracked and documented in Zephyr. This level of testing provided a comprehensive view of the application's functional behavior within the defined scope, confirming which areas met the expected requirements and highlighting those where defects were identified and reported.

---

# Test Scope

## In Scope (By modules)

* Login
* Dashboard
* Directory
* PIM
* My Info
* Time
* Claims

## Out of Scope

* API
* Database
* Different versions of the application

---

# Test Environment

The tests were conducted across a standardized set of environments shared among all team members, ensuring consistency and reproducibility of results throughout the test cycle.

The table below outlines the key configurations used during execution:

| Item | Details |
| :--- | :--- |
| **Application** | OrangeHRM Demo v5.8 |
| **Environment** | Linux 7.0 LTS and Windows 11 |
| **Browsers** | Google Chrome v146 |
| **Test Management Tool** | Zephyr v15.0.0 |
| **Devices** | Computer and Smartphone |

## Test Accounts

For testing the OrangeHRM Demo platform, two accounts were used for the tests: Admin and Employee. The Admin account is the default account for platform access, offered from the initial login screen for practical access to administrator resources. The Employee account is obtained through an integration test, where the admin account is used to create the Employee's credentials, and thus, the account is obtained for the test.

### Admin Credentials
* **Name:** `Admin`
* **Password:** `admin123`

### Employee Credentials
* **Test Case Name:** `TC_PIM_AddEmployee_008(positive): Verify the creation of an employee with valid login credentials`
* **Zephyr URL:** Employee Account

---

# Test Strategy

## Testing Approach

* The testing process followed a “Manual Black Box Testing” approach, in which all test cases were executed exclusively through the user interface, with no access to the application's internal layers, such as the API or database.
* To ensure organized and efficient coverage, the tested modules and functionalities were distributed among team members, with each individual responsible for a specific area of the OrangeHRM platform — such as My Info, PIM, and Recruitment — with exceptions when different testing techniques were used.
* Throughout the cycle, test cases underwent continuous review and correction, ensuring that documentation remained accurate and aligned with the system's actual behavior as new findings emerged.
* A consistent standardization was also maintained across all test cases, following a unified structure for fields such as preconditions, steps, expected results, labels, and priority classification, which ensured clarity and traceability across the entire team's work.

## Test Case Techniques Used

The test cases in this project were designed using a combination of complementary techniques to ensure efficient and structured coverage:

* **Boundary Value Analysis:** We used this technique for fields that enforce strict character or size limits. The clearest examples in our Zephyr repository are the test verifying the exact 30-character limit on the candidate's First Name (`SCRUM-T151`) and the test validating the 1MB cap for resume file uploads (`SCRUM-T92`).
* **Pairwise Testing:** We utilized the PICT tool to avoid having to manually test an infinite number of form input combinations on the Add Candidate screen. Instead of mixing environment setups, PICT helped us combine the form fields themselves; such as leaving the middle name or contact number blank while testing combinations of `.docx` and `.pdf` uploads; significantly reducing our test suite without losing coverage.
* **Equivalence Partitioning:** We divided input data into valid and invalid classes. This was heavily used in the Recruitment module's attachment section to ensure the system accepts standard document formats while immediately blocking dangerous executable extensions like `.exe` (`SCRUM-T93`).
* **Domain Testing:** We selected test data based on real-world business logic for an HR platform. This guided how we validated input fields like standard email formats and dialable phone strings.
* **Exploratory Testing:** We conducted unscripted testing sessions to hunt for UI and input validation furos. This approach led directly to finding the bugs in the Emergency Contacts screen (`SCRUM-12` and `SCRUM-14`), where the form mistakenly allowed users to save contacts using only numbers or special symbols.
* **Functional & Non-Functional Testing:** Our functional test cases validated standard business rules. On the non-functional side, we checked interface responsiveness across mobile and tablet viewports, and monitored the network logs to ensure page rendering times stayed within the 3 to 5-second threshold (`SCRUM-T136` and `SCRUM-T137`).

---

# Test Case Management

Zephyr Scale was used as the primary test management tool throughout this test cycle, integrated within the Jira environment to organize, execute, and track all test cases related to the OrangeHRM demo platform.

The tool allowed for structured documentation of test cases across the modules under analysis — including My Info, PIM, and Recruitment — enabling clear traceability between test execution and the defects found.

Through Zephyr's execution cycles, it was possible to record pass/fail statuses, attach evidence, and generate the metrics that informed the severity distribution table above, providing a centralized and auditable view of the overall testing effort.