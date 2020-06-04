# Git Commands

git init - Create a new git repo
git status - View the changes to your project code ( Untracked file, unstaged files, staged files)
git add - Add files to staging area ( it can be added from both untracked area and unstaged area)
    adding single file --> git add filename/'filename'
    adding all files in unstaged area ---> git add .

Untracked Area/Files - New files which are not ye known by git ie they have never been committed are present here
Unstaged Area/Files - Files which are not new to git , but have some new chnages are presnt here
Staged Area/Files - All files added through git add command come here before they can be committed,
These files can be from both untracked and unstaged area. executing command git add will make files to move from there to staged area directly and same for unstaged files.

git commit - Creates a new commit with files from staging area with a new identifier

git log - View recent commits with some details like identifier , name of the committer and date time also.
