<ul>
  <li> amending </li>
  <li> rewording commits </li>
  <li> deleting commits </li>
  <li> reordering commits </li>
  <li>  squashing commits</li>
  <li>  splitting commits</li>
<ul>
 

Rewriting history by squashing (related to a feature, smaller commits, related to a bug or when there is no need for the different commits to be on their own)

```
(act and operate on the last three commits of the head)
git rebase -i HEAD~3 

change commit to squash (for the commits you want to squash)
```
