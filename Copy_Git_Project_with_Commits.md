## 1. Clone a Repository from another Repository
- git clone git@github.com:Username-1/test-project-1.git
## 2. Fetch All Branches
- git fetch --all
## 3. To see all branches, both local and remote
- git branch -a
## 4. Now checkout those branches that you want to add to your Repository
- git checkout ashiq
## 5. Remove the Old Remote Origin
- git remote remove origin
## 6. Add a New Remote Origin
- git remote add origin https://github.com/Username-2/test-project-2.git
## 7. Push to the New Repository
- git push --all origin or (git push -u origin main)
