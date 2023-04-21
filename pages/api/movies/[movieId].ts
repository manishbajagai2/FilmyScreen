import { NextApiRequest, NextApiResponse } from "next"
import prismadb from "@/libs/prismadb"
import serverAuth from "@/libs/serverAuth"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method !== "GET") {
            return res.status(405).end()
        }

        await serverAuth(req, res)

        const { movieId } = req.query

        if (!movieId || typeof movieId !== "string") {
            throw new Error("Invalid Id")
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            },
        })

        if(!movie){
            throw new Error("Movie not found")
        }

        return res.status(200).json(movie)
    } catch (error) {
        console.log(error)
        return res.status(500).end()
    }
}
