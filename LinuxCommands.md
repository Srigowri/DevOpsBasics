Shell exposes the OS to the US. It takes user's comnads and hands it over to the OS to perform action. 
Terminal is just the application runs the shell. [Bash, Fish, ZSH shells]

<!-- 1. Create a folder with 52 folders corresponding to 52 weeks of the year to maintain your weekly meals -->
```
mkdir MEALS
cd MEALS
touch Week{1..52}.txt
```
<!-- 2. Find the text files that were modified less than 20 minutes ago -->
```
iname for case insensitive
find . -type f -iname "*.txt" -mmin -20
```
<!-- 3: Find the directorys that were modified more than 15 minutes ago -->
```
find -type d -mmin +15
```
