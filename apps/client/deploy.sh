npm run build
if [$1 == 'dev']
then 
    echo "构建dev"
    scp -r ./dist web@175.178.22.166:/var/docker/data/nginx/live-front
else
    echo '构建测试'
    scp -r ./dist/*.* ./dist/** root@43.132.170.140:/home/data/saas-live-front 
fi