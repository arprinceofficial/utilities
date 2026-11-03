# 1. Check the Status of the Managed Processes

-sudo supervisorctl status

---

# 2. Existing Configuration

- ls /etc/supervisor/conf.d/

---

# 3. Create a new .conf file full process 
- sudo nano /etc/supervisor/conf.d/my-new-worker.conf

```bash 
[program:my-new-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/your-new-app/artisan queue:work
autostart=true
autorestart=true
user=root
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/html/your-new-app/storage/logs/worker.log
```
- Real Example 

```bash 
[program:accessimate-dev-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/dev-api.accessimate.com/artisan queue:work --queue=emails,default --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/html/dev-api.accessimate.com/storage/logs/dev-worker.log
stopwaitsecs=3600
```
```bash 
Whenever you add or change a file in conf.d/, you must explicitly tell Supervisor to look for new configurations and update its process pool.

Output should say: my-new-worker: available
```
- sudo supervisorctl reread

```bash 
Next, activate the new configuration.

Output should say: my-new-worker: added process group
```
- sudo supervisorctl update
```bash 
Confirm it is running
```
- sudo supervisorctl status



