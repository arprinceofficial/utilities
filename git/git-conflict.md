##  Step 1: Fetch and Merge Remote Changes (Run the following command to fetch and merge the latest changes from GitHub, If there are no conflicts, it will reapply your changes on top of the updated branch.)
```bash
git pull origin main --rebase
```
##  Step 2: Push Your Changes
```bash
git push origin main
```
## If You Encounter Merge Conflicts (Git will show which files have conflicts—open and resolve them manually, After resolving, run)
```bash
git add .
```
```bash
git rebase --continue
```
## Finally, push the fixed branch
```bash
git push origin main
```
