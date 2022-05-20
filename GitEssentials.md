All the history is maintained in the hidden directory .git which is created when you do "git init"

Making contribution to Open Source
1. Fork an open-source project into your repo 
2. git clone <url>
  
  By default the URL is referred by origin and the branch is main
  
3. Do not make changes directly to your main branch, create a branch
  git branch -b gowri-feature    
  git checkout gowri-feature     
  (same as git checkout -b gowri-feature)    
  The head now points to this branch
  
4. Make the developments you want, add changes or updates
  git add .    
  git commit -m "adding emotional support"  
  
5. Push the changes to the branch    
  git push origin gowri-feature    
The maintainer of the upstream repository (the repository you forked it from, will receive a pull request). He can manually check the commits and merge to the main branch of the repository
[I can delete certain commits by resetting to one of the hash values]
  
  git logs    
  git reset <hashvalue>    
  git push origin gowri-feature -f    
  [you need to force commit]    
6. Once the upstream repo is updated with your commits, your own main branch is behind in those commits.    
  You can either fetch upstream which will pull the changes from upstream or you can do the following commands:    
  git checkout main     
  git status [you will not see fresh status, but don't be fooled. Your main branch is behind the upstream commits]    
  git fetch --all --prune    
  [prune will get even the deleted commits]    
  git reset --hard upstream/main    
  (this will reset the main branch of your repo to the main branch of upstream)    
  git log    
  git push origin master    
  
7. git push origin master (you got to update your main)
  -------------------------------
  ```
git init 	
git add .
git status
git commit -m "message"
git remove --staged <filename>
git log
git reset <hashvalue>
git log (you will not see the commits as they are now in unstaged area)

(make and keep changes without commiting it to the history)
make changes to your files, stash them
git stash
git status (this will be clean)
git stash apply ( git stash pop will apply and drop the changes)
git stash clear (discard the changes)


attaching the git repository on your system to a URL.
Create a repository and get the URL on github

git remote add origin <url>
(remote indicates your are providing an URL)
(add - adding a new url)
(origin - name of the url)

git remote -v 
(get all the url associated with that url)

git push origin master
(push the commits to origin and the branch master)

(why do you need a branch)
(resolving any bugs require that you create a new branch, make changes and merge to the master)
(never commit to the main/master branch, because in most of the oss projects, people are using the main branch, without the commit being finalized it is not correct to commit to the main branch)

make a new branch

git branch feature
git checkout feature (head is pointing to the feature, any future commits are done to the feature branch)
  ```
  --------------------------------
  
