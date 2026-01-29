## Step 1: Create the Nginx config file
```bash
sudo nano /etc/nginx/sites-available/arprince.me
```
## Step 2: Paste this basic server config
```bash
server {
    listen 80;
    server_name arprince.me www.arprince.me;

    root /var/www/arprince.me;
    index index.html index.htm index.php;

    access_log /var/log/nginx/arprince.me.access.log;
    error_log  /var/log/nginx/arprince.me.error.log;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
## Step 3: Create the website directory
```bash
sudo mkdir -p /var/www/arprince.me
```
```bash
 sudo chown -R www-data:www-data /var/www/arprince.me
```
```bash
sudo chmod -R 755 /var/www/arprince.me
```
# Step 4: Test File
```bash
echo "<h1>arprince.me works!</h1>" | sudo tee /var/www/arprince.me/index.html
```
## Step 5: Enable the site
```bash
sudo ln -s /etc/nginx/sites-available/arprince.me /etc/nginx/sites-enabled/
```
## Step 6: Test & reload Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```
## Step 7: Install SSL (auto HTTPS)
```bash
sudo certbot --nginx -d arprince.me -d www.arprince.me
```
