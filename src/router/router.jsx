import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../common/layout/layout";
import { FavoritesPage } from "../features/favorites/page/favorites-page";
import { CharacterList } from "../features/components/character-list";
import { CharacterDetailPage } from "../features/characters/pages/character-detail-page";
import { CharactersPage } from "../features/characters/pages/characters-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CharactersPage />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetailPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
