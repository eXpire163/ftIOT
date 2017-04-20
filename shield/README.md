Python
The Mosquitto Python module has been donated to the Eclipse Paho project. It can be installed using “pip install paho-mqtt” and there is documentation available at https://pypi.python.org/pypi/paho-mqtt

Existing users of the Mosquitto Python module should find it very easy to port their code to the Paho version.

 
import paho.mqtt.client as paho

client = paho.Client()