#/bin/bash
CONTAINER_ID=$(docker ps | grep client_1 | cut -d' ' -f1)
docker exec -it $CONTAINER_ID npx @api-platform/client-generator http://api src/ --generator vue
