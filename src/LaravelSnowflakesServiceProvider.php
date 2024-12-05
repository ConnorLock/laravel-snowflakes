<?php

namespace ConnorLock\LaravelSnowflakes;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class LaravelSnowflakesServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Blade::directive('snowflakes', function (bool $expression=true) {
            if ($expression) {
                $jsContents = file_get_contents(__DIR__ . '/snowflake.js');

                return "<script>$jsContents</script>";
            }

            return "";
        });
    }

    public function register()
    {

    }
}