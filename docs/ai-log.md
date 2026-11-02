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

## 2. Помилка середовища: npm не знайдено

**Запит:** @workspace Виконай команду check.
**Відповідь AI:** Перевірку виконано частково. Файли наявні, CI-матриця містить 3 ОС, але npm install і npm test не виконано: npm не знайдено в PATH. Файли не змінено.
**Рішення:** Встановлено Node.js, термінал VS Code змінено на PowerShell, перевірено node -v / npm -v.

## 3. Навмисна помилка в коді

**Ситуація:** У src/index.js замінено `+` на `-` у функції add.
**Запит:** @workspace Прочитай .github/prompts/check.prompt.md і виконай команду check.
**Відповідь AI:** npm test не пройшов: очікувалося add(2, 2) === 4, отримано 0. Причина — віднімання у функції add.

## 4. Виправлення через AI

**Запит:** @workspace Команда check показала, що тест add(2, 2) === 4 падає. Знайди причину в src/index.js і виправ функцію add. Не змінюй тести.
**Відповідь AI:** Оператор `-` замінено на `+`. Тести не змінювались.
**Рішення:** Diff переглянуто та прийнято.

## 5. Повторна перевірка

**Запит:** @workspace Повторно виконай команду check.
**Відповідь AI:** Команду check виконано успішно, усі перевірки пройдено.

## 6. Приведення CI у відповідність до методички

**Запит:** @workspace Ти — Build Engineer AI-агент (.github/agents/build-engineer.agent.md). За методичкою ci.yml повинен лише запускати скрипти ci.bat (Windows) та ci.sh (Linux/macOS), які самі встановлюють залежності і запускають тести. Зроби таке: 1. Онови .github/skills/github-actions/SKILL.md: workflow запускається на push і pull_request у гілки develop та master; одна job з matrix ubuntu-latest, windows-latest, macos-latest; кроки — checkout, setup-node, запуск ci.bat (shell: cmd) на Windows або bash ci.sh на Linux/macOS. Збережи розділи: призначення, вхідні дані, дії, очікуваний результат, перевірки, типовий сценарій помилки. 2. Створи в корені репозиторію ci.bat і ci.sh: npm ci, потім npm test, завершення з ненульовим кодом при помилці. 3. Створи .gitattributes з правилами "_.sh text eol=lf" та "_.bat text eol=crlf". 4. Онови .github/workflows/ci.yml відповідно до оновленого skill. 5. Онови .github/prompts/create-actions.prompt.md: очікувані файли — ci.yml, ci.bat, ci.sh. 6. У tests/index.test.js перейменуй describe на "BasicAddition", перевірки не змінюй. 7. Після цього виконай команду check.
**Відповідь AI:** Оновлено skill github-actions, створено ci.bat, ci.sh і .gitattributes, ci.yml тепер лише запускає ці скрипти, тест перейменовано на BasicAddition. Команда check виконана успішно.
**Рішення:** Файли переглянуто, для ci.sh перевірено кінці рядків LF. Зміни прийнято. GitHub Actions пройшли на трьох ОС.
