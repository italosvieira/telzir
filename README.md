# Code Challange

# Bootstrap
Para rodar a aplicação de forma rápida pode só rodar um docker-compose up na pasta raiz do projeto.
Isso vai rodar o frontend, backend e banco do mongo já com seed.
```
docker-compose up
```

Ele vai subir o fronend, backend e o banco mongo.

# Front-end
Frontend é um projeto [angular](https://angular.io). Para instalar as dependências:
```
npm i
```

Para rodar o projeto em modo dev:
```
npm start ou ng serve
```

Caso tenha algum problema com o ng é necessário instalar o [angularcli](https://cli.angular.io).
Como é meio chato ficar subindo banco eu fiz o front de forma que caso o backend não retorne dados ele usa um mock em memória.

# Back-end
Backend é um projeto node com [nestjs](https://nestjs.com). Para instalar as dependências:
```
npm i
```

Para rodar o projeto em modo dev:
```
npm start
```
