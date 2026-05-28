# QA Automation Project – Playwright & K6

## 📌 Overview

This project demonstrates an end-to-end QA automation framework covering UI testing, API testing, and performance testing using modern tools.

## 🛠 Tech Stack

* Playwright (UI & API Testing)
* JavaScript (Node.js)
* Grafana K6 (Performance Testing)

## ✅ Features Implemented

* UI Automation for login and end-to-end user flow (cart & checkout)
* API testing using Playwright request context
* Data-driven testing using JSON files
* Page Object Model (POM) design pattern
* Automated reporting with screenshots and videos on failure
* Performance testing with concurrent virtual users using K6
* Threshold-based validation for response time and error rates

## 📂 Project Structure

```
qa-playwright-k6-project/
├── tests/
│   ├── ui/
│   └── api/
├── pages/
├── test-data/
├── k6-tests/
├── playwright.config.js
└── README.md
```

## ▶️ How to Run

### Install Dependencies

```
npm install
```

### Run UI Tests

```
npm run test:ui
```

### Run API Tests

```
npm run test:api
```

### Run Load Tests

```
npm run test:load
```

## 📊 Performance Testing

* Simulated concurrent users using K6
* Measured response time, throughput, and error rate
* Applied thresholds for performance validation

## 🚀 CI/CD Integration

* Automated test execution using GitHub Actions on every push
* Ensures continuous validation of application quality

## 📌 Key Learnings

* Implemented scalable test automation framework
* Gained hands-on experience in UI, API, and performance testing
* Understood real-world debugging and test structuring practices
