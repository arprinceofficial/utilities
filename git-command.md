- git config --global user.email "ashiqurr04@gmail.com"
- git config --global user.name "arprinceofficial"

## Stash or discard local changes
- To discard all local changes: git reset --hard
- If there are untracked files you can remove them: git clean -fd
- For pull in your branch: git pull

## Change the branch name and Delete the old branch
- Rename the Current Branch          : git branch -m new-branch-name
- Push the Renamed Branch to Remote  : git push origin -u new-branch-name
- Delete the Old Branch              : git push origin --delete old-branch-name
