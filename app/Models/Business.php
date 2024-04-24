<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Scopes\BusinessAccountTypeScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;


#[ScopedBy([BusinessAccountTypeScope::class])]
class Business extends Client
{


}
