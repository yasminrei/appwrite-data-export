# Appwrite Data Export
This utility application was built to allow anyone who wishes to export their Documents inside their Appwrite databases as JSON. This app also allows you to upload JavaScript Objects or JSON-formats as documents into an Appwrite database.

## How It's Made:

**Tech used:** Appwrite SDK with Node.js

After realising that I needed an effective way to export my data out of Appwrite directly into my local machine, the first place I went to was the Developer Docs. I read through and understood the purpose of each line of code, which made it much easier to write a program that would allow me to export my Documents. I was then able to program the first and most important feature of my app which was specifying the database I would like to export Documents from, obtaining a web response of my data, and using fs.writeFile() to extract the data as JSON into a file.

I then allowed for a cleaner data extraction to be obtained by adding an input section for the user to specify the attributes they wanted each document to contain. So, rather than extracting documents with unneeded attributes such as timestamps, the user could now specify which attributes they wanted their exported documents to include.

I then created separate for the inputs variables, in order to create a pretend frontend that was separated from the backend. If I developed this application further, I would definitely create an actually friendly user interface with styling and forms.

I then developed the uploading feature into the utility app that would allow users to add all the documents they wanted to add to a database in JSON or JavaScipt Object format, and have all the documennts imported into their database in one go.

## Lessons Learned:

I learnt that firing up a small utility app in order to program a specific function (in this case, exporting Documents from my Appwrite database directly into my local file system), in a short amount of time and at the time it is needed, was possible. It felt great knowing that I could add features to the development tools I used, for them to be useful in improving my workflow. I enjoyed working on this bite-sized utility app.
