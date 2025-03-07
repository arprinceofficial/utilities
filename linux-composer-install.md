# Update System Packages
- sudo apt update && sudo apt upgrade -y
# Install Required Dependencies
- sudo apt install php-cli unzip curl -y
# Download and Install Composer
- curl -sS https://getcomposer.org/installer | php
# Move Composer to a Global Location
- sudo mv composer.phar /usr/local/bin/composer
# Verify Installation
- composer -V


# Install Required PHP Extensions (If Error on composer install)
- sudo apt install php8.4-xml -y
- sudo apt install php8.4-simplexml -y
# Verify Extensions Are Installed
- php -m | grep -E 'xml|dom|simplexml'
# Restart PHP and Web Server (If Needed)
- sudo systemctl restart apache2 # If using Apache
- sudo systemctl restart php8.4-fpm  # If using PHP-FPM
