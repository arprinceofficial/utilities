# Nginx Setup on Ubuntu

This guide walks you through installing and configuring **Nginx** on **Ubuntu**, from zero to production-ready.

---

## 1. Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

Check status:

```bash
nginx -v
sudo systemctl status nginx
```

---

## 2. Nginx Directory Structure

```
/etc/nginx/
├── nginx.conf
├── sites-available/
├── sites-enabled/
├── conf.d/
└── snippets/
```

- `sites-available` → all site configs
- `sites-enabled` → active sites (symlinks)

---

## 3. Create Website Root Directory

```bash
sudo mkdir -p /var/www/example.com
sudo chown -R www-data:www-data /var/www/example.com
sudo chmod -R 755 /var/www/example.com
```

Test file:

```bash
echo "<h1>Nginx is working</h1>" | sudo tee /var/www/example.com/index.html
```

---

## 4. Create Server Block

```bash
sudo nano /etc/nginx/sites-available/example.com
```

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/example.com;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 5. Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

---

## 6. Test and Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. Reverse Proxy (Node.js Example)

```nginx
location / {
    proxy_pass http://127.0.0.1:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

---

## 8. SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d example.com -d www.example.com
```

Test renewal:

```bash
sudo certbot renew --dry-run
```

---

## 9. Large File Upload Support

```nginx
client_max_body_size 5G;
client_body_timeout 1h;
send_timeout 1h;
proxy_request_buffering off;
```

---

## 10. Firewall Configuration

```bash
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 11. Useful Commands

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo systemctl status nginx
```

---

## 12. Logs

```bash
/var/log/nginx/access.log
/var/log/nginx/error.log
```

---

## Request Flow

```
Client → DNS → Nginx → Server Block → Location → App / Files
```

---

**Done 🎉**

You now have a full Nginx setup on Ubuntu.
