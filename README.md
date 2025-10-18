# vue-documents-app

## 🚀 Демо

**Live Demo:** [https://documents-app-production.up.railway.app/](https://documents-app-production.up.railway.app/)

## 📋 Функциональность

- 🔍 **Поиск документов** - интеллектуальный поиск с debounce
- 📄 **Просмотр документов** - детальная информация о выбранном документе
- 📥 **Скачивание документов** - генерация .txt файлов с содержимым
- 🗑️ **Удаление документов** - клиентское удаление документов с изображениями
- ⚡ **Индикация загрузки** - прелоадеры во время запросов
- 🎨 **Адаптивный дизайн** - Pixel-perfect по макету Figma

![Логотип](/doc/PP.jpg)
скрин Pixel-perfect соответствия

## 🛠 Технологии

- **Vue 3** (Composition API)
- **TypeScript** - строгая типизация
- **Pinia** - менеджер состояний
- **Vite** - сборка проекта
- **Docker** - контейнеризация
- **CSS Variables** - кастомизируемые стили

## 🏗 Архитектура

```
src/
├── components/          # Бизнес-компоненты
│   ├── DocumentSearch.vue
│   ├── DocumentList.vue
│   ├── DocumentCard.vue
│   └── DocumentPreview.vue
├── components/ui/      # UI-компоненты
│   ├── UiButton.vue
│   ├── UiInput.vue
│   ├── UiSpinner.vue
│   └── UiErrorMessage.vue
├── stores/            # Состояния Pinia
│   └── documentStore.ts
├── composables/       # Композаблы
│   └── useDebounce.ts
├── api/              # API слой
│   └── useDocumentApi.ts
├── types/            # TypeScript типы
│   └── document.ts
└── views/            # Страницы
    └── DashboardPage.vue
```

## 🎯 Особенности реализации

### State Management
- Централизованное управление состоянием через Pinia
- Разделение на state, getters и actions
- Обработка ошибок и состояний загрузки

### Type Safety
- Полная типизация данных документов
- TypeScript интерфейсы для пропсов и событий
- Строгая типизация API запросов

### Performance
- Debounce для поисковых запросов
- Оптимизированные re-renders
- Ленивая загрузка компонентов

### UX/UI
- Pixel-perfect реализация по макету Figma
- Montserrat шрифт как в требованиях
- Интуитивная навигация
- Визуальная обратная связь


## 📱 Адаптивность

Приложение полностью адаптивно и корректно отображается на:
- 💻 Десктоп (1280px+)
- 📱 Планшеты (768px - 1279px)
- 📱 Мобильные устройства (320px - 767px)
## ✅ Выполненные требования

### Обязательные
- ✅ Vue 3 Composition API
- ✅ Pinia для управления состоянием
- ✅ Переменные окружения для API URL
- ✅ Обработка ошибок API
- ✅ Предпросмотр документов

### Дополнительные плюсы
- ✅ TypeScript
- ✅ Прелоадеры для запросов
- ✅ Scoped CSS для изоляции стилей
- ✅ Docker контейнеризация
- ✅ Production сборка
- ✅ Pixel-perfect адаптив

## 📄 API

```typescript
// Получение документов с фильтрацией
GET /user/docs?search={query}

// Response: Document[]
interface Document {
  id: number;
  name: string;
  description: string;
  image?: string;
}
```

## 👥 Разработка

Проект разработан с акцентом на:
- **Модульность** - компоненты легко переиспользуются
- **Поддерживаемость** - чистый и понятный код
- **Масштабируемость** - архитектура готова к расширению
- **Производительность** - оптимизированные рендеры


