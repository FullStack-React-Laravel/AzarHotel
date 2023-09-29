# Azar Hotel

## Setup and run project

### Fronend
- go to frontend resource `cd React`
- Install react packages `npm install`
- Run server frontend `npm run dev`

### Backend
- Install laravel packages `composer install`
- To configure application copy and paste `.env.example` file and rename it to `.env` and change settings db and URLs.
- Run migration first time with seeding(Fake data) `php artisan migrate --seed`
- If exists and need fresh db `php artisan migrate:fresh --seed`
- Run server backend `php artisan serve`
  
## Creators

-   Front End ([Mohamed Atef](https://github.com/Mohamedate))
-   Back End ([Saeed Ayman](https://github.com/saeed-ayman))
