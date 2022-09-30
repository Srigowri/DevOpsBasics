A cleaner workflow (alternate to merging)

Create new branch, make few commits
```
git checkout branch
git add .
git commit -m "first commit"
git add .
git commit -m "second commit"
```

Before rebasing to the master branch, make sure it is up-to date

```
git checkout master
git pull origin master
```

Move to the branch and rebase
```
git checkout branch
git rebase master
```

Move to the master branch (merge)
```
git checkout master
git checkout branch
```

Push changes to GitHub
```
git push orign master
```


```
When the commit history is different
git checkout master   
git branch main master -f    
git checkout main  
git push origin main -f 
```
