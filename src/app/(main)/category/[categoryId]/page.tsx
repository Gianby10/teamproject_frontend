import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MovieSearchBar from "@/components/MovieSearchBar";
import MoviesList from "@/components/MoviesList";
import { MoviesCategoryResponse, MoviesResponse } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    categoryId: string;
  };
};

const getMovies = async (categoryId: string) => {
  const response = await fetch(
    `http://127.0.0.1:4444/api/movies/category/${categoryId}`,
    {
      method: "GET",
    }
  );
  const data: MoviesCategoryResponse = await response.json();
  return data;
};

const CategoryPage = async ({ params }: Props) => {
  const searchParams = await params;
  const categoryId = searchParams.categoryId;
  const movies = await getMovies(categoryId);
  const categoryName = movies[0].categories[0].category.name;
  return (
    <MaxWidthWrapper>
      <div className="space-y-8">
        {/* Categoria Titolo e Descrizione */}
        <div className="text-center my-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Movies in {categoryName} Category
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Discover movies that belong to the {categoryName} category and
            explore your options.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Movies</h2>

          {movies && movies.length > 0 ? (
            <MoviesList initialMovies={movies} />
          ) : (
            <p className="text-gray-500">No movies found in this category.</p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CategoryPage;
