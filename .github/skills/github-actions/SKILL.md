# Skill: github-actions

## Призначення

Створення конфігурації GitHub Actions для автоматичного тестування проєкту на Windows, Linux та macOS.

## Вхідні дані

- Проєкт із `package.json`, `package-lock.json`, `ci.bat` та `ci.sh`.
- Гілки `develop` і `master` для запуску перевірок.

## Дії

1. Створити або оновити `.github/workflows/ci.yml`.
2. Налаштувати запуск workflow на події `push` і `pull_request` у гілки `develop` та `master`.
3. Створити одну job із matrix для `ubuntu-latest`, `windows-latest` та `macos-latest`.
4. Додати кроки checkout і setup-node.
5. Додати два умовні кроки запуску: `ci.bat` із `shell: cmd` для Windows і `bash ci.sh` із `shell: bash` для Linux та macOS. Не використовувати `matrix` у полі `shell`.

## Очікуваний результат

Коректний YAML-файл `.github/workflows/ci.yml` з однією job, матрицею трьох ОС і запуском відповідного CI-скрипту без окремих кроків встановлення залежностей або тестування у workflow.

## Перевірки

- Перевірити синтаксис YAML і наявність тригерів `push` та `pull_request` для `develop` і `master`.
- Переконатися, що matrix містить усі три ОС.
- Переконатися, що Windows запускає `ci.bat` через `cmd`, а Linux/macOS запускають `bash ci.sh`.
- Переконатися, що `ci.bat` і `ci.sh` завершуються з ненульовим кодом у разі помилки.

## Типовий сценарій помилки

Невалідний YAML, неправильна назва CI-скрипту або відсутня ОС у matrix. GitHub Actions також відхилить workflow, якщо контекст `matrix` використано в полі `shell` (наприклад, `shell: ${{ matrix.shell }}`). Дія: використовувати фіксовані `shell: cmd` і `shell: bash` у двох кроках із умовами на `runner.os`, повідомити про конкретну помилку конфігурації та виправити відповідний файл.
