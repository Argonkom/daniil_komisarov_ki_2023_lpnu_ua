# Command: create-actions

## Передумови

Проєкт має налаштовані скрипти для складання та тестування (виконано `create-build`).

## Дії

Викликати skill `github-actions` для генерації файлу `.github/workflows/ci.yml`.

## Очікуваний результат

Створено коректний YAML файл для GitHub Actions з матрицею ОС (Windows, Linux, macOS).

## Повідомлення про помилку

"Помилка: Не вдалося створити конфігурацію CI/CD."
