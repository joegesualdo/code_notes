// This is from the first code school git class:

// What is a directory?
// A folder used for storing multiple files.

// What is a Repository?
// A directory where Git has been initialized to start version controlling your files.

// Initialize the Git repo. Type it in the project directory (octocat)
git init

// our directory now has an empty repository in /.git/. 
//The .git directory is where Git operates.

//See what the current state of our project is:
git status

// We added a file named octocat.txt.
// To tell Git to start tracking changes made to octocat.txt, we first need to add it to the staging area by using
git add octocat.txt
// This adds octocat.txt to the Staging Area
// if you run git status before and after this command, you will see that difference.

//What does it mean to be staged?
// Files are ready to be committed.

// What does it mean to be unstaged?
// Files with changes that have not been prepared to be commited.

// What does it mean to be untracked
// Files aren't tracked by Git yet. This usually indicates a newly created file.

// What does it mean to be deleted?
// File has been deleted and is waiting to be removed from Git.

// what is the staging area?
// A place where we can group files together before we "commit" them to Git.

// What is a commit?
// A "commit" is a snapshot of our repository. This way if we ever need to look back at the changes 
// we've made (or if someone else does), we will see a nice timeline of all changes.

// The files listed as "changes to be committed: here are in the Staging Area, and they are not in our repository yet. 
// We could add or remove files from the stage before we store them in the repository.

// To store our staged changes we run the commit command with a message describing what we've changed. Let's do that now by typing:
git commit -m "Add cute octocat story"

// What is a wildcard?
// We need quotes so that Git will receive the wildcard before our shell can interfere with it. Without quotes our shell will only 
// execute the wildcard search within the current directory. Git will receive the list of files the shell found instead of the wildcard 
// and it will not be able to add the files inside of the octofamily directory.

//  You also can use wildcards if you want to add many files of the same type.
git add '*.txt' // NEED QUOTES!

// When using wildcards you want to be extra careful when doing commits. Make sure to check what files and folders are staged by using 
// git status before you do the actual commit. This way you can be sure you're committing only the things you want.

//What is git log?
//Think of Git's log as a journal that remembers all the changes we've committed so far, in the order we committed them.
git log

// How to see more information on git logs?
// Use git log --summary to see more information for each commit. You can see where new files were added for the first time or where 
// files were deleted. It's a good overview of what's going on in the project.
git log --summary

// How to push to github?
// To push our local repo to the GitHub server we'll need to add a remote repository.
git remote add origin https://github.com/try-git/try_git.git
//This command takes a remote name and a repository URL, which is the url we got from github after we created a repository with them

// Remote names
// Git doesn't care what you name your remotes, but it's typical to name your main one origin.
// It's also a good idea for your main repository to be on a remote server like GitHub in case your machine is lost at sea during a 
// transatlantic boat cruise or crushed by three monkey statues during an earthquake.

// How to push to remote repository
// The push command tells Git where to put our commits when we're ready, and boy we're ready. So let's push our local changes to our 
// origin repo (on GitHub).
git push -u origin master
// The name of our remote is origin and the default local branch name is master. The -u tells Git to remember the parameters, 
// so that next time we can simply run git push and Git will know what to do. Go ahead and push it!

// When you start to get the hang of git you can do some really cool things with hooks when you push.
// For example, you can upload directly to a webserver whenever you push to your master remote instead 
// of having to upload your site with an ftp client. Check out Customizing Git - Git Hooks for more information.

// How to check for changes on our remote repository and pull down any new changes
// Let's pretend some time has passed. We've invited other people to our github project who 
// have pulled your changes, made their own commits, and pushed them.
// We can check for changes on our GitHub repository and pull down any new changes by running:
git pull origin master

// What is a pull request?
// If you're hosting your repo on GitHub, you can do something called a pull request.
// A pull request allows the boss of the project to look through your changes and make comments 
// before deciding to merge in the change. It's a really great feature that is used all the time 
// for remote workers and open-source projects.

