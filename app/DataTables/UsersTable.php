<?php

namespace App\DataTables;

use App\Models\User;

class UsersTable
{
    protected $model = User::class;

    public function query()
    {
        return $this->model::query()
            ->when(request()->filled('q'), fn ($q) => $q);
    }

    public function headers(): array
    {
        return [
            [
                'key' => 'id',
                'title' => '#',
                'align' => 'start',
                'searchable' => false,
                'sortable' => false,
            ],
        ];
    }

    public function toArray(): array
    {
        return [
            'headers' => $this->headers(),
            'data',
            'meta',
        ];
    }
}
