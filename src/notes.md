---
layout: meeting.njk
title: Notes -- How to build Ames Iowa Al-Anon Meetings site
mytags:
    -   name: notes
        order: 21
    -   name: 'Ames Iowa'
        order: 20

featuredImage: /_images/AmesIowaAl-AnonMeetings-textIntoImages-com.png

date: Last Modified  # page.date resolves to last modified date, otherwise to created date if date: left out

description: 'NOTES about building the site: Ames Iowa Al-Anon meetings'
eleventyExcludeFromCollections: true
---

_____

### Terminal commands to update Al-anon site as of 5/27/2026 and again 8/31/2026 Ed H. added SSH to github so git push origin main will work now everytime from mbp15

#### cd to the root of the project folder above build and src
#### npm run quiet 
#### quit out of the build and stay in the root folder
#### git add . 
#### git status
#### git commit -m "___________ note here"
#### git push origin main
#### git status
#### npm run deploy
#### [https://AmesAl-Anon.github.io](https://AmesAl-Anon.github.io)

_____

#### Streamlined the Ames Al-Anon web site a bit more on Friday June 5 2026 incorporating a lot of Miriam's suggestions.

### Ed searched the net June 5 2026 for Ames Iowa Al-Anon meetings and this search is now much much better and these are the results which now finds all the meetings except for Tuesday Al-Anon and only the Tuesday Alateen is not listed in the AI for some reason.

#### Al-Anon meetings in Ames, IA, primarily hosted at 1201 McCormick Ave (Ames Alano/McCormick Clubhouse), offer regular weekly sessions for family members and friends of alcoholics.  Key local groups include the Beginner’s Al-anon Family Group on Mondays at 7:00 PM, Progress Not Perfection on Wednesdays at 7:00 PM, and Daily Hope and Courage on Thursdays at 5:45 PM. 

### Specific meeting details for the Ames area include:

- Monday Night: Beginner’s Al-anon Family Group at 1201 McCormick Ave, featuring wheelchair access and welcoming families, friends, and observers. 
- Tuesday Night: Alateen Survivors at Collegiate United Methodist Church (2622 Lincoln Way), which is an open, online-capable meeting for young people. 
- Wednesday Night: Progress Not Perfection AFG at 1201 McCormick Ave, a closed, wheelchair-accessible meeting.
- Thursday Night: Daily Hope and Courage AFG at 1201 McCormick Ave (5:45 PM) and Adult Children AFG at 1517 Northwestern Ave (7:00 PM), both closed and wheelchair-accessible. 
- Saturday Morning: New Hope Group AFG at 2622 Lincoln Way (10:00 AM), a closed, wheelchair-accessible meeting. 

#### Also added the markdown-it-attrs using npm and put this into the eleventy.js file today to enable links to open in a new tab.
___

#### Ed H created this project March 2026 
and pretty much finished 5/9/2026
Then simplified and removed Tags 5/26/2026. Keeping it simple.
For Ames Iowa Al-Anon on github.io

1) The name of the top level folder AmesAl-Anon.github.io needs to match the name of the repository exactly
even the case needs to match I think. If they match then github will use the index.html file from the main
part of the git repository and you won't need a subdirectory. Much cleaner. Ed H 5/9/2026

2) The build files are going into the build/ folder but you want the build files to be in the main part of the
repository. Git makes an exact copy of your local folder on github so you need to move the build files
into the main "." part of the repository and then commit to achieve 1) above. 

***

 ### after doing all of the mumbo jumbo below just to have a build folder seperate from the src folder,
 i'm thinking it would be easier to build the files into the /root

 ### but on 5/12/2026

 ## Wait ... I discovered a method to keep the build files separate in the build folder and
 deploy to github and keep them in a separate branch gh-pages

 This is how I did this:


 1) Installed gh-pages: this is a package that will create a branch on github named gh-pages if one is
 not already created. The gh-pages npm package is a Node.js utility that automates the process of publishing static files to a 
 gh-pages branch on GitHub, which is then served by GitHub Pages.  It creates a temporary clone of the repository, copies 
 specified source files (such as a dist or build folder from eleventy app), commits them, and pushes them to the target branch. 

 > npm install --save-dev gh-pages <-- only do this once

2) Added a Deploy Script to package.json:

> "scripts": {                      <--only do this once
>   "deploy": "gh-pages -d build"
> }

3) Set the output dir to build/ in eleventy.js    <-- just do this one time

## Only do 1) 2) and 3) above one time then do the following every time you want to change the website. 

### Note: Want both src files & build files added to github because github is the webhost and you need the build files (which is the website itself) + want to preserve the src files. So cd into the project root which will be the folder above build and src then do the following commands from Terminal:


4) npm run quiet  <-- build the project to the build folder the quit out of this

5) git add . <-- because want to add source code files >

6) git status <-- to see what files are staged to be committed

7) commit -m "note for this commit maybe say upload source files changed" <-- because you want to add and commit the source code

8) git push origin main

9) Deploy to github

  > npm run deploy
                     <-- this git command pushes the contents of build folder into the gh-pages branch
                                        it only publishes build folder and build files not the source files.

10) Configure GitHub Pages:          <-- only do this once

        In your repository's Settings > Pages
        set the source to the gh-pages branch and the folder to /(root).  <-- Ed H did this on 5/12/2026

## Now working the way I want it. Yahoo !!

 ***

 # Ignore the following: Was Ed's first attempt at having my build cake and eating it too.

4) from a terminal do the following

git mv build/* .
        note: if you get an error that there are already files there and is a conflic with the same name do:
git mv -f build/* .
        note: the -f forces the move which should be used sparingly
        note: do not need to move the images folder unless you have changed an image so do the following
git rm -r Monday Tuesday Wednesday Thursday Saturday Thursday-Adult-Child index.html
setopt extended_glob
git mv -f build/^_images .
        this will move everything except anything with _images in it

        If the build/AmesIowaAl-AnonMeetingsList directory exists but contains no files that are tracked by Git (e.g., only untracked files or subdirectories), Git sees it as "empty" and refuses to move it.  
        so add the build files
git add -A build/* .
git status
git mv build/^_images .
git mv -f build/^_images .
    then
git add .
        or
git add -A
        the -A will also delete any files that need deleting
git commit -m "Update Al-Anon site + move build files to root again" 
git push origin main


or you can do all of the above except the first command above git mv build/* .
from the Visual Studio Code github publish extension too except can't do the build/ mv 

***

## Make AmesAl-Anon.github.io site google searcheable

1) go to Google Search verification site

2) meta name="google-site-verification" content="random code that google told you to put into the header" <-- put this meta tag line into the header of this website and it only needs to go into the home page html file. I wrote some nunjucks code so it will only be in the index.html of the main site.

3) Go back to Google search and finish the verification by clicking the proper button to verfiy home page

4) Google will verity the site and say Done -- Ed H. done 5/15/2026

5) In a day or so go to https://search.google.com/search-console?resource_id=https://amesal-anon.github.io/ and see if it is indexed