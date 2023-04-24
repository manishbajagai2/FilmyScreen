import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}

export default function Home() {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()
  const { isOpen, closeModal } = useInfoModal()
  return (
      <>
          <InfoModal visible={isOpen} onClose={closeModal} />
          <Navbar />
          <Billboard />
          <div className="lg:absolute lg:top-[70%]">
              <MovieList title="Trending Now" data={movies} />
              <div className="lg:mt-12">
                <MovieList title="My List" data={favorites} />
              </div>
          </div>
      </>
  )
}
