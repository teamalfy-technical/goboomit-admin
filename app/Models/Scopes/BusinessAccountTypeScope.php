<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class BusinessAccountTypeScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        $builder->whereHas('accountType', function ($builder) {
            $builder->whereIn('slug', [
                config('services.stripe.plans.vendor.grow_boomit.slug'),
                config('services.stripe.plans.vendor.grow_boomit_influencer.slug'),
                config('services.stripe.plans.vendor.grow_boomit_pro_influencer.slug')
            ]);
        });
    }
}
