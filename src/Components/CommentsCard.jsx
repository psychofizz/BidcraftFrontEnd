import React, { useState, useEffect } from "react";

const CommentsCard = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = () => {
      try {
        // Datos estáticos de ejemplo
        const staticComments = [
          {
            name: "Alice Johnson",
            profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 4,
            comment: "This is a great product! I really enjoyed using it.",
          },
          {
            name: "Bob Smith",
            profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 5,
            comment: "Excellent quality and fast shipping. Highly recommend!",
          },
          {
            name: "Charlie Brown",
            profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
            rating: 3,
            comment: "It's okay, but I expected a bit more.",
          },
          {
            profileImage:
              "https://randomuser.me/api/portraits/men/42.jpg",
            name: "Mikel Arteta",
            comment: "No recomiendo mucho.",
            rating: 2,
          },
        ];
        setComments(staticComments);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 border border-gray-200"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="h-24 w-24 object-cover rounded-full m-4"
                src={comment.profileImage}
                alt={comment.name}
              />
            </div>
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{comment.name}</h2>
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${
                        index < comment.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.396 2.466a1 1 0 00-.363 1.118l1.286 3.959c.3.921-.755 1.688-1.54 1.118l-3.396-2.466a1 1 0 00-1.176 0l-3.396 2.466c-.784.57-1.839-.197-1.54-1.118l1.286-3.959a1 1 0 00-.363-1.118L2.555 9.386c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.959z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsCard;