// Sometimes when you go to pull you may have changes you don't want to commit just yet. One option you have, other 
// than commiting, is to stash the changes.
git stash //use command to stash your changes
git stash apply // use command to re-apply your changes after your pull.

// What is HEAD?
// The HEAD is a pointer that holds your position within all your different commits. By default HEAD points to your 
// most recent commit, so it can be used as a quick way to reference that commit without having to look up the SHA.

// What if there where some additions and changes to the project when we pulled it?
// Let's take a look at what is different from our last commit by using the git diff command.
// In this case we want the diff of our most recent commit, which we can refer to using the HEAD pointer.
git diff HEAD

// Another great use for diff is looking at changes within files that have already been staged. Remember, 
// staged files are files we have told git that are ready to be committed.
git diff --staged

// What is Commit Etiquette?
// You want to try to keep related changes together in separate commits. Using 'git diff' gives you a good 
// overview of changes you have made and lets you add files or directories one at a time and commit them separately.

// How do we unstage files?
// You can unstage files by using the git reset command:
git reset octofamily/octodog.txt
// removes the file octodog from staging

// How to change individual files to how they were at the last commit?
// Files can be changed back to how they were at the last commit by using the command: git checkout -- <target>. 
git checkout -- octocat.txt //need to be spaces before and after --

// What is the --?
// So you may be wondering, why do I have to use this '--' thing? git checkout seems to work fine without it. 
// It's simply promising the command line that there are no more options after the '--'. This way if you happen to 
// have a branch named octocat.txt, it will still revert the file, instead of switching to the branch of the same name.

// What is a brach?
// Branches are what naturally happens when you want to work on multiple features at the same time. You wouldn't want to 
// end up with a master branch which has Feature A half done and Feature B half done.
// Rather you'd separate the code base into two "snapshots" (branches) and work on and commit to them separately. As soon as 
// one was ready, you might merge this branch back into the master branch and push it to the remote server.

// Development cycle for git?
// When developers are working on a feature or bug they'll often create a copy (aka. branch) of their code they can make 
// separate commits to. Then when they're done they can merge this branch back into their main master branch.

//How to create a branch?
git branch <branch_name>

// How to see a list of your branches?
git branch 

// How to switch branches?
git checkout clean_up

// How to create a branch and check that branch out at the same time?
git checkout -b new_branch_name
// This is the same as doind 'git branch new_branch' and 'git checkout new_branch'

// How to remove the actual files from disk, but will also stage the removal of the files for us.
git rm '*.txt'

// How to remove directories?
// Removing one file is great and all, but what if you want to remove an entire folder? 
// You can use the recursive option on git rm:
git rm -r folder_of_cats // r stands for recursive
// This will recursively remove all folders and files from the given directory and commit them to staging

// If you happen to delete a file without using 'git rm' you'll find that you still have to 'git rm' the 
// deleted files from the working tree. You can save this step by using the '-a' option on 'git commit', 
// which auto removes deleted files with the commit.
git commit -am "Delete Files"

// How to commit after files are deleted and staged?
git commit -m "Remove all cats"

// How to get back to master branch?
git checkout master

// How to merge branch into master?
git merge clean_up

//What are merge conflicts
// Merge Conflicts can occur when changes are made to a file at the same time. A lot of people get really 
// scared when a conflict happens, but fear not! They aren't that scary, you just need to decide which code to keep.
// Merge conflicts are beyond the scope of this course, but if you're interested in reading more, take a look 
// the section of the Pro Git book on how conflicts are presented.

// How to delete a branch you don't need anymore, after you merge?
git branch -d branch_name

// How to delete a branch that hastn't been merged. You realize you don't want that feature any more
// What if you have been working on a feature branch and you decide you really don't want this feature anymore? You might decide to delete the branch since you're scrapping the idea. You'll notice that git branch -d bad_feature doesn't work. This is because -d won't let you delete something that hasn't been merged.
// You can either add the --force (-f) option or use -D which combines -d -f together into one command.
git branch -df branch_name
//OR
git branch -D branch_name

// Push to your remote repository
git push // dont need options since you set this earlier: git push -u origin master



