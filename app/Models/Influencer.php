<?php
declare(strict_types=1);


namespace App\Models;

use App\Models\Scopes\InfluencerAccountTypeScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;

#[ScopedBy([InfluencerAccountTypeScope::class])]
class Influencer extends Client
{


}
