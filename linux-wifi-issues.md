# check status
- sudo lshw -class network -short && nmcli device status
# Solution: changed the value from 3 to 2 or 1
- sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
