import { db } from "@/firebase/firebase.config";
import { TPortfolio } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export async function GET(_request: Request) {
  let portfolios: TPortfolio[] = [];

  const querySnapshot = await getDocs(collection(db, "portfolios"));

  querySnapshot.forEach((doc) => {
    portfolios.push({ id: doc.id, ...doc.data() } as TPortfolio);
  });

  return Response.json(portfolios);
}
