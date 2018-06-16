docker container stop snaas-ui-react-dev
docker container rm snaas-ui-react-dev
docker run -t -i --name snaas-ui-react-dev -v `pwd`:/snaas-ui-react -p 3000:3000 snaas-ui-react npm start
