# MoneyMap

## Introduction
Welcome to the Finance Management Website documentation. This web application is designed to help users manage their finances efficiently by providing tools for income tracking, transaction recording, budget management, savings, loans, and subscriptions. Built with React, TypeScript, MySQL, and styled with Bulma CSS, this application aims to simplify financial management for individuals.

## Features

### Income Management
- **Overview**: Users can manage their income sources, whether fixed or variable.
- **Fixed Income**: Users can input fixed income sources, facilitating easy calculation of upcoming payments.
- **Default Value**: In the absence of fixed income, users can set a default value for their minimum wage.

### Transaction Management
- **Manual Input**: Users manually record their transactions within the application.
- **No Automatic Sync**: The application does not connect directly with real bank accounts or credit cards, requiring manual input of transaction data.

### Budget Management
- **Open or Limited Budget**: Users can choose between an open budget or setting monthly limits.
- **Icon Categorization**: Various icons aid in categorizing budget items for better visualization.
- **Manual Entry**: Users manually input budget data into the application.

### Saving Account Management
- **Income Comparison**: The application checks if the saving limit is within the user's income range.
- **Variable Income Warning**: Users receive a warning when using variable income.
- **Max Amount Calculation**: For variable incomes, the application calculates a max amount based on the previous month's income.
- **Customization Options**: Users can customize their saving accounts with various parameters.

### Loan Management
- **Similar to Saving**: Loan management functions similarly to saving accounts but with a focus on the total loan amount.

### Security Measures
- **Preventing SQL Injections**: Measures are in place to prevent SQL injection attacks.
- **Password Hashing**: User passwords are hashed to enhance security and protect user data.

## Usage

### Installation
1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Configure MySQL database settings in the application.
4. Start the application using `npm start`.

### User Interface
- The user interface is designed to be intuitive and easy to navigate.
- Users can access different features through the navigation menu.

### Account Creation
1. Click on the "Sign Up" button.
2. Fill in the required information, including username, email, and password.
3. Submit the form to create an account.

### Functionality

#### Income Management
- **Adding Fixed Income**:
  - Navigate to the income management section.
  - Click on the "Add Income" button.
  - Fill in the details for the income source and submit the form.

#### Transaction Management
- **Recording Transactions**:
  - Navigate to the transaction management section.
  - Click on the "Add Transaction" button.
  - Fill in the details for the transaction and submit the form.

#### Budget Management
- **Setting Budget Limits**:
  - Navigate to the budget management section.
  - Choose between open budget or setting monthly limits.
  - Input budget details and submit the form.

#### Saving Account Management
- **Creating Saving Accounts**:
  - Navigate to the saving account management section.
  - Click on the "Create Saving Account" button.
  - Input details for the saving account and submit the form.

#### Loan Management
- **Managing Loans**:
  - Navigate to the loan management section.
  - Click on the "Add Loan" button.
  - Input details for the loan and submit the form.

## Best Practices
- Regularly update income sources and transactions to maintain accurate financial records.
- Use strong, unique passwords and enable two-factor authentication for added security.
- Backup financial data regularly to prevent data loss.

## Troubleshooting
- If you encounter any issues or errors, please refer to the error messages for guidance.
- Check the database connection settings and ensure they are correctly configured.

## Future Development
- Planned features include automated transaction imports from bank accounts and enhanced data visualization tools.
- We welcome feedback and feature requests from users to improve the application further.

## Conclusion
The Finance Management Website offers a comprehensive solution for managing personal finances effectively. By following the guidelines provided in this documentation, users can utilize the application's features to track income, manage transactions, set budgets, and plan for the future with confidence.
