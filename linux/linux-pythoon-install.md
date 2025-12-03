## Update system
- sudo apt update
## Install Python & Install pip (Python package manager)
- sudo apt install python3 -y
- sudo apt install python3-pip -y
## Verify Installation
- python3 --version
- pip3 --version
## Install Multiple Python Versions (Advanced) Ex. Python 3.11 / 3.12
## 01. Add PPA
- sudo add-apt-repository ppa:deadsnakes/ppa
- sudo apt update
## 02. Install specific version
- sudo apt install python3.12 python3.12-venv python3.12-dev
## Set Python Default Version (Optional)
- sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1
- sudo update-alternatives --config python
