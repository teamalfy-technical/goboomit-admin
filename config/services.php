<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],


    'stripe' => [
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
        'webhook_secret' => env('STRIPE_WEBHOOK_SECRET'),
        'subscription_key' => 'paid',
        'default_currency' => 'DKK',
        'plans' => [
            'regular' => [
                'name' => 'Regular',
                'slug' => env('STRIPE_REGULAR_PLAN_SLUG', 'regular'),
            ],
            'influencer' => [
                'name' => 'Influencer',
                'slug' => env('STRIPE_INFLUENCER_PLAN_SLUG', 'influencer'),
            ],
            'vendor' => [
                'grow_boomit' => [
                    'name' => 'Grow Boomit',
                    'slug' => env('STRIPE_GROW_BOOMIT_PLAN_SLUG', 'grow_boomit'),
                    'features' => [
                        'campaigns_per_month' => 999999999,
                        'influencers_per_campaign' => 0,
                    ],
                    'basket_value_percentage' => 5,
                    'influencer_commission_percentage' => 0,
                ],
                'grow_boomit_influencer' => [
                    'name' => 'Grow Boomit Influencer',
                    'slug' => env('STRIPE_GROW_BOOMIT_INFLUENCER_PLAN_SLUG', 'grow_boomit_influencer'),
                    'product' => env('STRIPE_GROW_BOOMIT_INFLUENCER_PRODUCT_ID'),
                    'monthly_plan_id' => env('STRIPE_GROW_BOOMIT_INFLUENCER_MONTHLY_PRICE_ID'),
                    'yearly_plan_id' => env('STRIPE_GROW_BOOMIT_INFLUENCER_YEARLY_PRICE_ID'),
                    'features' => [
                        'campaigns_per_month' => 999999999,
                        'influencers_per_campaign' => 2,
                    ],
                    'basket_value_percentage' => 15,
                    'influencer_commission_percentage' => 5,
                ],
                'grow_boomit_pro_influencer' => [
                    'name' => 'Grow Boomit Pro Influencer',
                    'slug' => env('STRIPE_GROW_BOOMIT_PRO_INFLUENCER_PLAN_SLUG', 'grow_boomit_pro_influencer'),
                    'product' => env('STRIPE_GROW_BOOMIT_PRO_INFLUENCER_PRODUCT_ID'),
                    'monthly_plan_id' => env('STRIPE_GROW_BOOMIT_PRO_INFLUENCER_MONTHLY_PRICE_ID'),
                    'yearly_plan_id' => env('STRIPE_GROW_BOOMIT_PRO_INFLUENCER_YEARLY_PRICE_ID'),
                    'features' => [
                        'campaigns_per_month' => 999999999,
                        'influencers_per_campaign' => 5,
                    ],
                    'basket_value_percentage' => 10,
                    'influencer_commission_percentage' => 5,
                ]
            ],
        ]
    ],

];
