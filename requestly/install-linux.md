### 1. Download the App
```
https://requestly.com/downloads
```
### 2. Organize the File (move the file out of Downloads)
```
mkdir -p ~/Applications
mv ~/Downloads/Requestly-26.3.3.AppImage ~/Applications/
```
### 3. Create the App Shortcut
```
nano ~/.local/share/applications/requestly.desktop
```
### 4. Paste the Configuration
```
[Desktop Entry]
Name=Requestly
Comment=Network Interceptor and API Mocking
Exec=/home/ar-prince/Applications/Requestly-26.3.3.AppImage --no-sandbox
Icon=network-transmit
Terminal=false
Type=Application
Categories=Development;
```
### 5. Save and Exit
### 6. Refresh the Apps List:
```
update-desktop-database ~/.local/share/applications
```
