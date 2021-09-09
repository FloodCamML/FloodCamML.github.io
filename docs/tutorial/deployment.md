---
sidebar_position: 6
---
# Deployment

Deploy your CamML app from within RStudio to [shinyapps.io](https://www.shinyapps.io/) or as a Docker image to [Google Cloud Run](https://cloud.google.com/run).

## Shinyapps.io

RStudio has some great docs about shinyapps.io, so check out [their documentation](https://docs.rstudio.com/shinyapps.io/getting-started.html) to read about how to deploy an app.

## Google Cloud Run

Google also has some good docs about deploying a container, but we'll walk through this one since they don't have an R-specific example.

### Step 1

Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) which includes some command line tools that we'll need.

### Step 2

Navigate to your IDE (I'm using VS Code). Open your project folder (the code template GitHub repo folder) in your IDE (**Open Folder** in VS Code). Create a PowerShell terminal (**Terminal < New Terminal**) and type:

``` 
docker build -t gcr.io/{project name}/{image name}:latest .
```

where `{project name}` is the name of the project you created on Google Cloud Console, and `{image name}` is the name of the image (whatever you want!). This code tells Docker to build an image (`docker build`) with the Dockerfile in the open folder (that's what the `.` at the end means) and name it as the latest image called `gcr.io/{project name}/{image name}`.

:::tip Running your Docker image locally
You can run your Docker image locally with Docker Desktop, just make sure to specify the local port as **3838** to match the container port. For local testing, you can name your image something else like:

```
docker build -t flood-camml-test
```
:::

:::warning Using Docker Hub or public container repos
Be careful if you want to upload your image to a public container repository such as Docker Hub - Code for your app contains secret keys that allow access to your Google Account. These keys are ignored by GitHub thanks to the `.gitignore` but could be accessed if someone downloads your container image.
:::

### Step 3

Push the image to the Google Cloud Container Registry using the following code.

``` 
docker push gcr.io/{project name}/{image name}:latest
```



### Step 4

Navigate to Google Cloud Console and select your project. On the left-hand navigation menu, scroll down to Google Cloud Run and select the tab. On the Google Cloud Run tab, select `Create Service`. 

Follow the prompt to name the service and select the region. To **Configure the service's first revision**, use the default selection of **Deploy one revision from an existing container image** and click **Select** to select a container image URL. On the right-hand side of the screen, you will see a sidebar appear of available container options - select the image that you pushed to the registry.

Under **Advanced settings**, set the container port to **3838**, set the memory capacity to **2 GiB**, and set the minimum and maximum number of instances to **1**.

Click **Deploy**!

### Step 5

Party! 🎉 Your app is now live!

### Resources

Google Tutorial - [Build and deploy a service in other languages](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/other)
