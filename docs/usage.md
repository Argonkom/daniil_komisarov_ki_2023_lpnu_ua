# Використання

## Запуск агента в Copilot Chat

Відкрийте репозиторій у VS Code та введіть у Copilot Chat:

```text
@workspace init
```

Для повторної перевірки вже налаштованого проєкту введіть:

```text
@workspace check
```

Команда `init` послідовно запускає `git-init`, `create-project`, `create-build`,
`create-actions` і `check`. Команда `check` перевіряє структуру проєкту,
встановлення залежностей, тести та CI workflow.

## Локальна перевірка

Виконуйте команди з кореня репозиторію.

### Встановлення залежностей

```bash
npm install
```

### Запуск тестів

```bash
npm test
```

### Запуск програми

```bash
npm start
```

### Запуск CI-скрипту Windows

У Windows Command Prompt або PowerShell:

```bat
ci.bat
```

Скрипт виконує `npm ci`, а потім `npm test`.

### Запуск CI-скрипту Linux/macOS

У Bash:

```bash
bash ci.sh
```

Скрипт виконує `npm ci`, а потім `npm test`, і завершується з ненульовим
кодом, якщо будь-яка команда завершилася помилкою.
