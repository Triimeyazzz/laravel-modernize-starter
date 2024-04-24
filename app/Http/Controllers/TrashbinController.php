<?php
namespace App\Http\Controllers;

use App\Models\Trashbin;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TrashbinController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $trashbins = QueryBuilder::for(Trashbin::class)
            ->allowedFilters([
                AllowedFilter::callback(
                    'q',
                    fn(Builder $query, $value) => $query
                        ->whereAny(['name', 'status', 'location', 'type'], 'LIKE', "%{$value}%")
                ),
            ])
            ->allowedSorts('id', 'name', 'status', 'location', 'type', 'created_at')
            ->defaultSort('-id')
            ->paginate($request->integer('per_page', 10));

        return Inertia::render('Trashbins/Index', [
            'trashbins' => JsonResource::collection($trashbins),
        ]);
    }

    public function coba(){
        return Inertia::render('Trashbins/Index');
    }

    public function coba1(){
        return Inertia::render('Trashbins/Trashbins1');
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

?>