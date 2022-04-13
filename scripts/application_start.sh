#!/bin/bash

# Stop all servers and start the server as a daemon
forever stopall
forever start /home/ec2-user/nest-mongo-ec2-env/dist/main.js