var documenterSearchIndex = {"docs":
[{"location":"api/#Exported-Functions","page":"API","title":"Exported Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [PointClouds]\nPrivate = false\nOrder   = [:type, :function]","category":"page"},{"location":"api/#PointClouds.AbstractSurface","page":"API","title":"PointClouds.AbstractSurface","text":"abstract type AbstractSurface{M<:Manifold,C<:CRS} end\n\nA surface of a PointSurface.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.ConstantSpacing","page":"API","title":"PointClouds.ConstantSpacing","text":"ConstantSpacing{L<:Unitful.Length} <: AbstractSpacing\n\nConstant node spacing.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.LogLike","page":"API","title":"PointClouds.LogLike","text":"LogLike <: VariableSpacing\n\nNode spacing based on a log-like function of the distance to nearest boundary x(x+a)     where x is the distance to the nearest boundary and a is a parameter to control     the growth rate as a = 1 - (g - 1) where g is the conventional growth rate     parameter.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.PointBoundary","page":"API","title":"PointClouds.PointBoundary","text":"struct PointBoundary{Dim,T,P}\n\nA boundary of points.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.PointCloud","page":"API","title":"PointClouds.PointCloud","text":"struct PointCloud{M,C} <: Domain{M,C}\n\nA point cloud.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.PointSurface","page":"API","title":"PointClouds.PointSurface","text":"struct PointSurface{M,C} <: AbstractSurface{M,C}\n\nThis is a typical representation of a surface via points.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.Power","page":"API","title":"PointClouds.Power","text":"Power <: VariableSpacing\n\nNode spacing based on a power of the distance to nearest boundary x^g where x is     the distance to the nearest boundary and g is the growth_rate.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.SurfaceElement","page":"API","title":"PointClouds.SurfaceElement","text":"struct SurfaceElement{M,C,N,A}\n\nRepresentation of a point on a <:PointSurface.\n\n\n\n\n\n","category":"type"},{"location":"api/#PointClouds.add_surface!-Tuple{PointBoundary, Vector{<:Point}, Symbol}","page":"API","title":"PointClouds.add_surface!","text":"add_surface!(boundary::PointBoundary, points::Vector{<:Point}\n\nAdd a surface to an existing boundary. Creates a new surface, unless a name of an existing surface is given and it is added to that.\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.compute_normals-Tuple{KNearestSearch, PointSurface}","page":"API","title":"PointClouds.compute_normals","text":"compute_normals(search_method::KNearestSearch, surf::PointSurface)\n\nEstimate the normals of a set of points that form a surface. Uses the PCA approach from \"Surface Reconstruction from Unorganized Points\" - Hoppe (1992).\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.compute_normals-Tuple{PointSurface}","page":"API","title":"PointClouds.compute_normals","text":"compute_normals(surf::PointSurface; k::Int=5)\n\nEstimate the normals of a set of points that form a surface. Uses the PCA approach from \"Surface Reconstruction from Unorganized Points\" - Hoppe (1992).\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.emptyspace-Union{Tuple{P}, Tuple{P, Vector{P}, Union{Unitful.Quantity{T, 𝐋, U}, Unitful.Level{L, S, Unitful.Quantity{T, 𝐋, U}} where {L, S}} where {T, U}}} where P<:Point","page":"API","title":"PointClouds.emptyspace","text":"emptyspace(testpoint, points)\n\nCheck if a point occupies empty space within a certain tolerance.\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.import_surface-Tuple{String}","page":"API","title":"PointClouds.import_surface","text":"import_surface(filepath::String)\n\nImport a surface mesh. Re-uses code from MeshBridge.jl, did not use their package because I needed to calculate face centers which they do not do.\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.orient_normals!-Tuple{AbstractVector{<:AbstractVector}, Any}","page":"API","title":"PointClouds.orient_normals!","text":"orient_normals!(normals::Vector{<:AbstractVector}, points; k::Int=5)\n\nCorrect the orientation of normals on a surface as the compute_normals function does not guarantee if the normal is inward or outward facing. Uses the approach from \"Surface Reconstruction from Unorganized Points\" - Hoppe (1992).\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.orient_normals!-Tuple{KNearestSearch, AbstractVector{<:AbstractVector}, Any}","page":"API","title":"PointClouds.orient_normals!","text":"orient_normals!(search_method::KNearestSearch, normals::AbstractVector{<:AbstractVector}, points)\n\nCorrect the orientation of normals on a surface as the compute_normals function does not guarantee if the normal is inward or outward facing. Uses the approach from \"Surface Reconstruction from Unorganized Points\" - Hoppe (1992).\n\n\n\n\n\n","category":"method"},{"location":"api/#PointClouds.update_normals!-Tuple{PointSurface}","page":"API","title":"PointClouds.update_normals!","text":"update_normals!(surf::PointCloud; k::Int=5)\n\nUpdate the normals of the boundary of a surf. This is necessary whenever the points change for any reason.\n\n\n\n\n\n","category":"method"},{"location":"api/#Private","page":"API","title":"Private","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [PointClouds]\nPublic = false\nOrder   = [:type, :function]","category":"page"},{"location":"getting_started/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = PointClouds","category":"page"},{"location":"#PointClouds.jl","page":"Home","title":"PointClouds.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Build Status) (Image: Stable) (Image: Dev) (Image: License File)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation for PointClouds.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package intends to provide functions for all things regarding point clouds.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Simply install the latest stable release using Julia's package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"] add https://github.com/JuliaMeshless/PointClouds.jl","category":"page"},{"location":"#Quick-Start","page":"Home","title":"Quick Start","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Although there are a number of features in this package, the initial use case is for generating point clouds for use in numerical solution of PDEs via a meshless method.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can load a surface mesh and extract the boundary points using the PointBoundary constructor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PointClouds\nboundary = PointBoundary(joinpath(@__DIR__, \"assets/bunny.stl\"))","category":"page"},{"location":"","page":"Home","title":"Home","text":"and we can visualize it with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using GLMakie\nvisualize(boundary; markersize=0.15)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: bunny boundary)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then we can generate a point cloud using the PointCloud constructor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"spacing = ConstantSpacing(1m)\ncloud = discretize(boundary, spacing; alg=VanDerSandeFornberg(), max_points=100_000)","category":"page"},{"location":"","page":"Home","title":"Home","text":"and we can visualize again with visualize(cloud; markersize=0.15)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: bunny discretized)","category":"page"}]
}