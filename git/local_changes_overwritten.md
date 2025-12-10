##  Option 1: Keep your changes (commit them)
```bash
- git add public/js/utils/config/config.js
- git commit -m "Save config updates"
- git pull

```
##  Option 2: Temporarily hide your changes (stash them)
```bash
- git stash
- git pull
- git stash pop

```

##  Option 3: Discard your changes (reset the file)
```bash
- git restore public/js/utils/config/config.js
# or old way:
# git checkout -- public/js/utils/config/config.js
- git pull

```
