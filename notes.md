Login:

```
npm login --scope=wiremock-inc --auth-type=legacy --registry=https://npm.pkg.github.com
```

Init:

```
nvm use 20
npm i
```

Publish:

```
npm publish --scope=wiremock-inc --registry=https://npm.pkg.github.com
```

.npmrc:

```
@wiremock-inc:registry=https://npm.pkg.github.com
```

add to package.json:

```
"name": "@wiremock-inc/apimatic-sdkgen-demo",
"repository": "github:wiremock-inc/apimatic-sdkgen-demo",
```