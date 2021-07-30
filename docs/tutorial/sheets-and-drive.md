---
sidebar_position: 4
---
# Google Sheets & Drive

CamML uses Google Sheets to record user labelling responses and Google Drive to save the images being labeled.

## Create an R file to hold IDs

After we create a spreadsheet and folder, we will copy their IDs into an R file that will be loaded by the app as environment variables.

We will create the R file now so we can copy the IDs in when ready.

#### To create the R file:

1. Open RStudio
2. Click **File > Open Project**, navigate to the GitHub repo folder, and open the R project file (.RProj)
3. Create a new file (**File > New File**) called `google_keys.R`, and paste in the following code:

```r title="google_keys.R"
Sys.setenv("GOOGLE_SHEET_ID" = "your_sheets_id")
Sys.setenv("GOOGLE_FOLDER_ID" = "your_folder_id")
```

4. Save the file, and keep it open so we can paste in the IDs when ready!


## Create a spreadsheet

#### To create the spreadsheet

1. Navigate to Google Drive while signed into your Google Account. Click the **New** button in the top left, and select **Google Sheets**. Name the spreadsheet something meaningful, such as **Flood CamML responses**. 

2. The CamML app writes a few columns worth of data, and it is important to have the columns names and order of column names exact. Create column names following example convention below:

#### Example of spreadsheet columns

| date | location | filename | model_score | model_class | user_response |
| ---- | -------- | -------- | ----------- | ----------- | ------------- |
| 2021-07-28 13:11:24 |	Mirlo | Mirlo_2021-07-28 13:11:23.jpg | 0.01 | No Flooding | No Flood |

:::note Datetime format
Datetimes are reported in UTC in the spreadsheet, but by default are displayed as EST/EDT in the CamML App.
:::

3. Click the `Share` button in the top-right, and paste the service account email into the text box to share the spreadsheet with the service account. Accept the default properties (Editor), and click **Done**.

4. We need to copy the ID of the spreadsheet into `google_keys.R` so the app knows what spreadsheet to write to. The easiest way to do this is to copy the ID from the URL for the spreadsheet. The ID will be an extremely long string of characters and symbols between two forward slashes.

:::note Example ID
From the URL `https://docs.google.com/spreadsheets/d/very-long_string_ofRandom.characters-isTheKey!/edit#gid=0`, the ID would be `very-long_string_ofRandom.characters-isTheKey!`
:::

Your `google_keys.R` file should now look like below (except with your actual ID, of course!)


```r title="google_keys.R"
Sys.setenv("GOOGLE_SHEET_ID" = "very-long_string_ofRandom.characters-isTheKey!")
Sys.setenv("GOOGLE_FOLDER_ID" = "your_folder_id")
```

## Creating a folder

#### To create a Google Drive folder:

1. At the Drive homepage, click the **New** button in the top left, and select **Folder**. Name the folder something meaningful, such as **Flood CamML Images**. 

2. Click the `Share` button in the top-right, and paste the service account email into the text box to share the folder with the service account. Accept the default properties (Editor), and click **Done**.

3. Double click on your new folder, and copy the folder ID from the URL just like you did for the spreadsheet. The folder ID is likely located at the end of the URL rather than between forward slashes.

4. Copy the folder ID into `google_keys.R`:

```r title="google_keys.R"
Sys.setenv("GOOGLE_SHEET_ID" = "very-long_string_ofRandom.characters-isTheKey!")
Sys.setenv("GOOGLE_FOLDER_ID" = "folder-key_is.also_aVery-long_string")
```

Now that we have all Google components set up, we're ready to customize the app!