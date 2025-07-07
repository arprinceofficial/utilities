## npm to yarn
```bash
npm install -g yarn
corepack enable
rm package-lock.json
yarn install
```

## npm to pnpm
```bash
npm install -g pnpm
corepack enable
corepack prepare pnpm@latest --activate
rm package-lock.json
pnpm install
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

## yarn tp pnpm
```bash
rm -rf .yarn
rm .yarnrc.yml
rm .pnp.cjs
rm .pnp.loader.mjs
rm yarn.lock
npm install -g pnpm
corepack enable
corepack prepare pnpm@latest --activate
pnpm install

```
