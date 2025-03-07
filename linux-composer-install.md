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
