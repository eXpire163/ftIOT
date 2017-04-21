Install mosquitto on raspberry pi

https://learn.adafruit.com/diy-esp8266-home-security-with-lua-and-mqtt/configuring-mqtt-on-the-raspberry-pi


sudo apt-get update
//sudo apt-get upgrade
//sudo apt-get dist-upgrade
sudo apt-get install mosquitto mosquitto-clients python-mosquitto


sudo nano /etc/mosquitto/mosquitto.conf

max_queued_messages 200
listener 1883
allow_anonymous true

sudo /etc/init.d/mosquitto restart






http://www.xappsoftware.com/wordpress/2015/05/18/six-steps-to-install-mosquitto-1-4-2-with-websockets-on-debian-wheezy/comment-page-1/

new install:
1. 
sudo apt-get update
sudo apt-get install build-essential python quilt devscripts python-setuptools python3
sudo apt-get install -y libssl-dev
sudo apt-get install -y cmake
sudo apt-get install -y libc-ares-dev
sudo apt-get install -y  uuid-dev
sudo apt-get install -y daemon

2.
wget https://libwebsockets.org/git/libwebsockets/snapshot/libwebsockets-2.2.1.tar.gz
tar zxvf libwebsockets-2.2.1.tar.gz
cd libwebsockets-2.2.1.tar.gz
mkdir build
cd build
cmake ..
make install
ldconfig
cd

3.

wget http://mosquitto.org/files/source/mosquitto-1.4.11.tar.gz
tar zxvf mosquitto-1.4.11.tar.gz
cd mosquitto-1.4.11

