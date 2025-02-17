## bash Linux command
- copy  => Ctrl+Shift+C
- paste => Ctrl+Shift+V
- cd => go to parent directory
- cd ../ => one step back directory
- ls => list files for current directory
- pwd => full path for current directory
- ls -la => see list of that directory

## Delete Operation
- rm fileName.exe => delete file
- rm -Rf folderName => (delete directory FORCE)
- rm -rf /path/to/directory   => (delete directory)
- rm -rf /path/to/directory/* => (delete all files)
- rm -d /path/to/directory/* => (delete directory)

## zip/unzip Operation
- zip -r <zipfilename.zip> <source_directory> => for zip a folder
- unzip project.zip => unzip
- unzip project.zip -d /path/to/extract => (If you want to extract the files into a specific directory)

## create folder
- mkdir folderName => (create folder)
- rm -r <directoryname> => (remove directory)

## move Operation
- mv -f (from->path/*) (to->path)
- mv /home/arprince/public_html/ecommerce/* /home/arprince/ecommerce/
- mv  source_directory/*  source_directory/.* destination_directory/
- mv source_directory/* source_directory/.[^.]* destination_directory/

## File Edit
- nano .htaccess
- crt + x => save and exit
- sudo chown -R www-data:www-data storage/
- php artisan serve --host=ecommerce.arprince.me
- npm run dev --host orange.emasbd.com

## SSH Key Github Clone
- ssh-keygen -C safaShop
- cat /home/arprince/.ssh/id_rsa.pub

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

## get history within one directory

- history | grep "your_directory"

## See the Live logs
- tail -f passenger.30011.log
- cat passenger.30011.log => (only print the logs)

## Copy and paste env
- cp ".env(example)" .env
- cp .env.example .env

## Copy ssh from local to server
- ssh-copy-id -i ~/.ssh/id_rsa.pub userName@ip_address
