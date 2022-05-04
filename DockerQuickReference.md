1. Docker start containers:
```
docker start <container_id>
```
2. Docker pull and start containers:
```
docker run <image_id>:[tag] --name <container_name>
```
3. Docker pull image
```
docker pull <image_id>:[tag]
```
4. Docker List Running Containers
```
docker ps
```
5. Docker List Running and Stopped Containers
```
docker ps -a
```
6. Running container in detach mode
```
docker run -d <image_id>:[tag] --name <container_name>
```
------------------------
7.PORTS:
The docker containers can have same port numbers, but they should be bound to different ports of the host machine. And, if you don't bind the multiple versions of the same image to ports, the applications are inaccessible.
So, bind the container port to host port using the run command.

```
docker run -p <host_port>:<container_port> --name <container_name> <image_id>:[tag]
```
8. Debugging: check logs
```
docker logs <container_id>
docker logs <container_name>
docker logs <container_name> --since 60m
```
9. Networks
Containers within the same network can communicate with just using the name of the containers.
If the images are within the same docker file, a common network is automatically created.
```
docker run -p <host_port>:<container_port> --net <network_name> <image_name> --name <container_name> -d
```

