Shell exposes the OS to the US. It takes user's comnads and hands it over to the OS to perform action. 
Terminal is just the application runs the shell. [Bash, Fish, ZSH shells]

**1. Create a folder with 52 folders corresponding to 52 weeks of the year to maintain your weekly meals**
```
mkdir MEALS
cd MEALS
touch Week{1..52}.txt
```
**2. Find the text files that were modified less than 60 minutes ago and more than 15 minutes ago**
```
iname for case insensitive
find . -type f -iname "*.txt" -mmin -60 -mmin +15
```
**3: Delete all files with '.xxx' extension
```
find . -type f -iname '*.xxx' -exec rm -rf {} + 
```
other options: -size(filesize), -perm(for permission), -mtime (for days), -maxdepth

