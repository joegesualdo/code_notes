// CodeSchool: Git Basics

// What is a version control system?
// Works as a time capsole, so you have a complete history of which files where changed and how

// Up until recenetly most vcs used a central repo, one server. Git is redistributed which means everyone has 
// thier own copy of the repo
// If you lose the data, everyone has a repo copy so 

// dvcd = distributed version control system
// dvcd is what git uses, not centrelaized

// How to get a list of commands
git help
OR
git help <certain_commnad> // ex. git help config


// TO have your name and email on commits, you need to add your username and email:

// How to set your user name in git?
git config --global user.name "Joe Gesualdo"

// How to set your username in git?
git config --global user.email joegesualdo@gmail.com

// How to add pretty command colors in git outpul?
git config --global color.ui true

// How to create a local git repo. Not on a server! It's just local
git init

// How to start tracking a file?
// YOu need to add it to the staging area
git add <filename>

// How to add all new or modified files or deleted files to our stage?
 git add --all

 // How to add all files of a txt extension in CURRENT DIRECTORY?
 git add *.txt

 // HOw to add a particular directory and subdirectory?
 git add docs/

 // How to add all txt files in the WHOLE DIRECTORY?
 git add "*.txt" // use quotes if you want to add all in the entire directory

// How to check the status of git?
git status

// How to commit
// A commit take a snapshot of our stage, and gets added to the top of our timeline
git commit -m "Create Read Me" // KEEP message in present tense

// How to see the git timeline history/ commit history
// Gives us author, date, and commit message
git log



// LEVEL 2

// You made a change to a particular file but you don't remember what that change was. How to find out?
git diff //This will compare the UNSTAGED with the last commit. Not files in staging areas!
// This will show UNSTAGED differences since last commit
// REd is line removed
// green is line added

// How to view diff in staging area?
git diff --staged // gets diff of our STAGED files and last commit. NOT our unstaged files.

// How to get things off the stage
git reset HEAD FILENAME // TODO: what exactly does this do

// WHat is HEAD?
// HEAD efers to last commit on the current branch or timeline we are on

// How to get rid of all changes of a file since last commit? Revert file back to last commit?
git checkout -- FILENAME

// How to add and of our tracked files to the stage and commit them in one command?
git commit -a -m "Modify readme"
// This doesn't add any files we aren't tracking. SO we need to add those individually!

// How to undo a commit
git reset --soft HEAD^
// This will undo last commit and move everything from that commit back into staging

// What does HEAD^ mean?
// HEAD^ is saying move to commit 1 before current HEAD

// How to modify a commit?
// use ammend option
git commit --amend -m "Modify readme & todo.txt"
// this will amend our staging to our last commit
// The commit message is optional, we can change it if we want. Whih will override our previous commit message

// How to totally remove our last commit?
git reset --hard HEAD^
// This will BLOW IT AWAY. Only use this if it went horribly wront and you want to totally remove it

// How to totally remove the last 2 commits?
git reset --hard HEAD^^
// This will undo the last 2 commits and all changes

//How do we push our local repository to a remote repository so other people can pull our changes and push back up their changes?
// When dealing with remote repositorys, we will be using the 'git remote'

// Git doesnt take care of acess control, you cant specify who has access to it.
// Can use a hosted solution: GitHub or BitBucket
// Can also use a self managed solution: Gitosis or Gitorious

// How to store a repo on github?
1) Create a profile and repo on GitHub

//How to add a remote repo?
git remote add <name_you_want_for_remote_repo> <path_or_url_of_repo>

// How to add a github remote repository
git remote add origin http://github.com/jpg87/<repo-path>

//What is origin?
// Origin is the name of the remote
//We can give this remote repository any name, doesn't need to be origin. But origin should be the name of your main remote

// How to list all the remote repos that our local repo knows about?
git remote -v

//HOw to push to a remote?
git push -u origin master // we are pushing the local branch master. Can push any branch.

// what is -u?
// makes it so next time you push, you don't have to specify the name and branch
// You can just run git push

// How to cach password so we don't have to input it every time we push to github???

// How do we pull down from a remote?
git pull <remote_name> <branch_name>
//OR
git pull //if we set origin to -u earlier: git push -u origin master

// How to setup multiple remote servers?
git remote add <name> <address> //name can be anything

//How to remove remotes
git remote rm <name> //ex. git remote rm origin

//How to push to remotes
git push <name> <branch>

//What is heroku?
// Heroku is a hosting platform
// If you have a heroku account, and installed a heroku gem and you type heroku create:
heroku create
// this creates a remote and this give you a git repo ssh address
// You can see the remotes by typing:
git remote -v

//What is a git repo ssh address?
// heorku used ssh address rather than a url like githun
// alot of times when you are working with git remote, you will have an ssh address istead of url

// How do we push to heroku?
git push heroku master
// When heroku gets the code, they will automatically deploy it

