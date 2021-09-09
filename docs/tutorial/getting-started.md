---
sidebar_position: 1
---
# Getting Started

To make your own CamML app, you need to be able to use the following programs:

## GitHub 

We will be using GitHub Desktop in this tutorial to work off of a code template. This will involve cloning a repository to your local computer so you can customize it.

#### Resources

- [Download GitHub Desktop](https://desktop.github.com/)
- [GitHub basic tutorial](https://guides.github.com/activities/hello-world/) 


## RStudio

RStudio allows us to easily edit the code template and view our app locally. We can also use RStudio to deploy our app to [shinyapps.io](https://shinyapps.io). 

#### Resources

- [Download RStudio](https://www.rstudio.com/products/rstudio/)
- [Get started with Shiny](https://shiny.rstudio.com/tutorial/)

## Google account 

CamML makes use of a Google Account to access Google Sheets, Google Drive, and change API permissions. You can use your personal Google account or make a new one for your project/business.

#### Resources
- [Create a Google Account](https://accounts.google.com/SignUp)

## Google Cloud Run OR shinyapps.io

We have instructions for deploying CamML on [Google Cloud Run](https://cloud.google.com/run) (a container hosting service) and [shinyapps.io](https://shinyapps.io) (RStudio shiny app hosting). Google Cloud Run will use the Google Account that is used for Google Drive and Sheets, and shinyapps.io requires a free account to use.

A CamML container used created with the Google Cloud Run option should work on other webservices that support containers. We have only tested on Google Cloud Run, though, so no promises! 

### Picking a deployment option

#### Google Cloud Run

The Google Cloud Run template uses Docker to containerize the app and Google Cloud command line tools to deploy, so this option is a bit more involved. If deploying a model and you want it to load quickly, Cloud Run can keep an instance running all the time (this costs our NC-12 Flood CamML app ~25$/month). Cloud Run also lets you use custom URLs for free. If only labeling, you can make the instances scale to 0 to try to stay in the free tier of usage.

| Pros | Cons |
|------|------|
| Can keep an instance always running for fast loading | Can cost more $ if instance running all the time, especially when using a model that uses more memory |
| Free use of custom URLs (purchased separately) | Right now limited to 1 instance and 80 users at a time (due to Google Cloud Run settings that may not connect user request to correct instance). Working on solution. |
| Containerized app is able to deploy on other web services | More complicated to create and deploy than shinyapps.io |



#### shinyapps.io
If you're new to R or coding in general, try the `shinyapps.io` template - it doesn't use Docker and can be deployed directly from RStudio. This option is the easiest and quickest to deploy for labeling-only apps (no model). Image classification models will take a long time to load since instances are put to sleep when not in use. The pricing is more expensive than Cloud Run heavy traffic, but between shinyapps.io and Cloud Run, it may be the most robust way to handle large amounts of traffic (See Google Cloud Run instance limitation above).

| Pros | Cons |
|------|------|
| Easy to deploy | Long model loading times |
| Easy to maintain | Custom URLs cost $ to use |
| May be best bet for heavy traffic apps right now | Paid tiers are somewhat expensive |

#### Resources
- [Google Cloud Console](https://console.cloud.google.com/)
- [shinyapps.io](https://www.shinyapps.io/)

## Docker 

:::info When to use Docker?
You only need to use Docker when you want to create and deploy the CamML app as a container on a web service. If you are deploying the app through shinyapps.io, you **do not** use Docker.
:::

Docker creates containers, which are portable images that include an operating system and all necessary dependencies to run specific code. We will be using Docker Desktop to package up our shiny app for deployment on Google Cloud Run.

#### Resources

- [Download Docker Desktop](https://www.docker.com/products/docker-desktop)