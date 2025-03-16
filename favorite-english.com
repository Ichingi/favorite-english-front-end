server {
    listen 80;
    server_name favorite-english.com www.favorite-english.com;

    root /var/www/favorite-english.com;
    index index.php index.html index.htm;

    rewrite ^(.*/)?index\.php$ $1 permanent;

    if ($request_uri ~* ^/(.*)\.php$) {
        return 301 /$1;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}

server {
    listen 443 ssl;
    server_name favorite-english.com www.favorite-english.com;

    ssl_certificate /etc/letsencrypt/live/favorite-english.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/favorite-english.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /var/www/favorite-english.com;
    index index.php index.html index.htm;

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location / {
        try_files $uri $uri/ =404;
    }
}
