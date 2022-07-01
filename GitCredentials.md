Cache credentials

```
git config --global credential.helper cache
```

Deleting cache
```
git config --global --unset credential.helper
git config --system --unset credential.helper
git config --local --unset credential.helper
```
