# pomodoro
Es solo un pomodoro de tareas rosa, con reloj y lista de tareas :) a mi me gusto mucho. Usa electron

## no olvides
Para los archivos package, package-lock y nodemodules se crea con:

npm init -y

npm install electron --save-dev

Ahora, para que corra correctamente revisar el package que este:

- "start": "electron .”      #en lugar de el test
- "main": "main.js",         # en lugar del index.js

Y se corre con:

npm start
