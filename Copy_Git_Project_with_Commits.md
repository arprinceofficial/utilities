## 1. Steps to Copy a GitHub Repository with Commits
- git clone git@github.com:Username/test-project.git
## 2. Fetch All Branches
- git fetch --all
## 3. To see all branches, both local and remote
- git branch -a
## 4. Now checkout those branches that you want to add to your repo
- git checkout ashiq
## 5. Remove the Old Remote (Optional)
- git remote remove origin
## 6. Add a New Remote (Optional)
- git remote add origin https://github.com/Username/test-project.git
## 7. Push to the New Repository
- git push -u origin main / git push --all origin
