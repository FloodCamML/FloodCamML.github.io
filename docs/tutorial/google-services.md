---
sidebar_position: 3
---
# Google services

## Sign in/Create a Google account

If you have a Google account to use for your project, go ahead and [sign in](https://accounts.google.com/signin/v2/identifier?flowEntry=AddSession&flowName=GlifWebSignIn). 

If you do not have a Google account to use with your project, create one by following the link referenced on the [**Getting Started**](./getting-started#4-google-account) page.

:::tip Utilizing Gmail
Creating a google account for your project/business will create a Gmail account, and this can be displayed on the CamML app to promote user feedback.
:::

## Create a Google Cloud Project

#### To create a new project:

1. Navigate to the [Google Cloud Console](https://console.cloud.google.com/)
2. At the top of the page, click the **Select a project** button, and click **New Project** in the top-right of the popup window.
3. Name your project, and click **Create**. Once the project has been created, select your new project from the **Select a project** button at the top of the page.

## Create a service account

The CamML app will use a **service account** associated with the Google Account to write info and images to Google Sheets and Google Drive.

#### To create service account:

1. In the top-left of the page, expand the **Navigation Menu** and select the **IAM & Admin** tab.
2. Select the **Service Accounts** tab on the left sidebard, and click the **+ Create Service Account** button at the top of the page.
3. For Step 1 of popup, name the service account something meaningful, such as the project name or "writing". Click **Create and continue**
4. For Step 2 of the popup called **Grant this service account access to project (optional)**, select the **Editor** role for the service account (**Quick Access > Basic > Editor**). Click **Continue**.
5. For Step 3 of the popup called **Grant users access to this service account (optional)**, leave everything blank and click **Done**

:::tip Email address of service account
To make things easier later, copy the email address to a notes document so you have it handy.
:::

## Download service account key

CamML apps use service account key authetication to sign into Google Sheets and Drive. To do this, you need a private key for your service account so the app can be authenticated and write to the Google Account's resources.

#### To download the service account key:

1. Click on the service account email in the list of **Service Accounts**.
2. You will see multiple tabs at the top of the page, select the **Keys** tab.
3. Click the **Add Key** button, and **Create New Key**. Select **JSON** as the key type, and click **Create**. The key will be saved to your *Downloads* folder on your computer.

## Copy the key to the CamML directory

The key JSON file needs to live in the `/keys` directory of the CamML folder and be renamed to `google_key.json`. The CamML shiny app will look inside this folder and use the `google_key.json` file to authenticate the app.

#### To add the file to the CamML directory:

1. Find the key JSON file in your `Downloads` folder and copy the file
2. Navigate to the folder of your GitHub repository for the project and look inside for the `/keys` folder.
3. Paste the key JSON file into the `/keys` folder, and rename the file to `google_key.json`

:::danger Keeping keys secret 🔒 
It is **extremely** important to keep this key JSON file secret. 

The `.gitignore` file in the CamML code template ignores all files within the `/keys` folder, but it doesn't hurt to double check before you post a commit to GitHub.
:::

Next, we will create the Sheets file and Drive folder to collect data & images from the CamML app.