// DO NOT RUN ANY RESET OR AMMEND COMMANDS AFTER YOU PUSH! IT"S LIKE CHANGING HISTORY



// LEVEL 3

//How do we start collaborating on a project
// WE need to clone the repository
git clone <address>
// This will create a local directory with that repository

// How to change the name of project when we clone it?
git clone <address> <name>

//What does cloning do?
1) Downloads the entire repository into a new <name> directory
2) Adds the 'origin' remote, pointing it to the clone url
3) Check out the initial branch (likely master). Sets the branch and HEAD

// To see the remotes once clone:
git remote -v

// When a teammate wants to work on a feature, what do they do?
// 1)creat a branch
git branch cat //BUT this doesn't move to the cat brach, we are still on master
// 2) we need to move to our newly created branch
git checkout cat // This moves us to the cat branch. WE are switching timelines. HEAD is now on cat. There is NO HEAD because we haven't committed anything on this branch
// 3) Need to add our newly created file cat.txt to staging
git add cat.txt
// 4) Need to commit our changes
git commit -m "Create quantum cat" //this is now a commit on the cat branch. This commit will now be the HEAD
// 5) Need to move back to master
git checkout master //we will NOT see the newly created file or commit meassage when we run git log on master branch
// 6) Need to merge cat branch with master
git merge cat
// 7) now delete the branch
git branch -d cat
// 8) create another branch to work on admin features
git checkout -b admin //the -b is a shortcut which creates a branch AND checks it out
// 9) Make changes to files and commit them
git commit -m 'Add dashboard'
git commit -m 'Add user admin' //every time we make a commit our HEAD moves with it. Moves to the last commit
// 10) Need to switch to master and fix some bugs
git checkout master
// 11) Need to pull from remote repo to make sure we have the latest changes
git pull
// 12) Need to fix the bug
git add store.rb
git commit -m "Fix store bug"
git add product.rb
git commit -m "Fix Product"
// 13) Then we need to push those changes back up to th master remote
git push
// 14) Now that the bugs were fixed we move back to our admin branch to continue working on our features
git checkout admin
// 15) we finish our changes then checkout master
git checkout master
// 16) then we merge our admin changes to master
git merge admin
// 17) Then we are given a Vi to edit commit messages. TODO: How to switch to vim
// This is git asking you "i made this commit message becuase i see what you are trying to do, 
// but if you want to be more specific please modify this message"
// if you want to change the commit message or not, you need to then save and quit:
// type this in vi to save and quit:
:wq
// Since we merged two branchs with two sets of changes, git had to do a recursive merge. Git automatically creates a commit at the 
// point where the two branches were merged. It doesn't contain any files, but it says "at this point master and admin became one branch"
// 18) look at your log to see if git created a commit for the merge
git log



// LEVEL 4

// What is the "origin/master" branch
// its a branch we have in our local repo
// It;s our remote branch
// origin/master branch is update when wer run git fetch or git pull

// What does git fetch do?
// It fetches(or synch) our local repositroy with the remote one
// It updates our branch "origin/master"
// But it doesn't merge origin/master branch with master, so it doesn't actually update any of our local code
git fetch

// What does pull do?
// It fetches(or synch) our local repositroy with the remote one
// It is like running a git fetch and then merging our origin/master branch with master
git pull


// What happens if you don't have the most up-to-date code because someone commited to the remote repository while you were working
// When you go to push to github, you get a rejected message, because the tip of his current branch is behind the remote branch
// How to fix:
// 1) pull the remote
git pull
// 2) The editor pops up and asks you if you want to make a different commit message
:wq
// 3) push your code
git push
// 4) Check the merge commands
git log

// TODO: Some people don't like the merge commit, so you can do rebase command, which we'll talk about later

// What if two people are working on the same file
// gregg commited changes locally and jane commited and pushed changes to github
// So now we have two different commits but they are on the same file
//When gregg pulls, the merge was not successful becuase there is a conflict
git pull
// merge conflict happens
// when you run git status youwill see the conflict
git status
//When gregg opens the file that was different, he sees two different texts. One that is greggs head and one that is janes version
// Gregg needs to edit these files manually
// Then greggs commits the changes without a message
git commit -a //does this because it will boot him into an editor and give him a good commit message and list files. This is better
//then making own commit message
// Now gregg can push
git push


// Level 5: remote branches and tags

// What is a remote branch
// it's a branch on the remote repo that multiple people need to work on. For example, if more than one person is working on the admin features branch

// For any branches that will last more than a day, it smart to push the branch to your rem repo so you don't lose anything if
// your local code was to have a problem

