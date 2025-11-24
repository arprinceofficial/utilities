# Add PPA for PHP
- sudo apt install software-properties-common
- sudo add-apt-repository ppa:ondrej/php
- sudo apt-get update
# Install Php's
- sudo apt install php5.6
- sudo apt install php7.1
- sudo apt install php7.2
- sudo apt install php7.3
- sudo apt install php7.4
- sudo apt install php8.0
- sudo apt install php8.3

# After Php Install XML extensions (Debian/Ubuntu) => example for 7.4:
- sudo apt update
- sudo apt install php7.4-xml

# List All Installed PHP Versions
- update-alternatives --list php     OR     ls -l /usr/bin/php*
# Switch Between PHP Versions
- sudo update-alternatives --config php
# Check php version that now running
- php -v


# Install PHP 8 Packages That You Need Example
- sudo apt install php8.0-common php8.0-mysql php8.0-xml
# Enable PHP 8 and Restart Your Apache
- sudo a2dismod php8.2
- sudo a2enmod php8.0
