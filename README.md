# image-lambda

> ## Links

> ## Features List

- [x] Create an S3 Bucket with “open” read permissions, so that anyone can see the images/files in their browser
- [] A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far
- [] When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must:
  - [] Download a file called “images.json” from the S3 Bucket if it exists
  - [] The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present
  - [] Create a metadata object describing the image
    - [] Name, Size, Type, etc.
  - [] Append the data for this image to the array
    - [] Note: If the image is a duplicate name, update the object in the array, don’t just add it
  - [] Upload the images.json file back to the S3 bucket
- [] NOTE - If you setup your S3 Bucket to trigger your Lambda function on every file uploaded or modified, it will run that Lambda function every time that .json file is re-uploaded, putting you into an infinite loop. Be sure and set the event trigger to only run on files with image extensions as shown below.
