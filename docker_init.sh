echo "Stopping existing snaas-ui-react-dev container (if any)..."
docker container stop snaas-ui-react-dev
echo "Removing existing broker-ui-react-dev container (if any)..."
docker container rm snaas-ui-react-dev
echo "Removing snaas-ui-react image (if any)..."
docker image rm snaas-ui-react
echo "Building Dockerfile.dev image with tag 'snaas-ui-react'..."
docker build -f Dockerfile.dev -t snaas-ui-react .
