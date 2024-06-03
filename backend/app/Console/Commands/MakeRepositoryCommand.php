<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeRepositoryCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new repository';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $name = $this->argument('name');
        $className = ucfirst($name) . 'Repository';
        $fileName = app_path("Repositories/{$className}.php");

        if (File::exists($fileName)) {
            $this->error('Repository already exists!');
            return 1;
        }

        $stub = File::get(__DIR__ . '/stubs/repository.stub');
        $stub = str_replace('{{ClassName}}', $className, $stub);
        $stub = str_replace('{{ModelClass}}',  $name, $stub); // Add this line

        File::put($fileName, $stub);

        $this->info("Repository {$fileName} created successfully!");
        return 0;
    }
}
