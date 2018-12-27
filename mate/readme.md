whats running on django
```
/home/mate⟫ ps -aux | grep guni
mate     17803  0.0  0.7  88272 14484 ?        Ss   Dec23   1:42 /home/mate/Envs/lithopia/bin/python3.7 /home/mate/Envs/lithopia/bin/gunicorn --access-logfile - --workers 3 --bind unix:/run/gunicorn.sock lithopia_server.wsgi:application
```

```
/home/mate⟫ locate lithopia_server
/etc/nginx/sites-available/lithopia_server
/etc/nginx/sites-enabled/lithopia_server
/home/mate/lithopia/lithopia_server
```
```
$cat /etc/nginx/sites-available/lithopia_server
server {
    listen 8000;
    server_name anonette;
    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/mate/lithopia/lithopia_server/lithopia_server;
    }
    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

### How To Restart ?
