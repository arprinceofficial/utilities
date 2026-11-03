# Supervisor Configuration Guide for Laravel Queue Workers

A quick reference guide for creating, updating, and managing background worker processes using Supervisor on Ubuntu/Debian servers.

## 1. Check the Status of Managed Processes

Run this command to check all currently managed Supervisor processes and their status:

```bash
sudo supervisorctl status
```

## 2. View Existing Configurations

List all current configuration files in the Supervisor directory:

```bash
ls /etc/supervisor/conf.d/
```

## 3. Create a New Configuration File

### Step 1: Open Nano Editor

Create and edit a new `.conf` file for your worker:

```bash
sudo nano /etc/supervisor/conf.d/my-new-worker.conf
```

### Complete Production Configuration Template

Paste the following template into the editor and update the paths to match your project. This includes log rotation settings (`stdout_logfile_maxbytes` and `stdout_logfile_backups`) to prevent log files from taking up all disk space.

```ini
[program:my-new-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/your-new-app/artisan queue:work --queue=emails,default --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/html/your-new-app/storage/logs/worker.log
stdout_logfile_maxbytes=10MB
stdout_logfile_backups=5
stopwaitsecs=3600
```

### Real-World Example (Production / Dev Laravel Worker)

Here is a production-ready example configured for standard web permissions (`www-data`), log management, and graceful process handling:

```ini
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
stdout_logfile_maxbytes=10MB
stdout_logfile_backups=5
stopwaitsecs=3600
```

---

## 4. Apply Changes and Start Process

Whenever you add or change a file in `conf.d/`, you must explicitly tell Supervisor to look for new configurations and update its process pool.

### Step A: Reread Configurations

Scan the configuration directory for updates or new files:

```bash
sudo supervisorctl reread
```

*Expected output:* `my-new-worker: available`

### Step B: Update Process Groups

Activate the newly discovered configurations and start the worker processes:

```bash
sudo supervisorctl update
```

*Expected output:* `my-new-worker: added process group`

### Step C: Confirm Status

Verify that your new worker process is actively running:

```bash
sudo supervisorctl status
```

---

## 5. Daily Operations & Deployment Commands

### Restarting Workers (After Code Deployments)

When you deploy new code, you must restart the queue worker so it runs the latest version of your application:

```bash
sudo supervisorctl restart my-new-worker:*
```

### Stopping Workers

To temporarily stop a worker process safely:

```bash
sudo supervisorctl stop my-new-worker:*
```

### Viewing Real-Time Logs

To stream the live stdout log of a worker for debugging:

```bash
sudo supervisorctl tail -f my-new-worker
```
