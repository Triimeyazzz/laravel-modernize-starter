# Laravel Modernize Starter

Welcome to the Laravel Modernize Starter project! This starter template aims to provide a modern foundation for your Laravel application development, utilizing Laravel, Inertia.js, and Vue.js to create powerful, interactive, and efficient web applications.

## Features

- **Laravel**: Utilize the power of Laravel, a PHP framework known for its elegant syntax and robust features, to build the backend of your application.
- **Inertia.js**: Harness the benefits of Inertia.js, a modern JavaScript library that allows you to build single-page apps using server-side routing and controllers.
- **Vue.js**: Leverage Vue.js, a progressive JavaScript framework, to create dynamic and reactive user interfaces in your application.
- **Vuetify**: Enjoy the rich and versatile UI components provided by Vuetify, a Material Design component framework for Vue.js, to create stunning interfaces with ease.
- **Authentication**: Get started quickly with pre-configured authentication scaffolding provided by Laravel, including login, registration, password reset, and email verification.
- **Database**: Utilize Laravel's built-in ORM, Eloquent, to interact with your database seamlessly, supporting multiple database systems such as MySQL, PostgreSQL, SQLite, and SQL Server.

## Getting Started

To get started with the Laravel Modernize Starter, follow these simple steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/Kaynite/laravel-modernize-starter.git
```

2. Navigate to the project directory:

```
cd laravel-modernize-starter
```

3. Install PHP dependencies using Composer:

```
composer install
```

4. Install JavaScript dependencies using npm:

```
npm install
```

5. Copy the `.env.example` file and rename it to `.env`. Then, generate an application key:

```
cp .env.example .env
php artisan key:generate
```

6. Configure your database settings in the `.env` file.

7. Migrate the database:

```
php artisan migrate
```

8. Serve the application:

```
php artisan serve
```

Your Laravel Modernize Starter application should now be up and running! Visit `http://localhost:8000` in your web browser to see it in action.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize and extend the Laravel Modernize Starter to fit your specific project needs. Happy coding! 🚀
