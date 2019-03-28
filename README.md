# Ably Emails using MJML

This repository contains MJML and HTML code for all the emails sent out to our customers from Dec '18. The basic template code is available in the relevant email category folders.

# Setting up the MJML compiler locally

## Using the MJML desktop app

The easiest option is to download and install the MJML desktop app from http://mjmlio.github.io/mjml-app

## Using Node

Alternatively, you can set it up using Node as follows:

   `$ npm install`

After the installation is successful, you can generate the HTML file in the same folder by running the following script with the path to the required MJML file:

    `$ bin/mjml-compile "Product Updates/18-12-20-OpenDataStreamingProgram/odsp-email.mjml"`

HTML file generated at: Product Updates/18-12-20-OpenDataStreamingProgram/odsp-email.html

## Using the MJML online editor

To edit MJML, you can use the online editor with live preview at https://mjml.io/try-it-live/.

# Building new emails using the existing templates

Follow the steps below:

1. Navigate to either newsletters/0-template or product-updates/0-template as required and copy the index.mjml file. (Note: There is no need to copy the assets or components from the template)
2. Create a new folder for every email in the relevant folder defining its category. Follow the naming convention `yy-mm-dd-title`. Paste the index.mjml file here that you copied earlier. In the same folder, create another folder named `assets`, you'll store all the images to be used this email here.
3. All the available design components are included in the `index.mjml` file with useful comments at the start and end of each section, just get rid of the ones you don't need. The source code for all the components is available separately in the template folder as well.
4. Within this folder, create a new folder named `assets`, you'll use this to store all the images used in this email. All image names should contain only letters/numbers and dashes.
5. All the assets are stored in S3 in https://files.ably.io (S3 bucket `files.ably.io`) and referenced directly from the emails.

# More about S3 and sync

* We store all the assets used in the emails in Amazon S3. 
* You can find all these images in files.ably.io/email/images.
* When you run the `bin/sync` command from the root of this repo, the complete repo (and not just the images) will be synced with S3.
* Note that none of the items are removed from S3 with the sync command. It is generally not recommended to delete items from S3 manually as well, as something somewhere that's linking to it will break.
* All the synced images can then be referenced in the email in the following format:

    `https://files.ably.io/email/images/<email-category>/<email-folder-name>/assets/<image-name-with-extension>`

    where `email-category` refers to either 'newsletters' or 'product-updates'
    and `email-folder-name` refers to the new folder that you created above

* While you are building the email, you can run the following command from the root folder of this repo to make sure all of your assets are continuously synced with S3

     `$ bin/sync-continuous`

# Running the email debugger

* Run `npm install`.
* The `bin/mjml-compile` script catches any invalid links or images that are not linked via Ably's S3 bucket, throughout your MJML file. You can execute this script by running `bin/mjml-compile <full-path-to-mjml-file>` from the root of this repo. 

# MJML to SendGrid

* Using one of the MJML compilation options above, you can convert your final MJML email to HTML. Simply copy and paste it in your SendGrid code editor.

# Plain-text version

A lot of users prefer to read the emails in the plain text version. Although SendGrid automatically converts the HTML to plain-text, it's inaccurate most of the time. The plain-text editor in SendGrid isn't good either. However, [MailChimp provides a stand-alone tool to convert HTML to plain text](https://templates.mailchimp.com/resources/html-to-text/) with a more comfortable editor. 

1. Copy the email's HTML and paste it here.
2. Convert it to plain-text version and verify if it makes sense or edit otherwise.
3. Copy this final plain-text version and paste it in SendGrid's plain-text tab when setting up your email.