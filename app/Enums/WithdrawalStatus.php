<?php

namespace App\Enums;

use BenSampo\Enum\Enum;
use phpDocumentor\Reflection\Types\Self_;

/**
 * @method static static PENDING()
 * @method static static PAID()
 */
final class WithdrawalStatus extends Enum
{
    const PENDING =   'pending';
    const PAID =   'paid';

    public static function html(string $value): string
    {
        return match ($value) {
            self::PAID => '<span class="badge badge-light-success">'. strtoupper($value) .'</span>',
            default => '<span class="badge badge-light-warning">'.  strtoupper($value) .'</span>'
        };
    }
}
