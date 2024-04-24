<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\BusinessAccountTypeScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Concerns\HasRelationships;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WithdrawalPayment extends Model
{


    protected $connection = 'mysql-main';
    protected $guarded = ['id', 'uuid'];


    public function withdrawal(): BelongsTo
    {
        return $this->belongsTo(Withdrawal::class);
    }


}
