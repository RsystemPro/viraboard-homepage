echo -e '\033[32m -------------------------------------- \033[32m'
echo -e "\033[32m Please choose an option: \033[32m"
echo -e '\033[32m -------------------------------------- \033[32m'
echo -e "\033[32m 1. ReBuild Docker \033[32m"
echo -e "\033[32m 3. Remove Docker \033[32m"
echo -e "\033[32m 4. Exit \033[32m"

read -p "Enter your choice [1-4]: " choice

case $choice in
  1)
    echo -e "\033[36mReBuildimg Docker... \033[36m"
    docker rm -f viraboard-homepage-container
    docker rmi viraboard-homepage-image
    docker build -t viraboard-homepage-image .
    docker-compose up -d --build
    docker logs -f viraboard-homepage-container
    ;;
  2)
    echo -e "\033[36m Removing... \033[36m"
    docker rm -f viraboard-homepage-container
    docker rmi viraboard-homepage-image
    echo -e "\033[37m Done."
    ;;
  3)
    echo -e "\033[36m Exiting... \033[36m"
    exit 0
    ;;
  *)
    echo -e "\033[37m Invalid choice. Please enter a number between 1 and 4. \033[37m"
    ;;
esac
