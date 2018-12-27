whats runing on django
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
