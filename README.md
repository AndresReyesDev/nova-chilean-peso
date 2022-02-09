# Campo Peso Chile para Laravel Nova

Mask field for chilean peso currency

### Install

Run this command into your nova project:

`composer require andresreyesdev/nova-chilean-peso`

### Add it to your Nova Resource:

```php
use AndresReyesDev\PesoChile\PesoChile;

PesoChile::make('Valor Total', 'valor_total'),
```
