---
sidebar_position: 5
---
# Customizing the app

## About

The CamML app contains 4 tabs (including the optional **Model** tab that describes the model used). These four tabs are:
- **Cameras** (home page): Displays webcam imagery, directions, buttons for labelling, and ML labels (optional).
- **About the project**: Description of the project.
- **The model**: Details regarding the training and performance of the model.
- **Contact us**: Contact information, such as a project email or twitter handle.


The CamML app was built to be easily customizable with very little coding. We did this by creating a few **.csv** files and **.md** files that contain project info and text to be displayed in the app. 

The files live in two folders within the CamML template directory: `ui` and `text`. 

## Schematic

Below is a rough schematic of the CamML app that shows the location of some UI components. Both code templates use the same layout. In practice, the CamML app organizes pictures using two columns (rather than the one column shown for simplicity).

### Desktop

![Picture of CamML app schematic](/img/flood-camml-form-01.svg)

### Mobile

![Picture of CamML app schematic](/img/camml-flood-form-phone-01.svg)

## ui folder

The `/ui` folder contains **3 .csv** files control many aspects of the user interface for the the overall app. These files and descriptions of their contents are below.

### `project_info.csv`

There are two columns in this file, **variable** and **value**. The default file is available [here](https://github.com/FloodCamML/FloodCamML_cloudrun/blob/main/ui/project_info.csv). 

The following table shows each **variable** and a description of what should go in the **value** column:

| variable | Description |
|--------- | ----- |
| organization | Name of organization that will display with the copyright statement at the bottom of the web app |
| title	| Text to be displayed in the top left of the header and in the browser tab |
| subtitle | Text to be displayed as heading directly above images |
| subtitle_description | Descriptive text below subtitle heading and above label badges |
| tzone	| Time zone name (ex. America/New_York) |
| tzone_alias | Text to be added after time rather than long time zone name (ex. EST/EDT) |
| logo_url	| URL for logo. This is used as the favicon in the browser tab |
| description	| HTML that renders as text to the right of the subtitle and subtitle_description that gives longform directions for the app. Check out the default value for an example |
| submit_success | Text in the final popup when responses are successfully written/saved |
| button_classes | The text for buttons used to label images, with each label separated by a comma (no spaces). Buttons are grouped below each image |
| use_model	| Want to use an image classification model? TRUE or FALSE |
| model	| Name of model folder. ML model should be saved in the saved_model format |
| model_classes	| Classes of model output, in order, separated by commas, no spaces |

### `camera_info.csv`

This file contains information about the webcams that are supplying images for the app - the app will read in the file and use the info to download and display the images. The default file can be viewed [here](https://github.com/FloodCamML/FloodCamML_cloudrun/blob/main/ui/camera_info.csv)

| Column name | Description |
| ----------- | ----------- |
| camera_name | Name of the camera site. If the name contains multiple words, remove the spaces and capitalize the first letter of each word. (ex. "Canal Zone" should be "CanalZone"). The name will be displayed with spaces between each word. |	
| url | URL of the webcam to be used for downloading an image. |
| lat | Can leave blank for now. We hope to implement a `map` tab within the app in the future. |
| long | Can leave blank for now. We hope to implement a `map` tab within the app in the future.
| use | Should the site be used and shown in the app? `T` or `F`. This allows users to add many sites, but only show a few |

### `badges.csv`

This file contains information for the badges that identify each label from the model. Badges will be listed in order (from top to bottom). The default file can be viewed [here](https://github.com/FloodCamML/FloodCamML_cloudrun/blob/main/ui/badges.csv).

| Column name | Description |
| ----------- | ----------- |
| name | Name of the label. Not currently used (I forgot to include it) |
| value | Text to be displayed in the labelling badge |
| color | Hex color for badge |
| description | Text to be displayed as tooltip that describes the label |

## text folder

The `/text` folder contains **.md** files that populate the more text-heavy parts of the app. The files are:
- `about_project.md` : Content for the **About** tab.
- `about_ML.md`: Content for the **Model** tab.
- `cameras.md`: Sidebar content for the main **Cameras** tab.
- `contact_us.md`: Content for the **Contact Us** tab.
- `landing_text.md`: Text for the landing page popup that is shown on load.
- `site_info.md`: Site description text that will show above the images.
