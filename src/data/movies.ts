export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    description: string;
    reviews: { content: string; rating: number }[]; // Update this to include rating with each review
  }
  
  export const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      reviews: [
        { content: "Amazing movie!", rating: 9 },
        { content: "Mind-blowing plot.", rating: 8 },
      ],
    },
    {
      id: 2,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      description: "A hacker learns about the true nature of his reality and his role in the war against its controllers.",
      reviews: [
        { content: "A revolutionary movie!", rating: 9 },
        { content: "Classic sci-fi.", rating: 8 },
      ],
    },
    // More movies...
  ];
  