## Misc Commands

```bash
# update Angular to 5.0.0
david

# migrate code to Angular 5
ng update @angular/cli --migrate-only --from=5.0.0

yarn install
#yarn add typescript@">=3.1.1 and <3.3.0"
ng serve --open

time docker build -t garystafford/angular-observe:1.6.5 . --no-cache
# 2.19s user 1.96s system 0% cpu 9:26.70 total

docker push docker.io/garystafford/angular-observe:1.6.5

docker run -p 80:80 garystafford/angular-observe:1.6.5
```

```shell
npm update david -g
david
david update
npm install
ng build --configuration=docker
```
