<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        $users = QueryBuilder::for(User::class)
            ->allowedFilters([
                AllowedFilter::callback('q', fn (Builder $query, $value) => $query
                    ->whereAny(['name', 'email'], 'LIKE', "%{$value}%")
                ),
            ])
            ->allowedSorts('id', 'name', 'email', 'created_at')
            ->defaultSort('-id')
            ->paginate($request->integer('per_page', 10));

        return Inertia::render('Users/Index', [
            'users' => JsonResource::collection($users),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
