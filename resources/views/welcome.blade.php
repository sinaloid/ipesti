<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>IPESTI</title>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/images/logo.png') }}" />
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/images/logo.png') }}" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

    @viteReactRefresh
    @vite('resources/js/app.js')
</head>

<body>
    <!-- React root DOM -->
    <div id="app" class="container-fluid">
    </div>
    <!-- React JS -->
</body>

</html>
