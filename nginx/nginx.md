# Open your Nginx site config
- sudo nano /etc/nginx/sites-available/dev.folderName.com
# Change the port number 
- proxy_pass http://127.0.0.1:3000 to proxy_pass http://127.0.0.1:30331 (your pm2 log port)
# Test Nginx config
- sudo nginx -t
# Reload Nginx
- sudo systemctl reload nginx
# Check firewall (sometimes blocks local ports)
- sudo ufw status
# Verify app directly (VERY IMPORTANT)
- curl http://127.0.0.1:30331
# If still 502 → check Nginx error log
- sudo tail -n 50 /var/log/nginx/error.log
