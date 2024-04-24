<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\WithdrawalStatus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Withdrawal extends Model
{


    protected $connection = 'mysql-main';
    protected $guarded = ['id', 'uuid'];


    public function user(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'user_id', );
    }

    protected $casts = [
        'status' => Wi::class,
    ];

    public function scopePaid(Builder$query): Builder
    {
        return $query->where('status', WithdrawalStatus::PAID);
    }




}
