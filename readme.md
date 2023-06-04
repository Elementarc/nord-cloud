# Nord Cloud

Nord Cloud is a small application that calculates network speed to different devices.

## Environment

- Node v18
- npm 8

## Getting Started Locally

Before getting started, make sure to install Node.js **https://nodejs.org/en/download** and Git **https://git-scm.com/downloads**.

#### Initialization

1. Clone the project repository:
   `git clone https://github.com/Elementarc/nord-cloud.git`

2. Navigate to the project directory:
   `cd nord-cloud`

3. Install all dependencies:
   `npm i`

#### Starting the Production Build:

1. Build the project:
   `npm run build`

2. Start the production build:
   `npm start`

#### Starting the Development Build:

1. Start the development build:
   `npm run dev`

## Running Tests

1. Test the application:
   `npm run test`

## Deployment on Google Cloud Platform (GCP)

To deploy your application on GCP, follow these steps:

1. Install the Google Cloud CLI by following the instructions at **https://cloud.google.com/sdk/docs/install**.

2. Create a new project on GCP at **https://console.cloud.google.com/projectcreate**.

3. Create a service account with the necessary permissions. Replace `PROJECT_NAME` in the following URL with your project name: **https://console.cloud.google.com/iam-admin/serviceaccounts?project=PROJECT_NAME**.

4. Update the `deploy` script in your `package.json` file to execute the `gcloud` command with the appropriate parameters: `gcloud app deploy --service-account=SERVICE_ACCOUNT_MAIL --project=PROJECT_ID`.

5. Choose a region to deploy your application. Once deployment is complete, you can visit the public URL to access your application.
