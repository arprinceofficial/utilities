## Installation

- Clone the repository
- Run `composer install`
- Create a new database
- Copy the `.env.example` file to `.env` and update the database credentials
- Run `php artisan key:generate`
- Run `php artisan storage:link`
- Run `php artisan migrate --seed`
- Run `php artisan db:seed --class=UserSeeder`
- Run `php artisan db:seed --class=RoleSeeder`
- Run `php artisan db:seed --class=PermissionsSeeder`
- Run `php artisan serve`
- Visit `http://localhost:8000`

## Important Commands

- Create a new model: `php artisan make:model Name`
- Create a new controller: `php artisan make:controller NameController`
- Create a new controller with resource methods: `php artisan make:controller NameController -r`
- Create a new table: `php artisan make:migration create_names_table`
- Run the migrations: `php artisan migrate` or `php artisan migrate:fresh` (drop all tables and re-run the migrations)
- Run the specific migration: `php artisan migrate --path=/database/migrations/name_migration.php`
- Rollback the last migration: `php artisan migrate:rollback`
- Get the status of migration `php artisan migrate:status`
- Rollback specific `php artisan migrate:rollback --path=/database/migrations/2024_12_01_000001_create_news_blogs_table.php`
- Create a new seeder: `php artisan make:seeder NameTableSeeder`
- Seed the database: `php artisan db:seed`
- Seed the database using the class name: `php artisan db:seed --class=NameTableSeeder`
- Create a new factory: `php artisan make:factory NameFactory`
- Create a new model factory: `php artisan make:factory NameFactory --model=Name`
- Create a new middleware: `php artisan make:middleware NameMiddleware`
- Create a new request: `php artisan make:request NameRequest`
- Create a new resource: `php artisan make:resource NameResource`
- Create a new event: `php artisan make:event NameEvent`
- Create a new listener: `php artisan make:listener NameListener`
- Create a new job: `php artisan make:job NameJob`
- Create a new mail: `php artisan make:mail NameMail`
- Create a new notification: `php artisan make:notification NameNotification`
- Create a new channel: `php artisan make:channel NameChannel`
- Create a new test: `php artisan make:test NameTest`
- Create a new policy: `php artisan make:policy NamePolicy`
- Cache the routes: `php artisan route:cache`
- Clear the cache: `php artisan cache:clear`
- Create a new package: `php artisan package:make Name`
- Create a new command: `php artisan make:command NameCommand`
- Create a new provider: `php artisan make:provider NameServiceProvider`
- Create a new event listener: `php artisan event:generate`
- Create a new resource controller: `php artisan make:controller NameController --resource`
- Create a new resource collection: `php artisan make:resource NameCollection`
- Show All Provider or Tag Lists: `php artisan vendor:publish` 
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
```
