# Step 1: Install Apache Web Server
- sudo apt update
- sudo apt install apache2 -y
# Enable and Start Apache
- sudo systemctl enable apache2
- sudo systemctl start apache2
- Verify Apache is Running => http://localhost/
# Step 2: Install PHP (If Not Installed)
- sudo apt install php libapache2-mod-php php-cli php-mysql -y
- php -v
# Step 3: Install MySQL Server (If Not Installed)
- sudo apt install mysql-server -y
- sudo mysql_secure_installation
# Step 4: Install phpMyAdmin
- sudo apt install phpmyadmin -y
- 1. During Installation:
  2. It will ask "Configure database for phpmyadmin with dbconfig-common?" → Select Yes.
  3. Enter the MySQL root password when prompted.
  4. Select Apache2 when asked for the webserver.
# Step 5: Configure Apache to Use phpMyAdmin
- 1. Manually Create a Symlink => sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
  2. Restart Apache => sudo systemctl restart apache2
# Step 6: Access phpMyAdmin
- Now, open http://localhost/phpmyadmin/ in your browser.
  Username: root
  Password: (The password set during MySQL installation)

# Troubleshooting phpMyAdmin Login Issues
- sudo mysql -u root -p
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
- FLUSH PRIVILEGES;
- sudo systemctl restart mysql
# Uninstall phpMyAdmin (If Needed)
- sudo apt remove --purge phpmyadmin -y
- sudo apt autoremove -y

# Enable Login Without Password in phpMyAdmin
- 1. sudo nano /etc/phpmyadmin/config.inc.php
  2. $cfg['Servers'][$i]['AllowNoPassword'] = true;
