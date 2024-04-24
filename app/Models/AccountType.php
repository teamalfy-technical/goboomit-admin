<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AccountType extends Model
{
    use HasFactory;

    protected $table = 'account_types';

    protected $connection = 'mysql-main';


    public function influencers(): HasMany
    {
        return $this->hasMany(Influencer::class,'account_type_id');
    }

    public function businesses(): HasMany
    {
        return $this->hasMany(Business::class);
    }

}
