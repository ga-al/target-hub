# Target Hub — dashboard demo (portfolio)

Статичное демо личного кабинета SaaS-сервиса для таргетологов: sidebar, topbar, формы, кастомные dropdown, таблицы, адаптив. Без бэкенда и без реальной отправки форм.

**Live demo:** https://ga-al.github.io/target-hub/

## Стек

- HTML5
- CSS3 (custom properties, flex, media queries)
- Bootstrap 5
- Vanilla JavaScript (кастомный dropdown с поиском)

## Страницы демо

| Страница | Описание |
|----------|----------|
| [index.html](index.html) | Автовыгрузка лидов — форма + таблица выгрузок |
| [target.html](target.html) | VK-отчёт — многошаговая форма, чекбоксы метрик |
| [report-2.html](report-2.html) | Просмотр отчёта — адаптивная таблица |

## Структура

```
├── index.html
├── target.html
├── report-2.html
├── css/style.css
├── js/main.js
├── img/          (logo, avatar, favicon — SVG)
└── libs/bootstrap/
    ├── css/bootstrap.min.css
    └── js/bootstrap.bundle.min.js
```

## Примечание

Данные в таблицах и формах — демо-заглушки.
