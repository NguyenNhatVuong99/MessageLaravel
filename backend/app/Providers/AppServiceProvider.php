<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton('command.make.repository', function ($app) {
            return $app['App\Console\Commands\MakeRepositoryCommand'];
        });

        $this->commands([
            'command.make.repository',
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
