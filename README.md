# Vue 3 + Vite

project-root/
│
├── src/
│ ├── domain/ # Contains domain logic
│ │ ├── entities/ # Define domain entities/models
│ │ └── repositories/ # Interfaces defining data access methods
│ │
│ ├── application/ # Application-specific logic
│ │ ├── usecases/ # Implement use cases interacting with domain
│ │ └── services/ # Services for business logic
│ │
│ ├── interfaces/ # Interfaces for external interactions
│ │ ├── controllers/ # Vue components acting as controllers
│ │ └── data/ # API, database, or external data interfaces
│ │
│ ├── components/ # Reusable Vue components
│ ├── views/ # Vue components representing views/pages
│ └── App.vue
│
└── ...
