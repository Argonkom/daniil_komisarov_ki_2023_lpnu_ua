# Журнал взаємодії з AI

## 1. Створення маніфесту та навичок

**Мій запит:**
@workspace Ти — Build Engineer AI-агент. Прочитай свій маніфест у файлі .github/agents/build-engineer.agent.md, щоб зрозуміти свою роль та обмеження. Після цього прочитай файл .github/prompts/init.prompt.md і виконай команду init.

Тобі потрібно послідовно виконати всі 5 кроків (git-init, create-project, create-build, create-actions, check), читаючи відповідні файли з папок .github/prompts/ та .github/skills/.

Згенеруй та створи всі необхідні файли (package.json, src/index.js, tests/index.test.js, .gitignore, .github/workflows/ci.yml).

**Відповідь AI:**
Команду init виконано послідовно:

git-init — перевірено Git-репозиторій і створено .gitignore.
create-project — створено:
package.json
src/index.js
create-build — додано Jest, npm-скрипти та тест:
tests/index.test.js
package-lock.json
create-actions — створено CI для Ubuntu, Windows і macOS:
.github/workflows/ci.yml
check:
усі необхідні файли існують;
Hello World успішно запускається;
npm install завершено успішно;
Jest: 1 test suite passed, 1 test passed;
CI-матриця містить ubuntu-latest, windows-latest, macos-latest.
Також залишено без змін попередні модифікації у prompt-файлах.

## 2. Виникнення та виправлення помилки

**Опис ситуації:** Під час перевірки локальних тестів я навмисно змінив знак `+` на `-` у файлі `index.js`, щоб перевірити реакцію агента.
**Мій запит:** `@workspace Виконай команду check.`
**Відповідь AI та рішення:**
Команда check завершилася помилкою на етапі npm test.

Результати:

Усі необхідні файли присутні.
npm install пройшов успішно.
Тест не пройшов:
очікується: add(2, 2) === 4;
отримано: 0.
Причина у src/index.js: функція використовує віднімання:

Перевірка CI-матриці не виконувалася, оскільки check зупиняється при першій помилці згідно з інструкцією.
Файли не змінював. Поточний Git-статус також містить незакомічені зміни в src/index.js і новий docs/ai-log.md.
