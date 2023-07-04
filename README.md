# AWS role switch - http sidecar

This is an example sidecar extension for [janstuemmel/aws-role-switch](https://github.com/janstuemmel/aws-role-switch). 

It's created due to debugging reasons for [aws-role-switch/issues/252](https://github.com/janstuemmel/aws-role-switch/issues/252). It sends a message containing an example config to aws-role-switch at startup. 

When sidecar extensions are supported on aws-role-switch this extension could get configs from http resources and inject them into aws-role-switch. 

## Build

```sh
npm run build
npm run watch
```

That creates folders for firefox and chrome in `dist` directory containing the transpiled extension code. Import it via dev mode on chrome. 

## License

MIT
