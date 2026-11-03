# Command: create-project

## Передумови

Запущена команда `git-init`.

## Дії

Викликати skill `project-scaffold` для створення базової структури проєкту "Hello World" на JavaScript.

## Очікуваний результат (файли)

Створено файл `src/index.js` та `package.json`.

## Команди перевірки

- Перевірити наявність `src/index.js` і `package.json`.
- Перевірити коректність JSON у `package.json`.
- Запустити `node src/index.js`.

## Повідомлення про помилку

"Помилка: Не вдалося створити базову структуру проєкту."
