# k8s-istio-observe-frontend

_Project in Progress_

Angular 7 front-end UI application, part of a reference, microservices-based platform, designed to generate service-to-service, service-to-database (MongoDB), and service-to-queue-to-service (RabbitMQ) IPC (inter-process communication). Refer to the post, [Kubernetes-based Microservice Observability with Istio Service Mesh: Part 1](https://wp.me/p1RD28-6fL) and the GitHub project, [k8s-istio-observe-backend](https://github.com/garystafford/k8s-istio-observe-backend) for more information.

![preview](pics/preview2.png)
## Misc Commands

```bash
david # update Angular to 5.0.0

ng update @angular/cli --migrate-only --from=5.0.0

yarn install
yarn add typescript@">=3.1.1 and <3.3.0"
ng serve --open

time docker build -t garystafford/angular-observe:1.2.0 . --no-cache
docker run -p 80:80 garystafford/angular-observe:1.2.0

yes | docker system prune
```
