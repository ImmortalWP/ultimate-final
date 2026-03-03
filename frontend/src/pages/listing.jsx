import React from "react";

export default function listing() {

    return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Listings</h1>
            <p className="text-muted-foreground">Manage your phone listings</p>
          </div>
          <Button asChild className="bg-sell hover:bg-sell/90 text-sell-foreground">
            <Link to="/sell">
              <Plus className="mr-2 h-4 w-4" /> Post New Listing
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : listings.length === 0 ? (
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="py-16">
              <div className="w-20 h-20 rounded-full bg-sell/10 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-10 w-10 text-sell" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No Listings Yet</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                You haven't posted any phones for sale yet. Start selling now!
              </p>
              <Button asChild className="bg-sell hover:bg-sell/90 text-sell-foreground">
                <Link to="/sell">
                  <Plus className="mr-2 h-4 w-4" /> Post Your First Listing
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id} className="relative">
                <CardContent className="p-4">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    {getStatusBadge(listing.status)}
                  </div>

                  {/* Photo */}
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {listing.photos && listing.photos.length > 0 ? (
                      <img
                        src={listing.photos[0]}
                        alt={`${listing.brand} ${listing.model}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Smartphone className="h-16 w-16 text-muted-foreground" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase">
                      {phoneBrands.find((b) => b.id === listing.brand)?.name || listing.brand}
                    </p>
                    <h3 className="font-semibold text-lg">{listing.model}</h3>
                    <p className="text-2xl font-bold text-sell">
                      रू{listing.asking_price.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Posted {formatDistanceToNow(new Date(listing.created_at), { addSuffix: true })}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={`/listing/${listing.id}`}>
                        <Eye className="mr-2 h-4 w-4" /> View
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {listing.status === "active" && (
                          <DropdownMenuItem
                            onClick={() => updateListingStatus(listing.id, "sold")}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Sold
                          </DropdownMenuItem>
                        )}
                        {listing.status !== "deleted" && (
                          <DropdownMenuItem
                            onClick={() => updateListingStatus(listing.id, "deleted")}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Listing
                          </DropdownMenuItem>
                        )}
                        {listing.status === "deleted" && (
                          <DropdownMenuItem
                            onClick={() => updateListingStatus(listing.id, "active")}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Reactivate
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}