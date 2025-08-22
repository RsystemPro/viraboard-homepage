docker rm -f viraboard-homepage-container
docker rmi viraboard-homepage-image
docker build -t viraboard-homepage-image .
docker-compose up -d --build
docker logs -f viraboard-homepage-container