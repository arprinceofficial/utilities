## https://www.freecodecamp.org/news/git-cheat-sheet/?ref=dailydev

- git config --global user.email "ashiqurr04@gmail.com"
- git config --global user.name "arprinceofficial"

## SSH Key Generate in Server
- ssh-keygen -t rsa -b 4096 -C "ashiqurr04@gmail.com"
- cat ~/.ssh/id_rsa.pub  => (view key created key)
- ssh -T git@github.com (Test SSH Connection)
- cd .ssh =>  (go to path for view ssh keys)
- cd ~/.ssh => (root directory ~/ and then next to .ssh)

## git clone PROBLEM
- 1. Ensure your SSH key is added to GitHub
cat ~/.ssh/arprince.pub

- 2. Confirm your ~/.ssh/config file
nano ~/.ssh/config

- Add this
```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/arprince (your ssh name)
```
- 3. Check the SSH agent
  eval "$(ssh-agent -s)"

- 4. Verify SSH connection to GitHub
ssh -T git@github.com

- 5. !!! If git clone has show permission denied !!!

- i) Set proper permissions for the SSH config file:
- chmod 600 ~/.ssh/config
- This sets the file permissions so that only the file's owner can read and write to it, which is required by SSH.

- ii) npm run generate => /node_modules/.bin/nuxt: Permission denied:
- chmod +x node_modules/.bin/nuxt

## Stash or Discard local changes
- To discard all local changes                     => git reset --hard
- If there are untracked files you can remove them => git clean -fd
- For pull in your branch                          => git pull

## Change the branch name and Delete the old branch
- Rename the Current Branch          => git branch -m new-branch-name
- Push the Renamed Branch to Remote  => git push origin -u new-branch-name
- Delete the Old Branch              => git push origin --delete old-branch-name

## Get the Git repository's name
- git remote show origin
