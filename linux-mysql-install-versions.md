# Check Installed MySQL Version
- mysql --version    OR    mysqld --version
# List Installed MySQL Versions
- dpkg --list | grep mysql   OR   apt list --installed | grep mysql
# Manage Multiple MySQL Versions
- sudo apt install mysql-server-5.7
- sudo apt install mysql-server-8.0
- sudo apt install mysql-server-8.3
# Switch Between MySQL Versions
- sudo systemctl stop mysql  # Stop the currently running MySQL
- sudo systemctl start mysql@5.7  # Start MySQL 5.7
- sudo systemctl start mysql@8.0  # Start MySQL 8.0
# Run Different MySQL Versions on Different Ports
- 1. Edit the MySQL Configuration for a Specific Version => sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
  2. Change the port to avoid conflicts (ini) => port = 3307
  3. Restart MySQL Service => sudo systemctl restart mysql
# sudo systemctl status mysql
- sudo systemctl status mysql    OR     ps aux | grep mysql