// 1) create a shopping cart branch
git checkout -b shopping_cart
// 2) push the branch to github
git push origin shopping_cart // this links the local branch to the remote branch and start tracking it
// 3) make changes on branch
git add cart.rb
git commit -a -m "Add basic cart ability"
// 4) push branch changes
git push // BECAUSE it's a tracking branch, git knows to push the local shopping cart branch to the remote shopping cart branch
// if you now go to github, you will see the shopping_cart remote branch

//How does someone work on a remote branch:
// 1) Pull the repo
git pull
// 2) When they run git branch they wont see the remote branch, because this only shows local branches
git branch
// 3) View all the branches, including remote
git branch -r //she will now see the shopping_cart branch
// 4) checkout the shopping cart branch
git checkout shopping_cart // this is automatically setup as a tracking remote branch. So to push, you don't need to specify origin or branch
// 5) can now contribute and push
git add boom.txt
git commit -m "add boom file"
git push

// How to see all our remote branches and our local branch branches configured as a tracking branch, and other options
git remote show <remote_name> //exampel: git remote show origin
// This will also show us if any branches are out of date

// how to delete remote branch
git push origin :shopping_cart //this only deletes the remote branch, still need to remove the local branch
// Delete the local branch after deleting the remote branch:
git branch -d shopping_cart

// What if someone tries to push to a remote that doesn't exist anymore
// we need to remove all of those stale reference
git remote prune origin

// Heroku only deploys master branch
// Can not push branches to heroku
// How to push a branch to heoku and deploy it?
git push heroku-staging staging:master // This will push our staging branch to the heroku-staging master branch
//This links up our local staging branch and links it up with our remote master branch

// What are tags
// tags are reference to a specific commit
// people use it for release versioning.
// Good way to jump back to state code was at at a given time. When we have a good state of our code, we might give it a tag
// name

// How to list all tags
git tag

// How to checkout code at the tage (commit)
git checkout v0.0.1

// How to add a new tag
git tag -a v0.0.3 -m "version 0.0.3"

// How to push tags
git push --tags //this will push tags to remote. Otherwise tags would stay local



// LESSON 6: Rebase

// Merge isn't the best thing to do

// What does rebase do?
1) Moves all changes to master which are not in origin/master to a temporary area. So moves commits that are in master but not in origin master to a temporary area
2) run all origin/master commits.  One at a time
3) Then it runs all commits in the temporary area, one at a time

// In rebase there are no merge commits, it's just one after another after another

// Fetch the code from github
git fetch
// Rebase changes 
git rebase


// Rebase instead of MErge
// How to rebase if you have commits on both the master and branch that overlatp?
git checkout <branch>
git rebase master // this will first run the master commits than the admin commits
git checkout master
git merge admin // this will do a fast foreward

// Even if we run rebase we will still run into conflicts
// What if the readme file was edited both locally and remotely
git fetch
git rebase
// Whne you run this, there will be a conflict because the same file was edited
git status // you will seee you aren't on a bracnh, you are in the middle of a rebse
// Need to edit the readme file
git add README.txt
git rebase --continue //will continue to do the commits

//TODO: When to do a rebase and when to do a merge??



// LESSON 7: History and config

// What shows when you run git log?
// SHA hash: is the long number after commit
// Author and their email
// Date of commit
// Commit message

// How to colorize the log?
git config --global color.ui true

// YOu can also format the git log
git log --pretty=oneline //this will put each commit on one line, with the SHA then the commit message

// You can format the output of the log how you want it: check website

// How to see what lines were removed and what files were added?
git log --online -p //-p stands for patch

// How many insertions and deleted were made for each file included in each commit
git log --oneline --stat

// How to see log as a graph with visulations with branches and commits
git log --oneline --graph

// can specify a range of when you want to see logs from
git log --until=1.minute.ago // uses until
git log --since=1.day.ago
git log --since=1.hour.ago
git log --since=1.month.ago --until=2.weeks.ago
git log --since=2000-01-01 --until=2012-12-21

//Can also do the above ranges for git diff
git diff --until=1.minute.ago // uses until
git diff --since=1.day.ago
git diff --since=1.hour.ago
git diff --since=1.month.ago --until=2.weeks.ago
git diff --since=2000-01-01 --until=2012-12-21


//How to see what has changed since last commit
git diff

// How to see what a changed since a particular commit
git diff HEAD^
git diff ^^HEAD
git diff HEAD~5
git diff HEAD^..HEAD

//Can also see diff between two branches
git diff master bird // shows the diff of master and bird branch

// if you want to see the changes of each line of a particular file
git blame index.html --date short

//How to exclude a directory from our local repo commits:
// put the name of folder in the .git/info/exclude
git status //wont show you that file anymore

// NO one should ever include log files in a repository!!!
// put log files in the .gitignore file.
// git ignore file will ignore all files not in just your local, but everyone else in the remote repo

//Put this in your .gitignore file
logs/*.log
*/
git commit -m "Remove log files from repo"


// TODO: Stopped watching with 4 minutes left
// How to specify what file editor use during merge commit





















