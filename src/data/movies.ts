export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    description: string;
    reviews: string[];
  }
  
  export const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      reviews: ["Amazing movie!", "Mind-blowing plot."],
    },
    {
      id: 2,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      description: "A hacker learns about the true nature of his reality and his role in the war against its controllers.",
      reviews: ["A revolutionary movie!", "Classic sci-fi."],
    },
    // Add more movie data here...
  ];
  