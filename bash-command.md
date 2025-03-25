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
