# Target Hub — dashboard demo (portfolio)

Статичное демо личного кабинета SaaS-сервиса для таргетологов: sidebar, topbar, формы, кастомные dropdown, таблицы, адаптив. Подготовлено для портфолио — без бэкенда и без реальной отправки форм.

> **Публикация:** в публичный репозиторий включайте только страницы `index.html`, `target.html`, `report-2.html`. Файлы `target-hub.html`, `oferta.html`, `terms_of_use.html`, `privacy_policy.html` содержат данные заказчика — не выкладывайте без его согласия.

## Стек

- HTML5
- CSS3 (custom properties, flex, media queries)
- Bootstrap 5
- Vanilla JavaScript (кастомный dropdown с поиском)

## Страницы демо

| Файл | Описание |
|------|----------|
| `index.html` | Автовыгрузка лидов — форма + таблица выгрузок |
| `target.html` | VK-отчёт — многошаговая форма, чекбоксы метрик |
| `report-2.html` | Просмотр отчёта — адаптивная таблица |

## Структура

```
├── index.html
├── target.html
├── report-2.html
├── css/style.css
├── js/main.js
├── img/
└── libs/bootstrap/
```

## Запуск локально

Откройте `index.html` в браузере или поднимите статический сервер:

```bash
npx serve .
```

## Примечание

Данные в таблицах и формах — демо-заглушки. Логотипы и аватар — SVG-плейсхолдеры для портфолио.
