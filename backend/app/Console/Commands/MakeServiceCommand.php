<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeServiceCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'create a new service';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $name = $this->argument('name');
        $className = ucfirst($name) . 'Service';
        $fileName = app_path("Services/{$className}.php");

        if (File::exists($fileName)) {
            $this->error('Service already exists!');
            return 1;
        }

        $stub = File::get(__DIR__.'/stubs/service.stub');
        $stub = str_replace('{{ClassName}}', $className, $stub);

        File::put($fileName, $stub);

        $this->info("Service {$fileName} created successfully!");
        return 0;
    }
}
