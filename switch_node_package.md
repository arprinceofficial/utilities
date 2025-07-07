## npm to yarn
```bash
npm install -g yarn
corepack enable
rm package-lock.json
yarn install
```

## yarn tp npm
```bash
rm -rf .yarn
rm .yarnrc.yml
rm .pnp.cjs
rm .pnp.loader.mjs
rm yarn.lock
npm install
```
